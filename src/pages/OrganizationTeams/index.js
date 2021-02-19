import React from 'react';
import { Layout } from 'antd';
import Teams from '../../components/Teams';
import MainHeader from '../../components/Header';
import OrganizationSettingsSidebar from '../../components/OrganizationSettingsSidebar';
import OrganizationSidebar from '../../components/OrganizationSidebar';

import './style.css';

const { Content } = Layout;

const OrganizationTeams = () => {
  return (
    <div className="organization-teams">
      <MainHeader />
      <Layout>
        <Layout>
          <OrganizationSettingsSidebar />
          <OrganizationSidebar />
          <Content style={{ padding: '90px 20px 0px 20px' }}>
            <Teams />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
};

export default OrganizationTeams;
