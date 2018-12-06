import React from 'react';
import { connect } from 'react-redux';
import AddForm from './AddExpense';

import { editExpense,addExpense, removeExpense, startRemoveExpense } from '../actions/expenses';


const Edit = (props) => {
   console.log(props);
  return (
    <div>
      This is edit od {props.match.params.id}
      
      <AddForm
      //zbog linije koda 12 mi se vrednosti pojave u poljima koje treba da izmenim
      //props.expense pristupio sam iz stora i poslao je preko propsa
      expenseedit={props.expense}
       onSubmit={(expensed) => {
         console.log(expensed)
         console.log(editExpense(props.expense.id, expensed))
         props.dispatch(editExpense(props.expense.id, expensed));
          //props.dispatch(addExpense(expense));
          props.history.push('/');
         
        }}
         />
          <button  onClick={()=>{
            props.dispatch(startRemoveExpense({ id: props.match.params.id}))
            props.history.push('/');
            }}>remove</button>
    </div>
  );
};


const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(Edit);
   
   /*import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

const EditExpensePage = (props) => {
  return (
    <div>
      <ExpenseForm
        expense={props.expense}
        onSubmit={(expense) => {
          props.dispatch(editExpense(props.expense.id, expense));
          props.history.push('/');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeExpense({ id: props.expense.id }));
        props.history.push('/');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage); */