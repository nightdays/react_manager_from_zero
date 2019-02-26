import React, { Component } from "react";
import Login from "@/pages/Login";
import Special from "@/pages/Special";
import Survey from "@/pages/Survey";
// import System from "@/pages/System";
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

class Test extends Component {
    render() {
        return (
        <Router>
            <Switch>
            <Route path="/"  component={Login} exact />
                <Route path="/login" component={Login} />
                <Route path="/special" component={Special} />
                <Route path="/survey" component={Survey} />
            </Switch>
        </Router>)
    }
    
}


const router = ()=>{
    return (
        <Test />
    )

}

export default router;