import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import App from "../App";
import Description from "../Description/Description";
function AppRouter() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/description/:title" component={Description} />
      </Switch>
    </Router>
  );
}

export default AppRouter;
