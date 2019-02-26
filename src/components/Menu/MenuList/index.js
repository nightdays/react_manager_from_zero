import React, { Component } from "react";
import PropTypes from 'prop-types';
import style from "./MenuList.less";

class MenuList extends Component {

  constructor(props){
    super(props);

    this.instanceType = 'MenuList';

    this.state = {
      paddingLeft : 20,
      isOpen: '' //open
    }
  }

  getParent() {
    return this.context.component;
  }
  

  handleExpand() {
    if(this.state.isOpen == 'open') {
      this.expand('');
    }else{
      this.expand('open');
    }
  }

  expand(isOpen){
    this.setState({isOpen: isOpen});
  }

  getChildContext() {
    return {
      component : this
    }
  }

  getLevel() {
    let level =0;
    let parent = this.getParent();
    let parentType = parent.instanceType;

    if(parentType=='MenuList') {
      level++;
    }

    this.setState({paddingLeft : this.state.paddingLeft + level * 10});
  }

  componentWillMount(){
    this.getLevel();
  }

  render() {
    return (
      <div className="menu-list">
        <div className="menu-list-title" onClick={this.handleExpand.bind(this)} style={{paddingLeft : this.state.paddingLeft}}>
            { this.props.label }
        </div>
        <div className={"menu-list-submenu "+this.state.isOpen}>
            { this.props.children }
        </div>
      </div>
    );
  }
  
}

MenuList.childContextTypes = {
  component : PropTypes.object
}

MenuList.contextTypes = {
  component: PropTypes.object
}


export default MenuList;
