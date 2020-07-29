import React from 'react';
import { Link } from 'react-router-dom';

export default ExpenseListItem = ({ amount, description, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>{amount} - {createdAt}</p>
  </div>
);

export default ExpenseListItem;
