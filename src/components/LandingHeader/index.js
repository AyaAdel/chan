import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Dropdown } from 'antd';
import { DownOutlined, MenuOutlined, CloseOutlined, UserOutlined } from '@ant-design/icons';

import './style.css';

const { SubMenu } = Menu;

const menu = (
  <Menu>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

const handleClick = (e) => {
  console.log('click ', e);
};

const mobMenu = (
  <Menu mode="inline" className="mob-feature-company" defaultOpenKeys={['']} onClick={handleClick}>
    <SubMenu key="sub1" title="Features">
      <Menu.Item key="1">Option 1</Menu.Item>
      <Menu.Item key="2">Option 2</Menu.Item>
      <Menu.Item key="3">Option 3</Menu.Item>
    </SubMenu>
    <SubMenu key="sub2" title="Company">
      <Menu.Item key="4">Option 1</Menu.Item>
      <Menu.Item key="5">Option 2</Menu.Item>
      <Menu.Item key="6">Option 3</Menu.Item>
    </SubMenu>
  </Menu>
);

const mobRegistration = (
  <Menu mode="inline" className="mob-registration" defaultOpenKeys={['']} onClick={handleClick}>
    <Menu.Item>
      <Link to="/login">Log In</Link>
    </Menu.Item>
    <Menu.Item>
      <Link to="/signup/terms">Sign Up</Link>
    </Menu.Item>
  </Menu>
);

function LandingHeader() {
  const [displayClose, setDisplayClose] = useState(false);
  const [hideHumberg, setHideHumberg] = useState(true);
  const [displayMask, setDisplayMask] = useState(false);
  const [displayMenuRegistration, setDisplayMenuRegistration] = useState(false);

  const displayMenu = () => {
    setHideHumberg(false);
    setDisplayClose(true);
    setDisplayMenuRegistration(false);
    setDisplayMask(true);
  };

  const hideClose = () => {
    setHideHumberg(true);
    setDisplayClose(false);
    setDisplayMask(false);
    setDisplayMenuRegistration(false);
  };

  const mobMenuRegistration = () => {
    setDisplayMenuRegistration(!displayMenuRegistration);
    setHideHumberg(true);
    setDisplayClose(false);
    setDisplayMask(true);
  };

  return (
    <>
      {displayMask && <div className="landing-mask" onClick={hideClose}></div>}
      <nav className="landing-header">
        <div className="mob-menu-registration">
          <>
            <div className="user-register" onClick={mobMenuRegistration}>
              <UserOutlined />
            </div>
            {displayMenuRegistration && mobRegistration}
          </>
        </div>
        <div className="navbar-brand">
          <a href="/organization">Gemini</a>
        </div>
        <div className="nav-right">
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <a href="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Features <DownOutlined />
            </a>
          </Dropdown>
          <Dropdown overlay={menu} placement="bottomCenter" arrow>
            <a href="/" className="ant-dropdown-link" onClick={(e) => e.preventDefault()}>
              Company <DownOutlined />
            </a>
          </Dropdown>
          <button className="login" type="primary" size="large">
            <Link to="/login">Log In</Link>
          </button>
          <button className="signup" type="primary" size="large">
            <Link to="/signup/terms">Sign Up</Link>
          </button>
        </div>
        <div className="menu-icon">
          {hideHumberg && <MenuOutlined onClick={displayMenu} />}
          {displayClose && (
            <>
              <CloseOutlined onClick={hideClose} />
              <div>{mobMenu}</div>
            </>
          )}
        </div>
      </nav>
    </>
  );
}

export default LandingHeader;
