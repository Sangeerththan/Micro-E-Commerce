import React, { PureComponent } from 'react';
import 'antd/dist/antd.css';
import {bindActionCreators} from "redux";
import {setPage} from '../../redux/actions/pageActions';
import { Form, Input, PageHeader, Button } from 'antd';
import { createUser, authenticateUser } from '../../redux/actions/UserActions';
import {connect} from 'react-redux';
import Home from '../../Home';

class SignIn extends PureComponent {

    constructor(props) {
        super(props); 
    
        this.state = {
            isUsernameAvailable: true,
            username: '',
            password: ''
        }
    }

    object = {
        a: true,
        b: false
    }

    layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 8,
        },
    };

    commonRules = [
        {
            required: true,
        }];

    validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not validate email!',
            number: '${label} is not a validate number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };



    callCreateUser = (user) => {
        this.setState({username: user.user.username, password: user.user.password});
        this.props.createUser(user);
    }

    callIsUsernameAvailable = async (username) => {
        const url = "http://localhost:8080/isUsernameAvailable";
        const response = await fetch(url, {method: 'POST', body:username, headers: {
            'Content-Type': 'application/json'
        }} );
        const json = await response.json();
        this.object.a = json;
        this.setState({ isUsernameAvailable: json});

    }

    onFinish = (values) => {
        this.callCreateUser(values);
    };

    render() {
        const { isUsernameAvailable } = this.state;
        const { setPage, page, authenticated, authenticateUser, proceedToLogin } = this.props;

        if(authenticated){
            this.setState({password: ''})
            return <Home />
          } else if(page === "Login"){
            return <SignIn />
          }
          if(proceedToLogin){
              let user = {};
              user.username = this.state.username;
              user.password = this.state.password;              
              authenticateUser(user);
          }
        
        return (
            <div>
            <PageHeader
                className="site-page-header"
                title="Create account for online shopping"
                subTitle="We serve"
            />
            <Form {...this.layout} name="nest-messages" onFinish={this.onFinish} validateMessages={this.validateMessages}>
                <Form.Item
                    name={['user', 'username']}
                    label="Username"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (value.length > 0){
                                    if ((!value || getFieldValue('user').username.length > 0) && isUsernameAvailable ) {
                                        return Promise.resolve();
                                    }
                                    return Promise.reject('Username already taken. Please enter different username and continue.');
                                }
                            },
                        }),
                    ]}
                >
                <Input onChange={e => this.callIsUsernameAvailable(e.target.value) }/>
                </Form.Item>
                <Form.Item
                    name={['user', 'password']}
                    label="Password"
                    hasFeedback
                    rules={[
                        {
                            required: true,
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                var passw = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/;
                                if (!value || getFieldValue('user').password.match(passw)) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('Your password must be at least 8 characters long, contain at least one number, special character and have a mixture of uppercase and lowercase letters.');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name={['user', 'confirmpassword']}
                    label="Confirm password"
                    hasFeedback
                    rules={[
                        {
                            required: true
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('user').password === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item name={['user', 'firstname']} label="First name" rules={this.commonRules}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'lastname']} label="Last name" rules={this.commonRules}>
                    <Input />
                </Form.Item>
                <Form.Item name={['user', 'address']} label="Address" rules={this.commonRules}>
                    <Input.TextArea />
                </Form.Item>
                <Form.Item wrapperCol={{ ...this.layout.wrapperCol, offset: 8 }}>
                    <Button type="primary" htmlType="submit">
                        Create account
                </Button>
                    <Button type="default" htmlType="button" offset={6} style={{margin:12}} onClick={() => setPage("Login")}>
                    Already have account
                    </Button>
                </Form.Item>
            </Form>
            </div>
        );
    }

}

function mapStateToProps (store){
    return {isUsernameAvailable: store.userReducer.isUsernameAvailable,
    authenticated: store.userReducer.authenticated,
    proceedToLogin: store.userReducer.proceedToLogin,
    page: store.pageReducer.page};
};

const mapActionsToProps = (dispatch) => {
    return bindActionCreators({
        setPage,
        createUser,
        authenticateUser
    }, dispatch)
  }

export default connect(mapStateToProps, mapActionsToProps)(SignIn);