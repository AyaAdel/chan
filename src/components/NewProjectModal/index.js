import React, { useState } from 'react';
import { LockOutlined } from '@ant-design/icons';
import { useHistory } from 'react-router-dom';
import { Button, Modal, Form, Input, Radio, Select } from 'antd';

import './style.css';

const Repos = [
  { label: 'Beijing', value: 'Beijing' },
  { label: 'Shanghai', value: 'Shanghai' },
];

function NewProjectModal() {
  const [isModalVisible, setIsModalVisible] = useState(false);

  let history = useHistory();

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
    history.push('/project');
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="new-project-modal-wrapper">
      <Button type="primary" size="large" style={{ margin: '0 0 0 15px' }} onClick={showModal}>
        New Project
      </Button>
      <Modal
        className="new-project-modal"
        style={{ top: 50 }}
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        title="Create New Project"
      >
        <Form
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <label>
            Project Name <span>*</span>
          </label>
          <Form.Item
            name="project_name"
            rules={[
              {
                required: true,
                message: 'Please input your Project Name!',
              },
            ]}
          >
            <Input />
          </Form.Item>
          <label>Description</label>
          <Form.Item name="description">
            <Input.TextArea />
          </Form.Item>
          <label>Visibility</label>
          <div className="visibility-wrapper">
            <div className="choose-visibility">
              <LockOutlined />
              <span className="visibility-private">Private</span>
              <p>Only People you give access to will to be able to view this project</p>
            </div>
            <Form.Item name="visibility">
              <Radio checked></Radio>
            </Form.Item>
          </div>
          <label>Repository</label>
          <Form.Item name="repo">
            <Select options={Repos} />
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default NewProjectModal;
