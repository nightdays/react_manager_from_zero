import React , {Component} from 'react';
import './Dialog.less';

class Dialog extends Component {

    constructor(props){
        super(props)
    }

    render() {
        let { title , children , visible } = this.props;

        return (
            <div className={"dialog"}>
                <div className="title">
                    {title}
                </div>
                <div className="content">
                    {children}
                </div>
            </div>
        )
    }
}

export default Dialog;