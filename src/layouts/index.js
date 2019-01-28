import React from 'react';
import LoginLayout from './LoginLayout';
import CommonLayout from './CommonLayout';
import { builder } from '@/util/tool';
import { Switch , Route } from 'react-router-dom';
import routerList from '@/router.js';

let layoutTpl = {
    LoginLayout,
    CommonLayout
}

export default function() {
    return (
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
    )
}

