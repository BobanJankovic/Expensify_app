import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'; 
import ExpensePage from '../components/ExpensePage';
import CreateExpense from '../components/CreateExpense';
import {Help} from '../components/Help';
import {About} from '../components/About';
import {NoPage} from '../components/Nopage';
import {Header} from '../components/Header';
import Edit from '../components/Edit';

export const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpensePage} exact={true}/>
        <Route path="/createexpense" component={CreateExpense} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/edit/:id" component={Edit} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

