import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';
import { Card, Button, Table } from 'antd';

const { Content } = Layout;

const organization = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/adminorganization">{text}</a>,
  },
  {
    title: 'Create Date',
    dataIndex: 'createdate',
    key: 'createdate',
  },
  {
    title: '',
    dataIndex: 'deletemember',
    key: 'deletemember',
    render: (deletemember) => <Button type="danger">{deletemember}</Button>,
  },
];

const organizationdata = [
  {
    key: '1',
    name: 'Accounting',
    createdate: '7/13/2020',
    deletemember: 'Delete',
  },
  {
    key: '2',
    name: 'Servicing',
    createdate: '7/13/2020',
    deletemember: 'Delete',
  },
  {
    key: '3',
    name: 'Legal',
    createdate: 'Accounting',
    deletemember: 'Delete',
  },
];

const AdminOrganization = () => {
  return (
    <div>
      <MainHeader />
      <Layout>
        <AdminSidebar />
        <Layout>
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
        <h3 style={{ margin: '0 0 30px 0' }}>Organizations</h3>
        <Card title="Total" extra={<Button type="primary">New Organization</Button>}>
          <Table
            size="middle"
            columns={organization}
            dataSource={organizationdata}
            bordered={true}
            pagination={false}
          />
        </Card>
      </div>
    </>
  );
};
export default AdminOrganization;
