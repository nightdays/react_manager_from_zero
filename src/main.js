import React from "react";
import ReactDOM from "react-dom";
import { Provider, connect } from "react-redux";
// import { ConnectedRouter as Router } from "react-router-redux";
import { createHashHistory } from "history";
import { HashRouter as Router , Switch, Route } from "react-router-dom";
// const history = createHashHistory();
import store from "./store";
import api from "@/api";
import router from './router/index.js';

window.api = api;

import "./style/main.less";

let clientWidth = document.documentElement.clientWidth;

// document.documentElement.style["font-size"] = clientWidth / 750 * 40 + 'px';
document.documentElement.style["font-size"] = (clientWidth / 1920) * 40 + "px";
document.body.style["font-size"] = "20px";



ReactDOM.render(
  <Provider store={store}>
    {router()}
  </Provider>,
  document.getElementById("app")
);
