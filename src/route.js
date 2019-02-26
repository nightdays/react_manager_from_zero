import React from "react";
import Login from "@/pages/Login";
import Special from "@/pages/Special";
import Survey from "@/pages/Survey";
// import System from "@/pages/System";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

const router = () => {
  return (
    <Router>
      <Switch>
        <Route path="/"  component={Login} exact />
        <Route path="/login" component={Login} />
        <Route path="/special" component={Special} />
        <Route path="/survey" component={Survey} />
      </Switch>
    </Router>
  );
};

export default router;
