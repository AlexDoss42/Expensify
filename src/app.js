import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
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

const routes = (
  <BrowserRouter>
  <div>
    <Route path='/' component={ExpenseDashboardPage} exact={true} />
    <Route path='/create' component={CreateExpensePage} />
    <Route path='/edit' component={EditExpensePage} />
    <Route path='/help' component={HelpPage} />
  </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
