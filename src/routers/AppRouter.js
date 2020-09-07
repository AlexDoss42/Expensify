import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';
import Login from '../components/Login';

export const history = createHistory();

const AppRouter = () => {
  <Router history={history}>
  <div>
    <Header />
    <Switch>
      <Route path='/' component={Login} exact={true} />
      <Route path='/dashboard' component={ExpenseDashboard} />
      <Route path='/create' component={CreateExpense} />
      <Route path='/edit/:id' component={EditExpense} />
      <Route path='/help' component={Help} />
      <Route component={NotFound} />
    </Switch>
  </div>
  </Router>
}

export default AppRouter;