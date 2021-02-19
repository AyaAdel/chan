import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';

const { Content } = Layout;

const AdminOveriew = () => {
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
    <div className="main-wrapper">
      <h3>Overview</h3>
    </div>
  );
};
export default AdminOveriew;
