import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from 'antd';
import LandingHeader from '../../components/LandingHeader';

import './style.css';

function Landing() {
  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="landing">
      <LandingHeader />
      <div className="content">
        <h1>RPA In The Cloud</h1>
        <Form name="basic" onFinish={onFinish} onFinishFailed={onFinishFailed}>
          <Form.Item
            name="email"
            rules={[
              {
                type: 'email',
                required: true,
                message: 'Please input your Email',
              },
            ]}
          >
            <Input autoComplete="off" className="email" placeholder="Email Address" value="" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your password!',
              },
            ]}
          >
            <Input.Password autoComplete="off" placeholder="Password" value="" />
          </Form.Item>
          <Form.Item>
            <button className="btn-primary" type="submit">
              <Link to="/terms">Create Account</Link>
            </button>
          </Form.Item>
        </Form>
      </div>
    </div>
  );
}

export default Landing;
