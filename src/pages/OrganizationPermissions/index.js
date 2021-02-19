import React, { useState } from 'react';
import { Layout, Tabs, Card, Button, Table, Checkbox } from 'antd';
import { UsergroupAddOutlined, UserOutlined } from '@ant-design/icons';
import MainHeader from '../../components/Header';
import OrganizationSettingsSidebar from '../../components/OrganizationSettingsSidebar';
import OrganizationSidebar from '../../components/OrganizationSidebar';

import './style.css';

const { TabPane } = Tabs;

const { Content } = Layout;

const members = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/organizationpermissions">{text}</a>,
  },
  {
    title: 'Access Level',
    dataIndex: 'accesslevel',
    key: 'accesslevel',
  },
  {
    title: 'Date Added',
    dataIndex: 'dateadded',
    key: 'dateadded',
  },
  {
    title: '',
    dataIndex: 'deletemember',
    key: 'deletemember',
    render: (deletemember) => <Button type="danger">{deletemember}</Button>,
  },
];

const membersdata = [
  {
    key: '1',
    name: 'Chan',
    accesslevel: 'User',
    dateadded: '7/13/2020',
    deletemember: 'Delete',
  },
  {
    key: '2',
    name: 'Administrator',
    accesslevel: 'Team',
    dateadded: '7/13/2020',
    deletemember: 'Delete',
  },
];

const OrganizationPermissions = () => {
  return (
    <div className="organization-permissions">
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

const Data = () => {
  const [activeKey, setActiveKey] = useState('1');

  function callback(key) {
    setActiveKey(key);
  }

  const groups = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      render: (text) => <a href="/organizationpermissions">{text}</a>,
      width: '30%',
    },
    {
      title: 'Members',
      dataIndex: 'member',
      key: 'member',
      render: ({ countUsers, countUser }) => (
        <div className="members-content">
          <UsergroupAddOutlined />
          <span className="users-count">{countUsers}</span>
          <UserOutlined />
          <span className="users-count">{countUser}</span>
        </div>
      ),
      width: '30%',
    },
    {
      title: '',
      dataIndex: 'assignmember',
      key: 'assignmember',
      render: () => (
        <div className="assign-btn">
          <Button type="primary" onClick={() => setActiveKey('3')}>
            Assign Member
          </Button>
          <Button type="primary assign-permission" onClick={() => setActiveKey('2')}>
            Assign Permission
          </Button>
        </div>
      ),
    },
  ];

  const groupsdata = [
    {
      key: '1',
      name: 'Administrators',
      member: { countUsers: 0, countUser: 1 },
      assignmember: '',
    },
    {
      key: '2',
      name: 'Contributors',
      member: { countUsers: 0, countUser: 1 },
      assignmember: '',
    },
    {
      key: '3',
      name: 'Stakeholders',
      member: { countUsers: 0, countUser: 1 },
      assignmember: '',
    },
  ];

  return (
    <div className="main-wrapper">
      <h3>Permissions</h3>
      <Tabs activeKey={activeKey} onChange={callback}>
        <TabPane tab="Groups" key="1">
          <Card
            title={
              <>
                <span className="title">Total</span>
                <span className="count-team">3</span>
              </>
            }
            extra={<Button type="primary">New Group</Button>}
          >
            <Table
              size="middle"
              columns={groups}
              dataSource={groupsdata}
              bordered={true}
              pagination={false}
              scroll={{ x: '550px' }}
            />
          </Card>
        </TabPane>
        <TabPane tab="Permissions" key="2">
          <Card>
            <h5 className="permissions-title">Administrators</h5>
            <h5>General</h5>
            <Checkbox>Add/Delete Project</Checkbox>
            <Checkbox>Edit Project</Checkbox>
            <Checkbox>Add/Delete Queues</Checkbox>
            <Checkbox>Add/Delete Environment Variables</Checkbox>
            <Checkbox>Add/Delete Schedules</Checkbox>
            <Checkbox>Modify Environmental Lock</Checkbox>
            <Checkbox>Modify Exception Type</Checkbox>
          </Card>
        </TabPane>
        <TabPane tab="Members" key="3">
          <Card
            title={
              <>
                <span className="title">Administrators</span>
                <span className="count-team">2</span>
              </>
            }
            extra={<Button type="primary">Assign Members</Button>}
          >
            <Table
              size="middle"
              columns={members}
              dataSource={membersdata}
              bordered={true}
              pagination={false}
              scroll={{ x: '430px' }}
            />
          </Card>
        </TabPane>
      </Tabs>
    </div>
  );
};
export default OrganizationPermissions;
