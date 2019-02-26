import React, { Component } from "react";

import style from "./Special.less";


class Dialog extends React.Component {
  handleClick = () => {
    this.props.getList();
  };

  componentWillMount(){
    this.props.getList();
  }

  render() {
    return (
      <Layout history={this.props.history}>
        <div className="special-page-container">

          <div>
            <button onClick={this.handleClick.bind(this)}>新增</button>
          </div>

          <Table data={this.props.list}>
            <Table.Column dataIndex="a" title="工单编号" />
            <Table.Column dataIndex="b" title="工单名称" />
            <Table.Column dataIndex="c" title="建单时间" />
            <Table.Column dataIndex="d" title="处理时限" />
            <Table.Column dataIndex="e" title="工单状态" />
            <Table.Column dataIndex="f" title="工单发起部门" />
            <Table.Column dataIndex="g" title="发起人" />
            <Table.Column dataIndex="h" title="操作" />
          </Table>
        </div>
      </Layout>
    );
  }
}

export default Dialog;

