import React from 'react';
import LoginLayout from '@/layouts/LoginLayout';
import CommonLayout from '@/layouts/CommonLayout';
import MainLayout from '@/layouts/MainLayout';
import { builder } from '@/util/tool';
import routerList from './router.js';
import { HashRouter as Router, Switch, Route } from "react-router-dom";

import { connect } from "react-redux";

let layoutTpl = {
    LoginLayout,
    CommonLayout,
    MainLayout
}

export default function(props) {
    return (
        <Router>
        <Switch>
            {
                routerList.map((router , index)=>{

                    let layout = layoutTpl[router.layout];
                    if(layout) {
                        let comp = builder(layout , router.component);
                        return <Route path={router.path} component={comp} key={'route'+index} exact={router.exact} />
                    }else {
                        return null;
                    }
                })
            }
            
        </Switch>
        </Router>   
    )
}
