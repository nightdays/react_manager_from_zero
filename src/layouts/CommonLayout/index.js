import React,{Component} from "react";
import "./CommonLayout.less";
import {sideMenu} from '@/menuConfig.js';
import Menu from './tpl/Menu'

class CommonLayout extends Component {

  constructor(props) {
    super(props);
  }

  toPage(menu) {
    if(this.props.location.pathname == menu.path) {

    }else {
      this.props.history.push(menu.path);
    }
  }

  render(){
    return <div>{this.props.children}</div>
  }

  renderX() { 
    let location = this.props.location;

    return (
      <div className="common-layout">
        <div className="header-section" />
        <div className="left-section">
            {
              sideMenu.map((menu , index)=>{
                return <Menu name={menu.name} path={menu.path} key={index} active={location.pathname == menu.path} onClick={this.toPage.bind(this , menu)} />
              })
            }
        </div>
        <div className="right-section">{this.props.children}</div>
      </div>
    );
  }

}

export default CommonLayout;
