import React from 'react';
import { createBrowserHistory } from 'history';
import { Router, Switch, Route } from 'react-router-dom';
import * as LazyLoading from './LazyLoading';
import Loader from '../components/Common/Loader';
import PrivateRouter from './PrivateRouter';
import PublicRouter from './PublicRouter';

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <Loader />
    <Switch>
      <PrivateRouter
        path='/'
        component={LazyLoading.DashboardPage}
        exact={true}
      />
      <PublicRouter path='/login' component={LazyLoading.LoginPage} exact={true} />
      <PrivateRouter
        path='/add'
        component={LazyLoading.AddContactPage}
        exact={true}
      />
      <PrivateRouter
        path='/edit/:id'
        component={LazyLoading.EditContactPage}
        exact={true}
      />
      <Route
        path='/contact/:id'
        component={LazyLoading.ContactDetailPage}
        exact={true}
      />
      <Route component={LazyLoading.NotFoundPage} />
    </Switch>
  </Router>
);

export default AppRouter;
