import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFitlers from './ExpenseListFilters';
import ExpensesSummary from './ExpensesSummary';

const ExpenseDashboard = () => {
  <div>
    <ExpensesSummary />
    <ExpenseListFitlers />
    <ExpenseList />
  </div>
};

export default ExpenseDashboard;