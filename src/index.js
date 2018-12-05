import React from 'react';
import ReactDOM from 'react-dom';
import {AppRouter} from './routers/AppRouter';
import getVisibleExpenses from '../src/selectors/expenses';
import {addExpense} from '../src/actions/expenses';
import {startSetExpenses} from '../src/actions/expenses';
import {setTextFilter} from '../src/actions/filters'
import configureStore from '../src/store/configureStore';
import {Provider} from 'react-redux';
import './firebase/firebase';


  const store = configureStore();
  store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses= getVisibleExpenses(state.expenses, state.filters);
    
  });


  store.dispatch(addExpense({ description: 'Water bill', amount: 70, createdAt:150 }));
  store.dispatch(addExpense({ description: 'Gas bill', amount: 800, createdAt:25 }));
  store.dispatch(addExpense({ description: 'Electirc bill', amount: 100, createdAt:3500 }));
  
  
  //store.dispatch(setTextFilter('gas'));
  /*
  setTimeout(() => {
    store.dispatch(setTextFilter('water'));
  }, 3000);
  */
//Ovo znaci da su sada sve komponente koje su ovde imaju pristup storu
const jsx= (
  <Provider store={store}>
   <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById('root'));
store.dispatch(startSetExpenses()).then( () => {
 ReactDOM.render(jsx, document.getElementById('root'));

});

console.log(startSetExpenses());


 
