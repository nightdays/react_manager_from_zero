import React, { Component } from "react";
import PropTypes from 'prop-types';

class FormItem extends Component {
  static contextTypes = {
    getItem : PropTypes.func,
    setItem : PropTypes.func
  }

  constructor(props) {
    super(props);
    this.name = props.name;
  }


  handleChange = (v)=>{
      this.context.setItem(this.name , v);
  };

  renderChildren() {
      let child = React.Children.only(this.props.children);
      if(!this.name) return child;
      return React.cloneElement(child , {
        value : this.context.getItem(this.name), 
        onChange : this.handleChange
      });
  }

  render() {
    return (
        <div className="form-item">
            {this.renderChildren()}
        </div>
    );
  }
}

export default FormItem;
