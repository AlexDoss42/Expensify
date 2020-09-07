import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

const Header = ({ startLogout }) => {
  <header>
    <h1>Expensify</h1>
      <NavLink to='/dashboard' activeClassName='isActive'>Dashboard</NavLink>
      <NavLink to='/create' activeClassName='isActive'>Add Expense</NavLink>
      <NavLink to='/edit' activeClassName='isActive'>Edit Expense</NavLink>
      <NavLink to='/help' activeClassName='isActive'>Help</NavLink> 
      <button onClick={startLogout}>Logout</button>
  </header>
};

const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout)
});

export default connect(undefined, mapDispatchToProps)(Header);