import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import CompanySignIn from '~/pages/SignIn/Company';
import VoluntarySignIn from '~/pages/SignIn/Voluntary';
import SignUp from '~/pages/SignUp';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>PAGINA DE LOGIN</h1>} />

        <Route path="/company-login" component={CompanySignIn} />
        <Route path="/voluntary-login" component={VoluntarySignIn} />

        <Route path="/signup" component={SignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
