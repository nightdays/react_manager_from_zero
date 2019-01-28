import React, { Component } from "react";
import PropTypes from 'prop-types';

class Form extends Component {
    static childContextTypes = {
        getItem : PropTypes.func,
        setItem : PropTypes.func
    }

    getChildContext() {
        return {
            getItem : this.getItem,
            setItem : this.setItem
        }
    }

  constructor(props) {
    super(props);
    this.state = {};
  }

  handleChange(k, v){
      let temp = this.props.value;
      temp[k] = v;
      if(typeof this.props.onChange == 'function') {
        this.props.onChange(temp);
      }
  }

  getItem = (k)=>{
      return this.props.value[k];
  }

  setItem = (k , v)=>{
      this.handleChange(k,v);
  }


  render() {
    return (
        <div className="form">
            {this.props.children}
        </div>
    );
  }
}

export default Form;
