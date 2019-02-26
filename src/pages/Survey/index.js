import React, { Component } from "react";

import { connect } from "react-redux";

import style from "./survey.less";

import logoBg from "@/images/login/logo.png";

import Layout from "@/components/Layout";

import Table from "@/components/Table";

class Survey extends React.Component {
  handleClick = () => {
    this.props.add();
  };

  render() {
    return (
      <Layout history={this.props.history}>
        <div className="survey-page-container">

          <div>
            <button onClick={this.handleClick.bind(this)}>新增</button>
          </div>

          <Table data={this.props.list}>
            <Table.Column dataIndex="a" title="工单编号" />
            <Table.Column dataIndex="b" title="工单名称" />
            <Table.Column dataIndex="c" title="建单时间" />
            <Table.Column dataIndex="d" title="处理时限" />
            <Table.Column dataIndex="e" title="工单状态" />
            <Table.Column dataIndex="h" title="操作" />
          </Table>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => {
  return {
    list: state.survey.list
  };
};

const mapDispatchToProps = dispatch => {
  return {
    add: ()=>{ dispatch({type: 'ADD' , data: { a: '1' }}) }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Survey);
