import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
import Route from './Route';

import CompanySignIn from '~/pages/SignIn/Company';
import VoluntarySignIn from '~/pages/SignIn/Voluntary';

import CompanySignUp from '~/pages/SignUp/Company';
import VoluntarySignUp from '~/pages/SignUp/Voluntary';

import Dashboard from '~/pages/Dashboard';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={() => <h1>PAGINA DE LOGIN</h1>} />

        <Route path="/company-login" component={CompanySignIn} />
        <Route path="/company-signup" component={CompanySignUp} />

        <Route path="/voluntary-login" component={VoluntarySignIn} />
        <Route path="/voluntary-signup" component={VoluntarySignUp} />

        <Route path="/dashboard" component={Dashboard} isPrivate />

        <Route path="/" component={() => <h1>404</h1>} />
      </Switch>
    </BrowserRouter>
  );
}
