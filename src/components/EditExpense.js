import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';

const EditExpense = (props) => {
  <div>
    <ExpenseForm
      expense ={props.expense}
      onSubmit={() => {

      }}
    />
  </div>
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expense.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpense);