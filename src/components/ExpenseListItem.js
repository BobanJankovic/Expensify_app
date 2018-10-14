

import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {removeExpense} from '../actions/expenses';
//connect redux component to the redux store
const ExpenseListItem= (props)=> (
<div>
  <p>ovo je list item :{props.expenses.length}</p>
  {console.log(props.expenses)}
  <div>
    {props.expenses.length===0 && <p>Please add an expense</p>}
     {  props.expenses.map((expense,index) => {
       
          return (
            <div>
            <p key={index++} >{expense.description}:{expense.amount} created at : {expense.createdAt}</p>
            <button 
              onClick={()=>{
                
                props.dispatch(removeExpense({ id: expense.id }));
              }}>remove
            </button>
            </div>
          );   
        })
      }
    </div>
    
  </div>

);

const mapStateToProps = (state)=> {
  return {
    expenses:selectExpenses(state.expenses,state.filters)
    
  };
};
export default connect(mapStateToProps)(ExpenseListItem);










/*

 



*/