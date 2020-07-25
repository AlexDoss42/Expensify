import React from 'react';
import { connect } from 'react-redux';

const ExpenseList = (props) => (
  <div>
    <h1>EXPENSE LIST</h1>
    {props.expenses.length}
  </div>
);

const mapStateToProps = (state) => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);
