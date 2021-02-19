import React from 'react';
import { Layout } from 'antd';
import MainHeader from '../../components/Header';
import ProjectSidebar from '../../components/ProjectSidebar';
import ProjectSettingsSecondarySidebar from '../../components/ProjectSettingsSecondarySidebar';

const { Content } = Layout;

const ProjectSettingsVariables = () => {
  return (
    <div className="project-page project-settings">
      <MainHeader />
      <Layout>
        <ProjectSidebar />
        <Content className="project-settings-container">
          <div className="project-secondary-wrapper">
            <ProjectSettingsSecondarySidebar />
          </div>
          <div className="project-settings-content">
            <h3>Environment Variables</h3>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default ProjectSettingsVariables;
