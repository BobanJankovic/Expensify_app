

/*











//store.subscribe(() => {
 // const state = store.getState();
 // const visibleExpenses= getVisibleExpenses(state.expenses, state.filters);
//  console.log(visibleExpenses);
//});
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses= getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

  store.dispatch(addExpense({ description: 'Tea', amount: 70, createdAt:150 }));
  store.dispatch(addExpense({ description: 'Coffee', amount: 800, createdAt:25 }));
  store.dispatch(addExpense({ description: 'Fanta', amount: 100, createdAt:3500 }));
  store.dispatch(addExpense({ description: 'Fanta', amount: 120, createdAt:3570  }));
  store.dispatch(addExpense({ description: 'Fanta', amount: 10, createdAt:3150  }));
  store.dispatch(addExpense({ description: 'Fanta', amount: 1000, createdAt:250  }));
  store.dispatch(addExpense({ description: 'Fanta', amount: 1007, createdAt:50  }));
  store.dispatch(addExpense({ description: 'Fanta', amount: 101, createdAt:3507  }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(editExpense(expenseTwo.expense.id, { amount: 500 }));



// store.dispatch(setTextFilter());

 //store.dispatch(sortByAmount());
 store.dispatch(sortByDate());

//store.dispatch(setStartDate(125)); // startDate 125
//store.dispatch(setEndDate(17500)); // endDate 1250
//store.dispatch(setTextFilter('tea'));




/*-------------------------------------------------------------------------------------------
const demoState = {
  expenses: [{
    id: 'poijasdfhwer',
    description: 'January Rent',
    note: 'This was the final payment for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'amount', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};
------------------------------------------------------------------------------------------------
import React from 'react';
import { connect } from 'react-redux';
import AddForm from '../components/AddExpense';

import { startAddExpenses } from '../actions/expenses';

export class CreateExpense extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpenses(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <AddForm onSubmit={this.onSubmit} />
      </div>
      
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  startAddExpenses: (expense) => dispatch(startAddExpenses(expense))
});

export default connect(undefined, mapDispatchToProps)(CreateExpense);
*/
