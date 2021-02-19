import React, { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  LaptopOutlined,
  TeamOutlined,
  ShoppingCartOutlined,
  FileTextOutlined,
  LockOutlined,
} from '@ant-design/icons';
import { Link, useRouteMatch } from 'react-router-dom';

import './style.css';

const { Sider } = Layout;

const AdminSidebar = () => {
  const match = useRouteMatch();
  const [collapsed, setCollapsed] = useState(false);

  const handleClick = () => {
    setCollapsed(true);
  };

  const onCollapse = (collapsedState) => {
    setCollapsed(collapsedState);
  };

  return (
    <div className="ant-menu-sidebar-custom">
      <Sider
        collapsible
        width={250}
        className="admin-sidebar site-layout-background mobile-collapsible-sidebar"
        style={{
          height: 'calc( 100vh - 70px)',
          left: '0',
          background: '#fff',
          margin: '70px 0 0 0',
        }}
        onCollapse={onCollapse}
        onBreakpoint={(broken) => {
          console.log('broken', broken);
        }}
        collapsed={collapsed}
      >
        <h4 style={{ padding: '15px' }}>Admin Settings</h4>
        <Menu
          mode="inline"
          style={{ borderRight: 0 }}
          defaultSelectedKeys={[match.path]}
          onClick={handleClick}
          className="admin-setting"
        >
          <Menu.ItemGroup key="g1" title="General">
            <Menu.Item key="/adminoverview">
              <Link className="nav-Menu.Itemnk" to="/adminoverview">
                <AppstoreOutlined />
                Overview
              </Link>
            </Menu.Item>
            <Menu.Item key="/adminusers">
              <Link className="nav-Menu.Itemnk" to="/adminusers">
                <LaptopOutlined />
                Users
              </Link>
            </Menu.Item>
            <Menu.Item key="/adminteam">
              <Link className="nav-Menu.Itemnk" to="/adminteam">
                <TeamOutlined />
                Teams
              </Link>
            </Menu.Item>
            <Menu.Item key="/adminorganization">
              <Link className="nav-Menu.Itemnk" to="/adminorganization">
                <ShoppingCartOutlined />
                Organizations
              </Link>
            </Menu.Item>
            <Menu.Item key="/adminrepos">
              <Link className="nav-Menu.Itemnk" to="/adminrepos">
                <FileTextOutlined />
                Repos
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" title="Security">
            <Menu.Item key="/adminpermission">
              <Link className="nav-Menu.Itemnk" to="/adminpermission">
                <LockOutlined />
                Permissions
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};
export default AdminSidebar;
