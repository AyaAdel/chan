import React from 'react';
import { Layout, Table, Card, Button } from 'antd';
import MainHeader from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';

import './style.css';

const { Content } = Layout;

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: ({ char, name, email }) => (
      <div className="user-content">
        <div className="user-char">{char}</div>
        <div className="user-info">
          <span className="user-name">{name}</span>
          <span className="user-email">{email}</span>
        </div>
      </div>
    ),
  },
  {
    title: 'Access Level',
    dataIndex: 'accessLevel',
    key: 'accessLevel',
    width: '20%',
  },
  {
    title: 'Data Added',
    dataIndex: 'DataAdded',
    key: 'DataAdded',
    width: '25%',
  },
  {
    title: 'Last Accessed',
    dataIndex: 'lastAccessed',
    key: 'lastAccessed',
    width: '25%',
  },
];

const data = [
  {
    key: '1',
    name: { char: 'CO', name: 'Chan', email: 'chandarath@gmail.com' },
    accessLevel: 'Basic',
    DataAdded: '7/13/2020',
    lastAccessed: '8/16/2020',
  },
  {
    key: '2',
    name: { char: 'MJ', name: 'Mike Jordan', email: 'm.jordan@gmail.com' },
    accessLevel: 'Basic',
    DataAdded: '7/13/2020',
    lastAccessed: '8/16/2020',
  },
];

const AdminUsers = () => {
  return (
    <div>
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
    <div className="main-wrapper admin-users">
      <h3>Users</h3>
      <Card
        title={
          <>
            <span className="title">Total</span>
            <span className="count-team">2</span>
          </>
        }
        extra={<Button type="primary">Add Users</Button>}
      >
        <Table
          size="middle"
          columns={columns}
          dataSource={data}
          bordered={true}
          pagination={false}
          scroll={{ x: '570px' }}
        />
      </Card>
    </div>
  );
};
export default AdminUsers;
