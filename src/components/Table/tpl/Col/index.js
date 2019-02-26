import React , {Component} from 'react';


class Col extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let renderCustom = this.props.renderCustom;
        let data = this.props.data;
        let value = this.props.value;
        if(!data) return null;


        let content;

        if(typeof renderCustom=='function') {
            content = renderCustom(data);
        }else {
            content = value;
        }

        return (
            <td className="col">
                <div className="cell">{content}</div>
            </td>
        )
    }
}

export default Col;