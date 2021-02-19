import React from 'react';
import { Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';

import './style.css';

const { Sider } = Layout;

const Sidebar = () => {
  // const [collapsed, setCollapsed] = useState(false);

  // const handleClick = () => {
  //   setCollapsed(!collapsed);
  // };

  // const onCollapse = (collapsedState) => {
  //   setCollapsed(collapsedState);
  // };

  return (
    <div className="ant-menu-sidebar-custom org-settings">
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
        // collapsed={collapsed}
        // onCollapse={onCollapse}
      >
        <Menu
          mode="inline"
          // onClick={handleClick}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ borderRight: 0, background: '#282A39' }}
          className="sidebar-menu-fixed"
        >
          <Menu.ItemGroup key="g1" title="" className="main-sidebar-menu main-sidebar-org">
            <Menu.Item key="1">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-purple short-title-box ml-0">S</span>
                  <span className="menu-name">Servicing</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="2">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-yellow short-title-box ml-0">A</span>
                  <span className="menu-name">Accounting</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="3">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Legal</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="4">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="5">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="6">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="7">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="8">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="9">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="10">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="11">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="12">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="13">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="14">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
            <Menu.Item key="15">
              <Link className="nav-Menu.Itemnk" to="/organization">
                <div className="d-flex align-items-center">
                  <span className="color-orange short-title-box ml-0">L</span>
                  <span className="menu-name">Link</span>
                </div>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup key="g2" className="sidebar-bottom">
            <Menu.Item key="16" className="sidebar-btn">
              <Link to="" className="btn btn-primary">
                <img src="images/plus-icon.png" alt="setting icon" />
                <span>New Organizations</span>
              </Link>
            </Menu.Item>
            <Menu.Item key="17" className="sidebar-footer-btn">
              <Link to="/organizationsettings" className="btn">
                <img src="images/setting-icon.png" alt="setting icon" />
                <span className="organization-settings-btn">Org Settings</span>
              </Link>
            </Menu.Item>
          </Menu.ItemGroup>
        </Menu>
      </Sider>
    </div>
  );
};
export default Sidebar;
