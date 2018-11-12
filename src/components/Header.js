import React from 'react';
import { NavLink} from 'react-router-dom';
export const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'blue'}} exact={true}>ExpensePage</NavLink>
      <NavLink to="/createexpense" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'green'}}  >Create Expense</NavLink>
      <NavLink to="/help" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'yellow'}}>Help</NavLink>
      <NavLink to="/about" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'gray'}}>About</NavLink>
      <NavLink to="/edit/:id" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'green'}}>Edit</NavLink>
    </header>
);

