import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import Home from '~/pages/Home';
import SignIn from '~/pages/SignIn';

import SelectUserType from '~/pages/SignUp';
import CompanySignUp from '~/pages/SignUp/Company';
import VoluntarySignUp from '~/pages/SignUp/Voluntary';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />

        <Route path="/login" component={SignIn} />

        <Route path="/signup" component={SelectUserType} />
        <Route path="/company-signup" component={CompanySignUp} />
        <Route path="/voluntary-signup" component={VoluntarySignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
