import React from 'react';

export default ExpneseListItem = ({ amount, description, createdAt }) => (
  <div>
    <h3>{description}</h3>
    <p>{amount}</p>
    <p>{createdAt}</p>
  </div>
);
