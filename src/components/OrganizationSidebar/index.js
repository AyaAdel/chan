import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';

import {
  ProjectOutlined,
  UsergroupAddOutlined,
  LockOutlined,
  FileProtectOutlined,
  NodeExpandOutlined,
  ForkOutlined,
  InteractionOutlined,
  LaptopOutlined,
  PullRequestOutlined,
  ClockCircleOutlined,
  SnippetsOutlined,
  DiffOutlined,
  SettingOutlined,
} from '@ant-design/icons';

import './style.css';

const { Sider } = Layout;

const OrganizationSidebar = () => {
  const [collapsed, setCollapsed] = useState(false);
  let match = useRouteMatch();

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  // const onCollapse = (collapsedState) => {
  //   setCollapsed(collapsedState);
  // };
  return (
    <div className="ant-menu-sidebar-custom organization-sidebar">
      <Sider
        collapsible
        width={250}
        className="organization-sidebar main-sidebar site-layout-background"
        style={{
          height: 'calc( 100vh - 70px)',
          left: '0',
          background: '#fff',
          margin: '70px 0 0 0',
        }}
      >
        <h4 style={{ padding: '15px' }}>Servicing</h4>
        <Menu
          mode="inline"
          style={{ borderRight: 0 }}
          defaultSelectedKeys={[match.path]}
          theme="light"
          onClick={handleClick}
        >
          <Menu.ItemGroup key="g1" title="General">
            <Menu.Item key="/organizationoverview">
              <Link to="/organizationoverview">
                <ProjectOutlined /> Overview
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationteams">
              <Link to="/organizationteams">
                <UsergroupAddOutlined /> Teams
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationpermissions">
              <Link to="/organizationpermissions">
                <LockOutlined /> Permissions
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationsettings">
              <Link to="/organizationsettings">
                <FileProtectOutlined /> Projects
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationreleases">
              <Link to="/organizationreleases">
                <NodeExpandOutlined /> Releases
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationrepos">
              <Link to="/organizationrepos">
                <ForkOutlined /> Repos
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Control Room">
            <Menu.Item key="/runautomationselect">
              <Link to="/runautomationselect">
                <InteractionOutlined /> Run Automation
              </Link>
            </Menu.Item>
            <Menu.Item key="/sessions">
              <Link to="/sessions">
                <LaptopOutlined /> Sessions
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationqueues">
              <Link to="/organizationqueues">
                <PullRequestOutlined /> Queues
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationschedular">
              <Link to="/organizationschedular">
                <ClockCircleOutlined /> Schedular
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g3" title="System">
            <Menu.Item key="/organizationexceptiontypes">
              <Link to="/organizationexceptiontypes">
                <SnippetsOutlined /> Exception Types
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationenvironmentvariables">
              <Link to="/organizationenvironmentvariables">
                <DiffOutlined /> Environment Variables
              </Link>
            </Menu.Item>
            <Menu.Item key="/organizationenvironmentlock">
              <Link to="/organizationenvironmentlock">
                <SettingOutlined /> Environment Lock
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};
export default OrganizationSidebar;
