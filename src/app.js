import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

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
    <div>
      <Link to='/'>Home</Link>
      <Link to='/create'>Add Expense</Link>
      <Link to='/edit'>Edit Expense</Link>
      <Link to='/help'>Help</Link>
    </div>
  </header>
};

const routes = (
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
);

ReactDOM.render(routes, document.getElementById('app'));
