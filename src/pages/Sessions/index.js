import React from 'react';
import { Layout, Button, Row, Col, Table, Menu, Dropdown } from 'antd';
import { EllipsisOutlined, BookOutlined, UserOutlined } from '@ant-design/icons';
import MainHeader from '../../components/Header';
import OrganizationSettingsSidebar from '../../components/OrganizationSettingsSidebar';
import OrganizationSidebar from '../../components/OrganizationSidebar';

const { Content } = Layout;

const sessions = [
  {
    title: 'Project',
    dataIndex: 'projectname',
    key: 'projectname',
    render: (project) => <p>{project}</p>,
  },
  {
    title: 'Resourse',
    dataIndex: 'resourse',
    key: 'resourse',
    render: (resourse) => (
      <div>
        {' '}
        <i className="btn-icon">
          <BookOutlined />
        </i>{' '}
        <span>{resourse}</span>
      </div>
    ),
  },
  {
    title: 'User',
    dataIndex: 'user',
    key: 'user',
    render: (user) => (
      <div>
        <i className="btn-icon">
          <UserOutlined />
        </i>
        <b>{user}</b>
      </div>
    ),
  },
  {
    title: 'Status',
    key: 'status',
    dataIndex: 'status',
    render: (status) => (
      <div>
        <i className="status-icon"></i>
        <b>{status}</b>
      </div>
    ),
  },
  {
    title: 'Start',
    dataIndex: 'start',
    key: 'start',
    render: (start) => <p>{start}</p>,
  },
  {
    title: 'End',
    dataIndex: 'end',
    key: 'end',
    render: (end) => <p>{end}</p>,
  },
  {
    title: 'Action',
    dataIndex: 'action',
    key: 'action',
    render: (action) => (
      <p>
        {action}{' '}
        <Dropdown overlay={menu} trigger={['click']} placement="bottomRight">
          <a href="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
            <EllipsisOutlined />
          </a>
        </Dropdown>
      </p>
    ),
  },
];

const sessionsdata = [
  {
    key: '1',
    projectname: 'Order Credit Report',
    resourse: 'BOT Machine V1',
    status: 'In process',
    start: '1/8/2020 1:23:10 PM',
    end: '',
    action: '',
  },
  {
    key: '2',
    projectname: 'Order Credit Report',
    resourse: 'BOT Machine V1',
    status: 'failled',
    start: '1/8/2020 1:23:10 PM',
    end: '',
    action: '',
  },
];

const Sessions = () => {
  return (
    <div>
      <MainHeader />
      <Layout>
        <Layout>
          <OrganizationSettingsSidebar />
          <OrganizationSidebar />
          <Content style={{ padding: '90px 20px 0px 20px' }}>
            <Data />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const menu = (
  <Menu>
    <Menu.Item key="0">
      <a href="http://www.alipay.com/">1st menu item</a>
    </Menu.Item>
    <Menu.Item key="1">
      <a href="http://www.taobao.com/">2nd menu item</a>
    </Menu.Item>
    <Menu.Divider />
    <Menu.Item key="3">3rd menu item</Menu.Item>
  </Menu>
);

const Data = () => {
  return (
    <>
      <div className="main-wrapper">
        <div class="d-flex justify-content-end align-items-center mb-30 title-header">
          <div class="d-flex  align-items-center title-header-right">
            <div class="filter-bar box-shadow">
              <div class="filter-icon">
                <img src="images/filter-icon.png" alt="icon" />
              </div>
              <input class="form-control" type="text" placeholder="Filter Teams" />
              <button class="btn svg-icon" type="submit">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0)">
                    <path
                      d="M8.28263 7.01474L13.734 1.56325C14.0887 1.20865 14.0887 0.635315 13.734 0.280718C13.3794 -0.0738787 12.806 -0.0738787 12.4514 0.280718L6.99993 5.73221L1.5486 0.280718C1.19384 -0.0738787 0.62067 -0.0738787 0.266073 0.280718C-0.0886908 0.635315 -0.0886908 1.20865 0.266073 1.56325L5.7174 7.01474L0.266073 12.4662C-0.0886908 12.8208 -0.0886908 13.3942 0.266073 13.7488C0.44279 13.9256 0.675147 14.0145 0.907337 14.0145C1.13953 14.0145 1.37172 13.9256 1.5486 13.7488L6.99993 8.29727L12.4514 13.7488C12.6283 13.9256 12.8605 14.0145 13.0927 14.0145C13.3249 14.0145 13.5571 13.9256 13.734 13.7488C14.0887 13.3942 14.0887 12.8208 13.734 12.4662L8.28263 7.01474Z"
                      fill="#6C757D"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0">
                      <rect width="14" height="14" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>
            </div>
            <Button type="primary" size="large" style={{ margin: '0 0 0 15px' }}>
              New Project
            </Button>
          </div>
        </div>
        <h3 style={{ margin: '0 0 30px 0' }}>Select Project to Run</h3>
        <Table dataSource={sessionsdata} columns={sessions} pagination={false} sticky scroll={{ x: 1024 }}></Table>
      </div>
      <Row>
        <Col></Col>
      </Row>
    </>
  );
};
export default Sessions;
