import React from 'react';
import { connect } from 'react-redux';

import ExpenseListItem from './ExpenseListItem';

const ExpenseList = (props) => (
  <div>
    <h1>EXPENSE LIST</h1>
    
    {props.expenses.map((expense) => {
      return <ExpenseListItem 
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
    expenses: state.expenses,
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseList);
