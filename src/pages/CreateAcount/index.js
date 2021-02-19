import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import LandingHeader from '../../components/LandingHeader';

import './style.css';

function CreateAccount() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="create-account">
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
              name="email"
              label="Email"
              rules={[
                {
                  type: 'email',
                  message: 'Please input your Email',
                },
              ]}
              initialValue=""
              className="email-input"
            >
              <Input autocomplete="off" className="email" placeholder="Email Address" value="" />
            </Form.Item>
            <Form.Item className="confirm-btn">
              <Button type="primary" htmlType="submit" className="main-btn">
                <Link to="/confirm-email">Confirm Email</Link>
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default CreateAccount;
