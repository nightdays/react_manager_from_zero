import React, { Component } from "react";

import style from "./Layout.less";

import logo from "@/images/common/mobile-logo.png";

import Menu from "@/components/Menu";

import { connect } from "react-redux";

class Layout extends React.Component {
  toRoute(pathname) {
    if (this.props.history.location.pathname == "/" + pathname) {
      return;
    }
    this.props.history.push({ pathname: "/" + pathname });
  }

  render() {

    let path = this.props.history.location.pathname ;

    return (
      <div className="layout-container">
        <div className="top-bar">
          <img className="logo" src={logo} />
          <div className="text">{this.props.detail.name} ></div>
        </div>
        <div className="side-bar">
          <Menu active={path}>
            <Menu.SubMenu label="工作台" index="/workspace">
              <Menu.SubMenu label="待办工单" index="/none">
                <Menu.Item label="数据专线勘察" index="/survey" />
                <Menu.Item label="本地数据专线" index="/special" />
              </Menu.SubMenu>
            </Menu.SubMenu>
            <Menu.Item label="工单综合查询" index="/general" />
          </Menu>
        </div>

        <div className="content-container">{this.props.children}</div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    detail: state.user.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Layout);
