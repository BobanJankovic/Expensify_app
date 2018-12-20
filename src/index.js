import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter , {history } from './routers/AppRouter';
import getVisibleExpenses from '../src/selectors/expenses';
import {addExpense} from '../src/actions/expenses';
import {startSetExpenses} from '../src/actions/expenses';
import { login, logout } from '../src/actions/auth';
import configureStore from '../src/store/configureStore';
import {Provider} from 'react-redux';
import {firebase} from './firebase/firebase';
import '../src/App.css';


  const store = configureStore();
  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses= getVisibleExpenses(state.expenses, state.filters);
    
  });

//Ovo znaci da su sada sve komponente koje su ovde imaju pristup storu
const jsx= (
  <Provider store={store}>
   <AppRouter />
  </Provider>
);

let hasRendered = false;
  const renderApp = () => {
    if(!hasRendered) {
      ReactDOM.render(jsx, document.getElementById('root'));
      hasRendered = true;
    }
  }


// render loading message to the screen until we get the data from firebase dok ne vrati promise 
ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));

// get history api outsite of the context of the component
//in this contekst we are not in kompenent register with a route so, we need to get 
// access to history because of redirecing in if statement


firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    console.log('login');
    store.dispatch(login(user.uid));
    console.log(store.getState().auth.uid);
    store.dispatch(startSetExpenses()).then( () => {
      renderApp();
     if ( history.location.pathname === '/' ) {
     history.push('/dashboard');
      }
    });
  } else {
    console.log('logOut');
    renderApp();
    history.push('/');
   
  }
});




 
/*
  store.dispatch(addExpense({ description: 'Water bill', amount: 70, createdAt:150 }));
  store.dispatch(addExpense({ description: 'Gas bill', amount: 800, createdAt:25 }));
  store.dispatch(addExpense({ description: 'Electirc bill', amount: 100, createdAt:3500 }));
  store.dispatch(setTextFilter('gas'));
  
  setTimeout(() => {
    store.dispatch(setTextFilter('water'));
  }, 3000);

*/