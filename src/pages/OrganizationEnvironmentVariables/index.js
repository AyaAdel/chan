import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header';
import OrganizationSettingsSidebar from '../../components/OrganizationSettingsSidebar';
import OrganizationSidebar from '../../components/OrganizationSidebar';

const { Content } = Layout;

const OrganizationOverview = () => {
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

const Data = () => {
  return (
    <div className="main-wrapper">
      <h3>Environment Variables</h3>
    </div>
  );
};
export default OrganizationOverview;
