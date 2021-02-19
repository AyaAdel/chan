import React from 'react';
import { Link } from 'react-router-dom';
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
    <div className="create-account complete-registration">
      <LandingHeader />
      <div className="content">
        <div className="account-pannel">
          <div className="navbar-brand">
            <a href="/">Gemini</a>
          </div>
          <h2>Create Account</h2>
          <Form
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Company Name"
              name="company_name"
              rules={[
                {
                  required: true,
                  message: 'Please input your Company Name!',
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item label="First Name" name="first_name">
              <Input />
            </Form.Item>
            <Form.Item label="Last Name" name="last_name">
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: 'Please input your password!',
                },
              ]}
              initialValue=""
            >
              <Input.Password autocomplete="off" placeholder="Password" value="" />
            </Form.Item>
            <Form.Item className="confirm-btn">
              <Button type="primary" htmlType="submit" className="main-btn">
                <Link to="/processstudio">Register</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CompleteRegistration;
