import React from "react";
import HomePresenter from "./HomePresenter";
import {moviesApi} from "../../api";

export default class extends React.Component {
  state = {
    nowPlaying: null,
    upComing: null,
    popularL: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const nowPlaying = await moviesApi.nowPlaying();
      console.log(nowPlaying);
    } catch {
      this.setState({
        error: "Can't find Movies information."
      });
    } finally {
      this.setState({
        loading: false
      });
    }
  }

  render() {
    const {nowPlaying, upcoming, popular, error, loading} = this.state;
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