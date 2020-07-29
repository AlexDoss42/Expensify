import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { removeExpense } from '../actions/expenses';

export default ExpenseListItem = ({ dispatch, amount, description, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
    <button onClick={() => {
      dispatch(removeExpense({ id }));
    }}>Remove</button>
  </div>
);

export default connect()(ExpenseListItem);
