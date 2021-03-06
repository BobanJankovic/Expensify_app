import React from 'react';
import { Router, Route, Switch } from 'react-router-dom'; 
import createHistory from 'history/createBrowserHistory';
import ExpensePage from '../components/ExpensePage';
import CreateExpense from '../components/CreateExpense';
import {About} from '../components/About';
import {NoPage} from '../components/Nopage';
import {ExpenseDashboard} from '../components/ExpenseDashboard';
import SignUp from '../components/SignUp';
import Edit from '../components/Edit';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';




export const history = createHistory();


const AppRouter = () => (
  <Router history={history}>
    <div>
      
      <Switch>
        <PublicRoute path="/" component={SignUp} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboard}/>
        <PrivateRoute path="/createexpense" component={CreateExpense} />
        <PrivateRoute path="/edit/:id" component={Edit} />
        <Route path="/about" component={About} />
        <Route component={NoPage} />
      </Switch>
    </div>
  </Router>
);


export default AppRouter;
