import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFitlers from './ExpenseListFilters';

const ExpenseDashboard = () => {
  <div>
    <ExpenseListFitlers />
    <ExpenseList />
  </div>
};

export default ExpenseDashboard;