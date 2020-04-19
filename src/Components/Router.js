  import React from "react";
  import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

  import Home from "../Routes/Home";
  import TV from "../Routes/TV";
  import Header from "./Header";
  import Search from "../Routes/Search";
  import Detail from "../Routes/Detail";
  

  export default () => (
      <Router>
          <>
          <Header />
          <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/tv" exact component={TV} />
          <Route path="/search"  component={Search} />
          <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
            {/*이상한주소를 칠시 홈으로 돌아가기*/}
          </Switch>
          </>
      </Router>
  );