import React, { useState } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  LaptopOutlined,
  InteractionOutlined,
  ClockCircleOutlined,
  PullRequestOutlined,
  DiffOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './style.css';

const { Sider } = Layout;

const ProjectSettingsSecondarySidebar = ({ showMainSlider }) => {
  const [collapsed, setCollapsed] = useState(false);
  let match = useRouteMatch();

  const handleClick = () => {
    setCollapsed(true);
  };

  // const displayMainSidebar = () => {
  //   setCollapsed(false);
  //   showMainSlider(true);
  // };

  return (
    <div className="project-secondary-sidebar project-settings-secondary-sidebar">
      <Sider
        collapsible
        width={250}
        className="site-layout-background"
        style={{
          height: 'calc( 100vh - 70px)',
          left: '0',
          background: '#fff',
        }}
        collapsed={collapsed}
      >
        <h3>Project Settings</h3>
        <div className="heading">
          <div className="img-wrapper">
            <img src="./images/git.ico" alt="GIT Icon" />
          </div>
          <h4>Order Credit Report</h4>
        </div>
        <Menu
          mode="inline"
          style={{ borderRight: 0 }}
          defaultSelectedKeys={[match.path]}
          onClick={handleClick}
          className="admin-setting"
        >
          <Menu.ItemGroup key="g1" title="General">
            <Menu.Item key="/project-settings">
              <Link className="nav-Menu.Itemnk" to="/project-settings">
                <AppstoreOutlined />
                Overview
              </Link>
            </Menu.Item>
            <Menu.Item key="/project-settings-releases">
              <Link className="nav-Menu.Itemnk" to="/project-settings-releases">
                <LaptopOutlined />
                Releases
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Control Room">
            <Menu.Item key="/project-settings-automation">
              <Link to="/project-settings-automation">
                <InteractionOutlined /> Run Automation
              </Link>
            </Menu.Item>
            <Menu.Item key="/project-settings-schedular">
              <Link to="/project-settings-schedular">
                <ClockCircleOutlined /> Schedular
              </Link>
            </Menu.Item>
            <Menu.Item key="/project-settings-queues">
              <Link to="/project-settings-queues">
                <PullRequestOutlined /> Queues
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3" title="System">
            <Menu.Item key="/project-settings-variables">
              <Link to="/project-settings-variables">
                <DiffOutlined /> Environment Variables
              </Link>
            </Menu.Item>
            <Menu.Item key="/project-settings-locks">
              <Link to="/project-settings-locks">
                <SettingOutlined /> Environment Locks
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};
export default ProjectSettingsSecondarySidebar;
