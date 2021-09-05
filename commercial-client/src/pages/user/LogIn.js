import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import { authenticateUser } from '../../redux/actions/UserActions';
import { Form, Input, Button, PageHeader } from 'antd';
import {connect} from 'react-redux';
import {bindActionCreators} from "redux";
import {setPage} from '../../redux/actions/pageActions';
import Home from '../../Home';
import SignIn from './SignIn';

const layout = {
  labelCol: { span: 8 },
  wrapperCol: { span: 8 },
};
const tailLayout = {
  wrapperCol: { offset: 8, span: 8 },
};

class LogIn extends PureComponent {
  onFinish = values => {
    this.callAuthenticateUser(values);
  };

  callAuthenticateUser = (user) => {
    this.props.authenticateUser(user);
}

  render(){
    const { authenticated, incorrectCredential, setPage, page } = this.props;
    if(authenticated){
      return <Home />
    } else if(page === "Signin"){
      return <SignIn />
    }
        return (
            <div>
                <PageHeader
                    className="site-page-header"
                    title="Login for online shopping"
                    subTitle="We serve"
                />
                <Form
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                onFinish={this.onFinish}
                onFinishFailed={this.onFinishFailed}
                >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[{ required: true, message: 'Please input your username!' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Password"
                    name="password"
                    rules={[{ required: true, message: 'Please input your password!' },
                    {validator(rule, value) {
                      if ( incorrectCredential === false) {
                          return Promise.resolve();
                      }
                      return Promise.reject('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa!');
                  }}]}
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    hidden={!incorrectCredential}
                    name="validator"
                    rules={[{validator(rule, value) {
                                if ( incorrectCredential === false) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            }}]}
                    >
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit" offset={6}>
                    Login
                    </Button>
                    <Button type="default" htmlType="button" offset={6} style={{margin:12}} onClick={() => setPage("Signin")}>
                    Create account
                    </Button>
                </Form.Item>
                </Form>
            </div>
        );
    }
};

function mapStateToProps (store){
  return {authenticated: store.userReducer.authenticated,
          incorrectCredential: store.userReducer.incorrectCredential,
          page: store.pageReducer.page
  };
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        setPage, 
        authenticateUser
    }, dispatch)
  }

export default connect(mapStateToProps, mapActionsToProps)(LogIn);