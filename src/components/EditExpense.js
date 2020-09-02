import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { startEditExpense, removeExpense } from '../actions/expenses';

export class EditExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.startEditExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  }

  onRemove = () => {
    this.props.removeExpense({ id: this.props.expense.id });
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

const mapStateToProps = (state, props) => {
  return {
    expense: state.expense.find((expense) => expense.id === props.match.params.id)
  };
};

const mapDispatchToProps = (dispatch, props) => ({
  startEditExpense: (id, expense) => dispatch(startEditExpense(id, expense)),
  remoiveExpense: (data) => dispatch(removeExpense(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(EditExpense);