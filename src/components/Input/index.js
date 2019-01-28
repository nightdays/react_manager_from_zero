import React, { Component } from 'react';

class Input extends Component {
    constructor(props) {
        super(props);
    }

    handleChange = ()=>{
        if(typeof this.props.onChange == 'function') {
            this.props.onChange(event.target.value);
        }
    }

    render() {
        return (
            <input value={this.props.value} onChange={this.handleChange} />
        )
    }
}

export default Input;