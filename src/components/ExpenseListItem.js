import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

export default ExpenseListItem = ({ amount, description, createdAt, id }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount}
       - 
      {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);
