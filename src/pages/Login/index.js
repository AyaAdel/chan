import React from 'react';
import { Form, Input, Button } from 'antd';
import LandingHeader from '../../components/LandingHeader';

import './style.css';

function CompleteRegistration() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="create-account complete-registration login">
      <LandingHeader />
      <div className="content">
        <div className="account-pannel">
          <div className="navbar-brand">
            <a href="/">Gemini</a>
          </div>
          <h2>Welcome Back</h2>
          <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Form.Item
              name="email"
              // rules={[
              //   {
              //     type: 'email',
              //     required: true,
              //     message: 'Please input your Email',
              //   },
              // ]}
            >
              <Input className="email" placeholder="Email Address" value="" />
            </Form.Item>
            <Form.Item
              name="password"
              // rules={[
              //   {
              //     required: true,
              //     message: 'Please input your password!',
              //   },
              // ]}
            >
              <Input.Password autocomplete="off" placeholder="Password" value="" />
            </Form.Item>
            <Form.Item className="forgot-password">
              <a className="login-form-forgot" href="/">
                Forgot password
              </a>
            </Form.Item>
            <Form.Item className="confirm-btn">
              <Button type="primary" htmlType="submit" className="main-btn">
                Sign in
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CompleteRegistration;
