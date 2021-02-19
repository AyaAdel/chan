import React from 'react';
import { Layout } from 'antd';
import Teams from '../../components/Teams';
import MainHeader from '../../components/Header';
import AdminSidebar from '../../components/AdminSidebar';

import './style.css';

const { Content } = Layout;

const AdminTeams = () => {
  return (
    <div className="admin-teams">
      <MainHeader />
      <Layout>
        <Layout>
          <AdminSidebar />
          <Content style={{ padding: '90px 20px 0px 20px', height: '100vh' }}>
            <Teams />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default AdminTeams;
