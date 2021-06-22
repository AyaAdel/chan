import React from 'react';
import 'antd/dist/antd.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import Landing from './pages/Landing';
import Project from './pages/Project';
// import MetaTags from 'react-meta-tags';
import Sessions from './pages/Sessions';
import AdminRepos from './pages/AdminRepos';
import AdminTeams from './pages/AdminTeams';
import AdminUsers from './pages/AdminUsers';
import ConfirmEmail from './pages/ConfirmEmail';
import Organization from './pages/Organization';
import CreateAccount from './pages/CreateAcount';
import AdminOverview from './pages/AdminOverview';
import ProcessStudio from './pages/ProcessStudio';
import ProcessStudio1 from './pages/ProcessStudio1';
import ProjectSettings from './pages/ProjectSettings';
import AdminPermissions from './pages/AdminPermissions';
import AdminOrganization from './pages/AdminOrganization';
import OrganizationRepos from './pages/OrganizationRepos';
import OrganizationTeams from './pages/OrganizationTeams';
import RunAutomationOrder from './pages/RunAutomationOrder';
import OrganizationQueues from './pages/OrganizationQueues';
import RunAutomationSelect from './pages/RunAutomationSelect';
import CompleteRegistration from './pages/CompleteRegistration';
import OrganizationSettings from './pages/OrganizationSettings';
import OrganizationReleases from './pages/OrganizationReleases';
import OrganizationOverview from './pages/OrganizationOverview';
import OrganizationSchedular from './pages/OrganizationSchedular';
import OrganizationPermissions from './pages/OrganizationPermissions';
import OrganizationExceptionTypes from './pages/OrganizationExceptionTypes';
import OrganizationEnvironmentLock from './pages/OrganizationEnvironmentLock';
import OrganizationEnvironmentVariables from './pages/OrganizationEnvironmentVariables';
import ProjectSettingsReleases from './pages/ProjectSettingsReleases';
import ProjectSettingsAutomation from './pages/ProjectSettingsAutomation';
import ProjectSettingsQueues from './pages/ProjectSettingsQueues';
import ProjectSettingsSchedular from './pages/ProjectSettingsSchedular';
import ProjectSettingsVariables from './pages/ProjectSettingsVariables';
import ProjectSettingsLocks from './pages/ProjectSettingsLocks';

import './App.css';

function App() {
  function getHeight() {
    document.getElementsByClassName('ant-menu-item-group')[0].style.height =
      document.getElementsByClassName('sidebar-menu-fixed')[0].clientHeight -
      document.querySelector('.sidebar-bottom').clientHeight +
      'px';
  }

  window.onload = () => getHeight();
  window.onresize = () => getHeight();

  return (
    <>
      {/* <MetaTags>
        <meta name="viewport" content="width=device-width, minimal-ui"></meta>
      </MetaTags> */}
      <Router>
        <Switch>
          <Route path="/organization" exact component={Landing} />
          <Route path={['/terms', '/signup/terms']} exact component={ProcessStudio} />
          <Route path="/processstudio" exact component={ProcessStudio1} />
          <Route path="/" exact component={Organization} />
          <Route path="/organizationsettings" exact component={OrganizationSettings} />
          <Route path="/adminteam" exact component={AdminTeams} />
          <Route path="/adminpermission" exact component={AdminPermissions} />
          <Route path="/adminorganization" exact component={AdminOrganization} />
          <Route path="/adminrepos" exact component={AdminRepos} />
          <Route path="/project" exact component={Project} />
          <Route path="/runautomationselect" exact component={RunAutomationSelect} />
          <Route path="/runautomationorder" exact component={RunAutomationOrder} />
          <Route path="/sessions" exact component={Sessions} />
          <Route path="/adminoverview" component={AdminOverview} />
          <Route path="/adminusers" component={AdminUsers} />
          <Route path="/organizationoverview" component={OrganizationOverview} />
          <Route path="/organizationteams" component={OrganizationTeams} />
          <Route path="/organizationpermissions" component={OrganizationPermissions} />
          <Route path="/organizationreleases" component={OrganizationReleases} />
          <Route path="/organizationrepos" component={OrganizationRepos} />
          <Route path="/organizationqueues" component={OrganizationQueues} />
          <Route path="/organizationschedular" component={OrganizationSchedular} />
          <Route path="/organizationexceptiontypes" component={OrganizationExceptionTypes} />
          <Route path="/organizationenvironmentvariables" component={OrganizationEnvironmentVariables} />
          <Route path="/organizationenvironmentlock" component={OrganizationEnvironmentLock} />
          <Route path="/create-account" component={CreateAccount} />
          <Route path="/confirm-email" component={ConfirmEmail} />
          <Route path="/project-settings" component={ProjectSettings} />
          <Route path={['/complete-registration', 'signup/complete-registration']} component={CompleteRegistration} />
          <Route path="/login" component={Login} />
          <Route path="/project-settings-releases" component={ProjectSettingsReleases} />
          <Route path="/project-settings-automation" component={ProjectSettingsAutomation} />
          <Route path="/project-settings-schedular" component={ProjectSettingsSchedular} />
          <Route path="/project-settings-queues" component={ProjectSettingsQueues} />
          <Route path="/project-settings-variables" component={ProjectSettingsVariables} />
          <Route path="/project-settings-locks" component={ProjectSettingsLocks} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
