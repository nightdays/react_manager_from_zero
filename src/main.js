import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router } from 'react-router-dom';
import layoutRouter from '@/layouts'
import api from '@/api';

window.api = api;

// import '@/pages/Login/Login.less';

import './style/main.less'

let clientWidth = document.documentElement.clientWidth;

// document.documentElement.style["font-size"] = clientWidth / 750 * 40 + 'px';
document.documentElement.style["font-size"] = clientWidth / 1920 * 40 + 'px';

ReactDOM.render( <Router>{layoutRouter()}</Router> , document.getElementById('app'));

