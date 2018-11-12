import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {sortByAmount} from '../actions/filters';
import {sortByDate} from '../actions/filters';

const Dropdown= (props)=> (
  <div>
    <select value={props.filters.sortBy} 
      onChange={
                (e)=>{
                  if (e.target.value==="date") {
                    props.dispatch(sortByDate())
                  } else if ((e.target.value==="amount")){
                    props.dispatch(sortByAmount())
                  }
                }
              }
      >
      <option value="amount" >Amount</option>
      <option value="date" >Date</option>
      
    </select>
  </div>
);

const mapStateToProps = (state)=> {
  return {
    expenses:selectExpenses(state.expenses,state.filters),
    filters:state.filters
  };
};

export default connect(mapStateToProps)(Dropdown);
