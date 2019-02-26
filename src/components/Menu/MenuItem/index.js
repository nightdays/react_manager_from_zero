import React, { Component } from "react";
import PropTypes from 'prop-types';

class MenuItem extends Component {

  constructor(props) {
    super(props);

    this.state = {
      paddingLeft : 20,
      active: false
    }
  }  

  getParent() {
    return this.context.component;
  }

  getLevel() {
    let level =0;
    let parent = this.getParent();
    let parentType = parent.instanceType;
    let index = 0;

    while( index<10 && parentType != 'Menu' ){
      if(parentType=='MenuList') {
        level++;
      }
      parent = parent.getParent();
      parentType = parent.instanceType;
      index++;
    }

    this.setState({paddingLeft : this.state.paddingLeft + level * 10});
  }

  openList(){
    let parent = this.getParent();
    let parentType = parent.instanceType;
    let index = 0;

    while( index<10 && parentType != 'Menu' ){
      parent.expand('open');

      parent = parent.getParent();
      parentType = parent.instanceType;
      index++;
    }
  }

  getRoot() {
    let parent = this.getParent();
    let parentType = parent.instanceType;
    let index = 0;

    while( index<10 && parentType != 'Menu' ){
      if(parentType=='MenuList') {
      }
      parent = parent.getParent();
      parentType = parent.instanceType;
      index++;
    }

    return parent;
  }

  getClassName() {

    let className = ['menu-item'];

    this.state.active && className.push('active');

    return className.join(' ');
  }

  isActive() {
    return this.props.index == this.getRoot().props.active;
  }

  componentWillMount(){
    let isActive = this.isActive();
    this.setState({active : isActive});

    this.getLevel();

    if(isActive) {
      this.openList();
    }
    
  }

  render() {
    let index = this.props.index;
    let label = this.props.label;

    return (
      <div className={this.getClassName()}  index={index}>
        <div className="menu-item-title"  style={{paddingLeft : this.state.paddingLeft}}>{label}</div>
      </div>
    );
  }
}

MenuItem.contextTypes = {
  component: PropTypes.object
}

MenuItem.propTypes = {
  index : PropTypes.string.isRequired
}

export default MenuItem;
