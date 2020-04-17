import React from "react";
import SearchPresenter from "./SearchPresenter";
import {moviesApi} from "../../api";
import {tvApi} from "../../api";

export default class extends React.Component {
  state = {
    movieResults: null,
    tvResults: null,
    searchTerm: "",
    error: null,
    loading: false
  };

  handleSubmit = (event) => { // 검색창에 검색 후 엔터를 누르면 searchTerm이 빈칸이 아닌것을 체크 후 search함수 실행
    event.preventDefault();
    const {searchTerm} = this.state;
    if (searchTerm !== "") {
      this.searchByTerm();
    }
  };

  updateTerm = (e) => {
    const {target: {value}} = e;
    this.setState({
      searchTerm:value
    })
  };

  searchByTerm = async () => {
    const {searchTerm} = this.state;
    this.setState({loading: true});
    try {
      // throw Massage()
      const {data: {results: movieResults}} = await moviesApi.search(searchTerm);
      const {data: {results: tvResults}} = await tvApi.search(searchTerm);
      this.setState({
        movieResults,
        tvResults
      });
    } catch {
      this.setState({error: "Can't find results."});
    } finally {
      this.setState({loading: false});
    }
  };

  render() {
    const {movieResults, tvResults, searchTerm, error, loading} = this.state;
    // console.log(this.state)
    return (
      <SearchPresenter
        movieResults={movieResults}
        tvResults={tvResults}
        searchTerm={searchTerm}
        error={error}
        loading={loading}
        handleSubmit={this.handleSubmit}
        updateTerm={this.updateTerm}
      />
    );
  }
}