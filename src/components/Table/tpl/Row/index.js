import React , {Component} from 'react';
import Col from '../Col';


class Row extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let columns = this.props.columns;
        let data = this.props.data;

        return (
            <tr className="row">
                {
                    columns.map((item,index)=>{
                        return (
                            <Col renderCustom={item.renderCustom} value={data[item.dataIndex]} key={index}  data={data} />
                        )
                    })
                }
            </tr>
        )
    }
}

export default Row;