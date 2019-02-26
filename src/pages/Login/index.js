import React , {Component} from 'react';

import {connect} from 'react-redux';

import style from './Login.less';

import logoBg from '@/images/login/logo.png';


class Login extends React.Component {


    handleClick=()=>{
      this.props.history.push({pathname: '/special'});
    }

    render(){

        return (
            <div className="login-page-container">

            <div className="logo">
              <img className="img" src={logoBg} />
              <span className="text">中国移动通信集团北京有限公司</span>
            </div>
        
            <div className="login-component">
              <span className="title">专线业务开通系统</span>
              <div className="item">
                <i className="icon username" />
                <span className="txt">用户名</span>
                <input placeholder="请输入用户名"  />
              </div>
              <div className="item">
                <i className="icon password" />
                <span className="txt">密码</span>
                <input placeholder="请输入密码"  />
              </div>
              <div className="item btn"  onClick={this.handleClick.bind(this)}>
                <span>登录</span>
              </div>
              <div>
                <span className="forget">忘记密码？</span>
              </div>
            </div>
          </div>
        )
    }

}

const mapStateToProps = (state)=>{
  return {
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
  }
}



export default connect(mapStateToProps,mapDispatchToProps)(Login);