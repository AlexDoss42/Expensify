import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

const ExpenseDashboardPage = () => {
  <div>
    This is from my dashboard component
  </div>
};

const CreateExpensePage = () => {
  <div>
    Create Expense Page
  </div>
};

const EditExpensePage = () => {
  <div>
    Edit Expense Page
  </div>
};

const HelpPage = () => {
  <div>
    Help Page
  </div>
};

const NotFoundPage = () => {
  <div>
    404 - <Link to='/'>Go Home</Link>
  </div>
};

const Header = () => {
  <header>
    <h1>Expensify</h1>
      <NavLink to='/' activeClassName='isActive' exact={true}>Home</NavLink>
      <NavLink to='/create' activeClassName='isActive'>Add Expense</NavLink>
      <NavLink to='/edit' activeClassName='isActive'>Edit Expense</NavLink>
      <NavLink to='/help' activeClassName='isActive'>Help</NavLink>
  </header>
};

const AppRouter = () => {
  <BrowserRouter>
  <div>
    <Header />
    <Switch>
      <Route path='/' component={ExpenseDashboardPage} exact={true} />
      <Route path='/create' component={CreateExpensePage} />
      <Route path='/edit' component={EditExpensePage} />
      <Route path='/help' component={HelpPage} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>
  </BrowserRouter>
}

export default AppRouter;