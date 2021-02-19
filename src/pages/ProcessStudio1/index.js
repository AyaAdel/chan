import React from 'react';
import { Layout } from 'antd';
import { Link } from 'react-router-dom';
import LandingHeader from '../../components/LandingHeader';

import './style.css';

const { Content } = Layout;

const ProcessStudio = () => {
  return (
    <div>
      <LandingHeader />
      <Data />
    </div>
  );
};

const Data = () => {
  return (
    <>
      <Content className="process-studio create-organization process-studio-done">
        <div className="process-studio d-flex">
          <div className="card process-card">
            <div className="process-title d-flex align-items-center">
              <img src="images/process-icon.png" alt="Process Icon" />
              <h6 className="mb-0">Gemini Process Studio</h6>
            </div>
            <div className="process-content">
              <h2>Almost done....</h2>
              <form className="form">
                <div className="form-group">
                  <label for="usr">Name your Gemini organization</label>
                  <input type="text" className="form-control" placeholder="Accounting" />
                  <img src="images/info.png" alt="icon" />
                </div>
              </form>
              <p className="error-msg">
                The given organization name is not valid, Organization name must start with a letter or number, followed
                by letters, numbers or hyphens and must end with a letter or number.
              </p>
            </div>
            <div className="process-btn ml-auto">
              <Link to="/organization" className="btn btn-primary">
                Continue
              </Link>
            </div>
          </div>
        </div>
      </Content>
    </>
  );
};
export default ProcessStudio;
