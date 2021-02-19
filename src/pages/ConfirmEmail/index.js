import React from 'react';
import LandingHeader from '../../components/LandingHeader';

import './style.css';

function ConfirmEmail() {
  return (
    <div className="confirm-email">
      <LandingHeader />
      <div className="content">
        <div className="card process-card">
          <div className="process-title d-flex align-items-center">
            <img src="images/process-icon.png" alt="Process Icon" />
            <h6 className="mb-0">Gemini Process Studio</h6>
          </div>
          <div className="process-content">
            <h2>Confirm your email address</h2>
            <p className="process-description">
              We have sent an email with a confirmation link to your email address. in order to complete the sign-up
              process, please link the confirmation link
            </p>
            <p className="process-description">
              If you do not receive a confirmation email, please check your spam folder. Also, please verify that you
              entered a valid email address in our sign-up form.
            </p>
            <p className="process-description">
              If you need assistance, please <a href="/">contact us</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ConfirmEmail;
