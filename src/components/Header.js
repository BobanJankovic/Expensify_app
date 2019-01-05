import React from 'react';
import { NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import { startLogout } from '../actions/auth';

export const Header = (props) => (
  <header className="head">
    <h1>Expensify</h1>
    <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'blue'}} exact={true}>ExpensePage</NavLink>
    <NavLink to="/dashboard" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'pink'}} exact={true}>Dashboard Page</NavLink>
    <NavLink to="/createexpense" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'green'}}  >Create Expense</NavLink>
    <NavLink to="/about" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'gray'}}>About</NavLink>
    <NavLink to="/edit/:id" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'green'}}>Edit</NavLink>
    <button className="logoutButton" onClick={ props.startLogout }>Log out</button>
  </header>
);


const mapDispatchToProps = (dispatch) => ({
  startLogout: () => dispatch(startLogout())
});

export default connect( undefined, mapDispatchToProps )(Header);
