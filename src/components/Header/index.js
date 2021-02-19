import React, { useState } from 'react';
import { Menu } from 'antd';
import { Link } from 'react-router-dom';
import { SettingOutlined, AppstoreOutlined, DesktopOutlined } from '@ant-design/icons';

import './style.css';

const { SubMenu } = Menu;

const handleClick = (e) => {
  console.log('click ', e);
};

const headerMenu = (
  <Menu mode="inline" defaultOpenKeys={['']} onClick={handleClick}>
    <Menu.Item className="switch-menu">Switch to</Menu.Item>
    <SubMenu key="sub1" title="Features" icon={<DesktopOutlined />}>
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title="Company" icon={<DesktopOutlined />}>
      <Menu.Item key="4">Option 1</Menu.Item>
      <Menu.Item key="5">Option 2</Menu.Item>
      <Menu.Item key="6">Option 3</Menu.Item>
    </SubMenu>
  </Menu>
);

const MainHeader = () => {
  return <Data />;
};

const Data = () => {
  const [displayMenu, setDisplayMenu] = useState(false);

  return (
    <header className="header fixed-top">
      <nav className="navbar navbar-expand-md navbar-default p-0">
        <div className="text-left navbar-brand-wrapper">
          <Link className="navbar-brand mr-0" to="/organization">
            Gemini
          </Link>
        </div>
        <div className="search-bar">
          <input className="form-control mr-sm-2" type="text" placeholder="Search.." />
          <button className="btn svg-icon" type="submit">
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g clipPath="url(#clip0)">
                <path
                  d="M19.7556 18.5774L14.0682 12.89C15.1699 11.5292 15.8332 9.80003 15.8332 7.91672C15.8332 3.55176 12.2815 0.000114441 7.91656 0.000114441C3.55161 0.000114441 0 3.55172 0 7.91668C0 12.2816 3.55165 15.8333 7.9166 15.8333C9.7999 15.8333 11.5291 15.17 12.8899 14.0683L18.5773 19.7558C18.7398 19.9183 18.9531 19.9999 19.1665 19.9999C19.3798 19.9999 19.5932 19.9183 19.7557 19.7558C20.0815 19.4299 20.0815 18.9033 19.7556 18.5774ZM7.9166 14.1666C4.46996 14.1666 1.66666 11.3633 1.66666 7.91668C1.66666 4.47004 4.46996 1.66674 7.9166 1.66674C11.3632 1.66674 14.1665 4.47004 14.1665 7.91668C14.1665 11.3633 11.3632 14.1666 7.9166 14.1666Z"
                  fill="#323232"
                />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="20" height="20" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>
        <div className="nav navbar-nav navbar-right ml-auto">
          <ul className="list-inline d-flex mb-0 align-items-center">
            <li className="nav-item">
              <div className="store-menu">
                <div className="store-icon" onClick={() => setDisplayMenu(!displayMenu)}>
                  <AppstoreOutlined />
                </div>
                {displayMenu && headerMenu}
              </div>
            </li>
            <li className="nav-item">
              <Link to="/adminteam" className="nav-link svg-icon">
                <SettingOutlined />
              </Link>
            </li>
            <li className="nav-item">
              <a href="/" className="nav-link">
                <img src="images/author.jpg" alt="author" className="author-img" />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default MainHeader;
