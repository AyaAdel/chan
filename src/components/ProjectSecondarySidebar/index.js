import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Layout, Tree, Menu } from 'antd';
import { ArrowLeftOutlined, SettingOutlined } from '@ant-design/icons';

import './style.css';

const { Sider } = Layout;

const treeData = [
  {
    title: 'parent 0',
    key: '0-0',
    children: [
      { title: 'leaf 0-0', key: '0-0-0', isLeaf: true },
      { title: 'leaf 0-1', key: '0-0-1', isLeaf: true },
    ],
  },
  {
    title: 'parent 1',
    key: '0-1',
    children: [
      { title: 'leaf leaf leaf leaf leaf leaf 1-0', key: '0-1-0', isLeaf: true },
      { title: 'leaf 1-1', key: '0-1-1', isLeaf: true },
      { title: 'leaf 1-2', key: '0-1-2', isLeaf: true },
      { title: 'leaf 1-3', key: '0-1-3', isLeaf: true },
      { title: 'leaf 1-4', key: '0-1-4', isLeaf: true },
      { title: 'leaf 1-5', key: '0-1-5', isLeaf: true },
      { title: 'leaf 1-6', key: '0-1-6', isLeaf: true },
      { title: 'leaf 1-7', key: '0-1-7', isLeaf: true },
      { title: 'leaf 1-8', key: '0-1-8', isLeaf: true },
      { title: 'leaf 1-9', key: '0-1-9', isLeaf: true },
    ],
  },
];

const { DirectoryTree } = Tree;

const onSelect = (keys, event) => {
  console.log('Trigger Select', keys, event);
};

const onExpand = () => {
  console.log('Trigger Expand');
};

const ProjectSecondarySidebar = ({ showMainSlider }) => {
  const [collapsed, setCollapsed] = useState(false);

  const displayMainSidebar = () => {
    setCollapsed(false);
    showMainSlider(true);
  };

  return (
    <div className="project-secondary-sidebar">
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
        <div className="heading">
          <div className="img-wrapper">
            <img src="./images/git.ico" alt="GIT Icon" />
          </div>
          <h4>Order Credit Report</h4>
        </div>
        <h5>Processes</h5>
        <DirectoryTree multiple defaultExpandAll onSelect={onSelect} onExpand={onExpand} treeData={treeData} />
        <h5>Objects</h5>
        <DirectoryTree multiple defaultExpandAll onSelect={onSelect} onExpand={onExpand} treeData={treeData} />
        <Menu
          mode="inline"
          // onClick={handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ borderRight: 0, background: '#282A39' }}
          className="sidebar-menu-fixed"
        >
          <Menu.ItemGroup key="g2" className="sidebar-bottom">
            <Menu.Item key="17" className="sidebar-footer-btn">
              <Link to="/project-settings" className="btn project-setting-btn">
                <SettingOutlined />
                <span>Project Settings</span>
              </Link>
              <span className="btn back-sidebar" onClick={displayMainSidebar}>
                <ArrowLeftOutlined />
              </span>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};
export default ProjectSecondarySidebar;
