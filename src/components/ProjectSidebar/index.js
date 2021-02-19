import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import { SettingOutlined } from '@ant-design/icons';

import './style.css';

const { Sider } = Layout;

const ProjectSidebar = ({ isMobile, projectBtn, projectSettingsBtn }) => {
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(!collapsed);
  };

  const onCollapse = (collapsedState) => {
    setCollapsed(collapsedState);
  };
  return (
    <div className="ant-menu-sidebar-custom project-sidebar">
      <Sider
        collapsible
        width={250}
        className="main-sidebar site-layout-background"
        style={{
          height: 'calc( 100vh - 70px)',
          left: 0,
          background: '#282A39',
          margin: '70px 0 0 0',
        }}
        onCollapse={onCollapse}
        defaultCollapsed={!isMobile}
      >
        <Menu
          mode="inline"
          defaultSelectedKeys={['sub1']}
          defaultOpenKeys={['sub1']}
          style={{ borderRight: 0, background: '#282A39' }}
          className="sidebar-menu-fixed"
          onClick={handleClick}
        >
          <Menu.ItemGroup key="g1" title="Order Credit Report" className="main-sidebar-menu">
            <Menu.Item key="1">
              <Link className="nav-Menu.Itemnk" to="#">
                <div className="d-flex align-items-center">
                  <span className="color-purple short-title-box ml-0">P</span>
                  <span className="menu-name">Process</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link className="nav-Menu.Itemnk" to="#">
                <div className="d-flex align-items-center">
                  <span className="color-yellow short-title-box ml-0">O</span>
                  <span className="menu-name">Objects</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link className="nav-Menu.Itemnk" to="#">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">R</span>
                  <span className="menu-name">Repos</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" className="sidebar-bottom">
            {projectSettingsBtn && (
              <Menu.Item key="5" className="sidebar-footer-btn">
                <Link to="/project-settings" className="btn">
                  <SettingOutlined />
                  <span>Project Settings</span>
                </Link>
              </Menu.Item>
            )}
            {projectBtn && (
              <Menu.Item key="6" className="sidebar-footer-btn">
                <Link to="/project" className="btn project-main-sidebar-btn">
                  <span>Project</span>
                </Link>
              </Menu.Item>
            )}
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};
export default ProjectSidebar;
