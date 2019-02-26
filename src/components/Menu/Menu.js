import React, { Component  } from "react";
import PropTypes from 'prop-types';
import style from "./Menu.less";


class Menu extends React.Component {

  constructor(props) {
    super(props);

    this.instanceType = "Menu";
  }

  toRoute(pathname) {
    if (this.props.history.location.pathname == "/" + pathname) {
      return;
    }
    this.props.history.push({ pathname: "/" + pathname });
  }

  getChildContext (){
    return {
      component: this
    }
  }


  handleExpand(event) {
    let submenu = event.target.nextSibling;
    console.log(this.context.component);
    submenu.classList.toggle('open');
  }

  render() {
    let padding = 20;

    return (
      <div className="menu-bar">
        {this.props.children}
      </div>
    );
  }
}



Menu.childContextTypes = {
  component : PropTypes.object
}



const mapStateToProps = state => {
  return {
    detail: state.user.detail
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default Menu;
