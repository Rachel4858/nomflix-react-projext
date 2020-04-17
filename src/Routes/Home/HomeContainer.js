import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upcoming: null,
    popular: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const {data: { results: nowPlaying }} = await moviesApi.nowPlaying(); // 비구조 할당으로 꺼내서 다시 이름지정해서 불러오기
      //awiat뒤가 끝나기 전에는 다른것을 진행하지 말아달라는 의미(여기서 끝났다는것과 성공했다는것은 다르다.)
      // 실패할수도있고 성공할수도있는데 일단은 기다려주는것이다.
      // 자바스크립트는 나를 기다려주지않는다. 하지만 async/awiat은 기다려준다(일이끝나기를기다려준다는 의미)
      // console.log(nowPlaying)
      const {data: { results: upcoming }} = await moviesApi.upcoming();
      const {data: { results: popular }} = await moviesApi.popular();
      // throw Error(); // 만약이렇게 중간에 에러가 발생하면 .catch를 타게된다.
      this.setState({
        nowPlaying:nowPlaying, // 같으면 한번만써도된다.
        upcoming,
        popular
      })
    } catch {
      this.setState({
        error: "Can't find Movies information."
      });
    } finally { // finally는 무조건 결과가 끝나면 실행된다.
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const {nowPlaying, upcoming, popular, error, loading} = this.state;
    // console.log(this.state)
    return (
      <HomePresenter
        nowPlaying={nowPlaying}
        upcoming={upcoming}
        popular={popular}
        error={error}
        loading={loading}
      />
    );
  }
}