import React , {Component} from 'react';
import Row from './tpl/Row';
import Col from './tpl/Col'
import style from './Table.less';


class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let children = this.props.children;
        let columns = children.map((child)=>{
            return child.props;
        })
        let data = this.props.data || [];

        return (
            <table className="table" >
                <thead className="table-header">
                    <tr>
                        {
                            columns.map((column,index)=>{

                                return (
                                    <th key={index}>
                                        <div className="cell">{column.title}</div>
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody className="table-body">
                    {
                        data.map((item,index)=>{
                            return (
                                <Row columns={columns} data={item} key={index} />
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

Table.Column = Col;
export default Table;

