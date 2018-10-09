import React from 'react';
import { NavLink} from 'react-router-dom';
export const Header = () => (
    <header>
      <h1>Expensify</h1>
      <NavLink to="/" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'blue'}} exact={true}>ExpensePage</NavLink>
      <NavLink to="/page" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'green'}}  >Page</NavLink>
      <NavLink to="/help" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'yellow'}}>Help</NavLink>
      <NavLink to="/about" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'gray'}}>About</NavLink>
      <NavLink to="/edit/:id" activeClassName="selected" activeStyle={{fontWeight: 'bold',color: 'green'}}>Edit</NavLink>
    </header>
);

