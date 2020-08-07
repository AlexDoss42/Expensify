import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

export const ExpenseList = (props) => (
  <div>
    <h1>EXPENSE LIST</h1>
    
    {props.expenses.map((expense) => {
      return <ExpenseListItem 
               id={expense.id}
               key={expense.id}
               amount={expense.amount}
               createdAt={expense.createdAt}
               description={expense.description}
             />
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

export default connect(mapStateToProps)(ExpenseList);
