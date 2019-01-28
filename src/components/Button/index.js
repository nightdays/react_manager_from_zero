import React, { Component } from 'react';

class Button extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        let onClick = this.props.onClick;
        if(typeof onClick == 'function') {
            this.props.onClick();
        }
    }

    render() {
        let text = this.props.children;

        return (
            <button onClick={this.handleClick.bind(this)}>{text}</button>
        )
    }
}

export default Button;