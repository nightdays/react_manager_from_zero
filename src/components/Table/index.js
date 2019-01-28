import React , {Component} from 'react';
import Row from './tpl/Row';
import Col from './tpl/Col'


class Table extends Component {
    constructor(props) {
        super(props);
    }

    render() {

        let children = this.props.children;
        let columns = children.map((child)=>{
            return child.props;
        })
        let list = this.props.list;

        return (
            <table className="table">
                <thead>
                    <tr>
                        {
                            columns.map((column,index)=>{

                                return (
                                    <th key={index}>
                                        {column.title}
                                    </th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        list.map((item,index)=>{
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

