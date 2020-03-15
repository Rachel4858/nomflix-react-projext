import React from "react";
import TVPresenter from "./TVPresenter";
import {tvApi} from "../../api";

export default class extends React.Component {
  state = {
    topRated: null,
    popular: null,
    airingToday: null,
    error: null,
    loading: true
  };

  async componentDidMount() {
    try {
      const topRated = await tvApi.topRated();
      const popular = await  tvApi.popular();
      const airingToday = await tvApi.airingToday();
      console.log(topRated, popular, airingToday);
    } catch {
      this.setState({
        error: "Can't find movies information."
      })
    } finally {
      this.setState({ loading: false });
    }
  }


  render() {
    const {topRated, popular, airingToday, error, loading} = this.state;
    return (
      <TVPresenter
        topRated={topRated}
        popular={popular}
        airingToday={airingToday}
        error={error}
        loading={loading}
      />
    );
  }
}