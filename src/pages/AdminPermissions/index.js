import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';
import { Tabs, Card, Button, Table, Checkbox } from 'antd';

import './style.css';

const { TabPane } = Tabs;

const { Content } = Layout;

const groups = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/adminpermission">{text}</a>,
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    key: 'organization',
  },
  {
    title: 'Members',
    dataIndex: 'member',
    key: 'member',
  },
  {
    title: '',
    dataIndex: 'assignmember',
    key: 'assignmember',
    render: (assignmember) => <Button type="primary">{assignmember}</Button>,
  },
];

const groupsdata = [
  {
    key: '1',
    name: 'Administrators',
    organization: 'Accounting',
    member: 2,
    assignmember: 'Assign Member',
  },
  {
    key: '2',
    name: 'Contributors',
    organization: 'Accounting',
    member: 4,
    assignmember: 'Assign Member',
  },
  {
    key: '3',
    name: 'Stakeholders',
    organization: 'Accounting',
    member: 6,
    assignmember: 'Assign Member',
  },
];

const members = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/adminpermission">{text}</a>,
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

const AdminPermissions = () => {
  return (
    <div className="admin-permission">
      <MainHeader />
      <Layout>
        <Layout>
          <AdminSidebar />
          <Content style={{ padding: '90px 20px 0px 20px', height: '100vh' }}>
            <Data />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

const Data = () => {
  return (
    <>
      <div className="main-wrapper">
        <h3>Permissions</h3>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Groups" key="1">
            <Card title="Total" extra={<Button type="primary">New Group</Button>}>
              <Table size="middle" columns={groups} dataSource={groupsdata} bordered={true} pagination={false} />
            </Card>
          </TabPane>
          <TabPane tab="Permissions" key="2">
            <Card>
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
            <Card title="Total" extra={<Button type="primary">New Team Member</Button>}>
              <Table size="middle" columns={members} dataSource={membersdata} bordered={true} pagination={false} />
            </Card>
          </TabPane>
        </Tabs>
      </div>
    </>
  );
};
export default AdminPermissions;
