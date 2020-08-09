import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.dispatch(editExpense(this.props.expense.id, expense));
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.dispatch(removeExpense({ id: this.props.expense.id }));
    this.props.history.push('/');
  }

  render() {
    return (
      <div>
        <ExpenseForm
          expense ={this.props.expense}
          onSubmit={this.onSubmit}
        />
        <button
          onClick={this.onRemove}
        >
          Remove
        </button>
      </div>
    )
  }
};

const mapDispatchToProps = (dispatch) => ({
  editExpense: (expense) => dispatch(editExpense(expense)),
  remoiveExpense: (expenseId) => dispatch(removeExpense(expenseId))
});

const mapStateToProps = (state, props) => {
  return {
    expense: state.expense.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);