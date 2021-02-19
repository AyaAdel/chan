import React from 'react';
import { Layout } from 'antd';

import MainHeader from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';
import { Card, Button, Table } from 'antd';

const { Content } = Layout;

const repos = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/adminrepos">{text}</a>,
  },
  {
    title: 'Organization',
    dataIndex: 'organization',
    key: 'organization',
  },
  {
    title: 'Created Date',
    dataIndex: 'createdate',
    key: 'createdate',
  },
  {
    title: 'Created By',
    dataIndex: 'createdby',
    key: 'createdby',
  },
  {
    title: '',
    dataIndex: 'deleterepo',
    key: 'deleterepo',
    render: (deleterepo) => <Button type="danger">{deleterepo}</Button>,
  },
];

const reposdata = [
  {
    key: '1',
    name: 'Accounting Repo',
    organization: 'Accounting',
    createdate: '7/13/2020 01:20PM',
    createdby: 'Chan Orn',
    deleterepo: 'Delete',
  },
  {
    key: '2',
    name: 'Accounting Repo',
    organization: 'Accounting',
    createdate: '7/13/2020 01:20PM',
    createdby: 'Chan Orn',
    deleterepo: 'Delete',
  },
  {
    key: '3',
    name: 'Accounting Repo',
    organization: 'Accounting',
    createdate: '7/13/2020 01:20PM',
    createdby: 'Chan Orn',
    deleterepo: 'Delete',
  },
];

const AdminRepos = () => {
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
        <h3 style={{ margin: '0 0 30px 0' }}>Repos</h3>
        <Card title="Total" extra={<Button type="primary">Add Repo</Button>}>
          <Table size="middle" columns={repos} dataSource={reposdata} bordered={true} pagination={false} />
        </Card>
      </div>
    </>
  );
};
export default AdminRepos;
