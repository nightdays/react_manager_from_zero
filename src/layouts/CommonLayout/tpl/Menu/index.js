import React,{Component} from 'react';
import './Menu.less';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    handleClick() {
        if(this.props.onClick && typeof this.props.onClick == 'function' ) {
            this.props.onClick();
        }
    }

    render() {
        return (
            <div className={"menu " +  (this.props.active?'active':'' )} onClick={this.handleClick.bind(this)}>
                <i className="menu-icon"></i>
                <span className="menu-title">{this.props.name}</span>
            </div>
        )
    }
}

export default Menu;