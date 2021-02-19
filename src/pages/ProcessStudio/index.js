import React from 'react';
import { Layout } from 'antd';
import { Link, useRouteMatch } from 'react-router-dom';
import LandingHeader from '../../components/LandingHeader';

import './style.css';

const { Content } = Layout;

const ProcessStudio = () => {
  const match = useRouteMatch();

  return (
    <div>
      <LandingHeader />
      <Content className="terms">
        <div className="process-studio d-flex">
          <div className="card process-card">
            <div className="process-title d-flex align-items-center">
              <img src="images/process-icon.png" alt="Process Icon" />
              <h6 className="mb-0">Gemini Process Studio</h6>
            </div>
            <div className="process-content">
              <h2>Get started with Gemini Process Studio</h2>
              <p className="process-description">
                Choosing Continue means that you are agree to our <a href="/">Terms of Service</a>
                <a href="/">Privacy Statements</a> and <a href="/">Code of Conduct</a>
              </p>
            </div>
            <div className="process-btn ml-auto">
              <Link
                to={match.url.indexOf('signup') > -1 ? '/create-account' : '/confirm-email'}
                className="btn btn-primary"
              >
                Continue
              </Link>
            </div>
          </div>
        </div>
      </Content>
    </div>
  );
};

export default ProcessStudio;
