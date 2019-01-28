import React, { Component } from "react";
import "./User.less";
import Table from "@/components/Table";
import Button from "@/components/Button";
import Input from "@/components/Input";
import { Form, FormItem } from "@/components/Form";
import api from "../../api";
import Dialog from "@/components/Dialog";

class User extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queryForm: {
        username: "",
        age: ""
      },
      submitForm: {
        username: "",
        age: "",
        sex: ""
      }
    };
  }

  render() {
    let list = [
      {
        name: "大天狗",
        sex: "1",
        age: "5000"
      },
      {
        name: "酒吞童子",
        sex: "2",
        age: "10000"
      }
    ];

    return (
      <div>
        <Form value={this.state.queryForm} onChange={this.queryFormChange}>
          <Input name="username" className="formItem" />
          <Input name="age" className="formItem" />
          <Button onClick={this.queryFormSubmit}>查询</Button>
          <Button onClick={this.showAdd}>新增</Button>
        </Form>

        <Table list={list}>
          <Table.Column title="姓名" dataIndex="name" />
          <Table.Column
            title="性别"
            dataIndex="sex"
            renderCustom={this.renderSex}
          />
          <Table.Column title="年龄" dataIndex="age" />
        </Table>

        <Dialog title="编辑用户">
          <Form value={this.state.submitForm} onChange={this.submitFormChange}>
            <div>
              姓名：
              <FormItem name="username">
                <Input />
              </FormItem>
            </div>
            <div>
              性别：
              <FormItem name="sex">
                <Input />
              </FormItem>
            </div>
            <div>
              年龄：
              <FormItem name="age">
                <Input />
              </FormItem>
            </div>
            <Button onClick={this.submitFromSubmit}>提交</Button>
          </Form>
        </Dialog>
      </div>
    );
  }

  queryFormSubmit = async () => {
    console.log(this.state.queryForm);
    let result = await api.userList({ pageNum: 1 });
    if (result.code == 0) {
      this.state.list = result.data;
    }
  };

  queryFormChange = queryForm => {
    this.setState({
      queryForm
    });
  };

  submitFormChange = submitForm => {
    this.setState({
      submitForm
    });
  };

  submitFromSubmit = () => {
    console.log(this.state.submitForm);
  };

  renderSex = item => {
    return <div>{item.sex == 1 ? "男" : "女"}</div>;
  };
}

export default User;
