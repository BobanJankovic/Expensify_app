import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; 
import createHistory from 'history/createBrowserHistory';
import ExpensePage from '../components/ExpensePage';
import CreateExpense from '../components/CreateExpense';
import {Help} from '../components/Help';
import {About} from '../components/About';
import {NoPage} from '../components/Nopage';
import Header from '../components/Header';
import {ExpenseDashboard} from '../components/ExpenseDashboard';
import SignUp from '../components/SignUp';
import Edit from '../components/Edit';





export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={SignUp} exact={true}/>
        <Route path="/dashboard" component={ExpenseDashboard}/>
        <Route path="/createexpense" component={CreateExpense} />
        <Route path="/help" component={Help} />
        <Route path="/about" component={About} />
        <Route path="/edit/:id" component={Edit} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </Router>
);


export default AppRouter;
