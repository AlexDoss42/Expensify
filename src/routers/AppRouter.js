import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import ExpenseDashboard from '../components/ExpenseDashboard';
import CreateExpense from '../components/CreateExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import NotFound from '../components/NotFound';


const AppRouter = () => {
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path='/' component={ExpenseDashboard} exact={true} />
      <Route path='/create' component={CreateExpense} />
      <Route path='/edit' component={EditExpense} />
      <Route path='/help' component={Help} />
      <Route component={NotFound} />
    </Switch>
  </div>
  </BrowserRouter>
}

export default AppRouter;