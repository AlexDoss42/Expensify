import React from 'react';
import { connect } from 'react-redux';

const EditExpense = () => {
  <div>
    Edit Expense Page
  </div>
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expense.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpense);