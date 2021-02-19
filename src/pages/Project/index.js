import React, { useEffect, useState } from 'react';
import { Layout, Tabs, Table } from 'antd';
import { useMediaQuery } from 'react-responsive';
import MainHeader from '../../components/Header';
import ProjectSidebar from '../../components/ProjectSidebar';
import ProjectSecondarySidebar from '../../components/ProjectSecondarySidebar';

import './style.css';

const { Content } = Layout;

const { TabPane } = Tabs;

const excel = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a href="/project">{text}</a>,
    width: '25%',
  },
  {
    title: 'Last Change',
    dataIndex: 'lastchange',
    key: 'lastchange',
    width: '25%',
  },
  {
    title: 'Commits',
    dataIndex: 'commits',
    key: 'commits',
  },
];

const exceldata = [
  {
    key: '1',
    name: 'Excel-Read',
    lastchange: 'Sunday',
    commits: 'Lorem ipsum ODjkaikfjfkjfksfjffs',
  },
  {
    key: '2',
    name: 'Excel-Read',
    lastchange: 'Sunday',
    commits: 'Lorem ipsum ODjkaikfjfkjfksfjffs',
  },
  {
    key: '3',
    name: 'Excel-Read',
    lastchange: 'Sunday',
    commits: 'Lorem ipsum ODjkaikfjfkjfksfjffs',
  },
];

const Project = () => {
  const [showMainSlider, setShowMainSlider] = useState(true);
  const [showSecondarySlider, setShowSecondarySlider] = useState(true);
  const isMobile = useMediaQuery({ query: '(max-width: 991px)' });

  useEffect(() => {
    isMobile ? setShowMainSlider(false) : setShowMainSlider(true);
  }, [isMobile]);

  useEffect(() => {
    showMainSlider && isMobile ? setShowSecondarySlider(false) : setShowSecondarySlider(true);
  }, [showMainSlider, isMobile]);

  return (
    <div className="project-page">
      <MainHeader />
      <Layout>
        {showMainSlider && <ProjectSidebar isMobile={isMobile} projectSettingsBtn />}
        <Content className="project-container">
          <div className="project-wrapper">
            <div className="project-secondary-wrapper">
              {showSecondarySlider && <ProjectSecondarySidebar showMainSlider={(show) => setShowMainSlider(show)} />}
            </div>
            <div className="project-content">
              <Tabs defaultActiveKey="1">
                <TabPane tab="Contents" key="1">
                  <Table
                    size="middle"
                    columns={excel}
                    dataSource={exceldata}
                    bordered={true}
                    pagination={false}
                    scroll={{ x: '430px' }}
                  />
                </TabPane>
                <TabPane tab="History" key="2">
                  <Table
                    size="middle"
                    columns={excel}
                    dataSource={exceldata}
                    bordered={true}
                    pagination={false}
                    scroll={{ x: '430px' }}
                  />
                </TabPane>
              </Tabs>
            </div>
          </div>
        </Content>
      </Layout>
    </div>
  );
};
export default Project;
