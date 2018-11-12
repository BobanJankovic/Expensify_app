import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import uuid from "uuid";
import { Link } from 'react-router-dom'


//connect redux component to the redux store
const ExpenseListItem= (props)=> (
<div>
  <div>
    {props.expenses.length===0 && <p>Please add an expense</p>}
     {  props.expenses.map((expense) => {
       
          return (
            
            <div key={expense.id}>
              <p><Link to={`/edit/${expense.id}`} >{expense.description}</Link>:{expense.amount} created at : {expense.createdAt}</p>
             
            </div>
          );   
        })
      }
    </div>
    
    
  </div>

);

const mapStateToProps = (state)=> {
  return {
    //state.expenses je arej objekate, state.filters je objekat sa key-value parovima
    //expenses je filtrirani arej objekaata prema state.filters
    expenses:selectExpenses(state.expenses,state.filters)
    
  };
};
export default connect(mapStateToProps)(ExpenseListItem);



