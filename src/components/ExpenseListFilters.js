

import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {setTextFilter} from '../actions/filters';
//connect redux component to the redux store
const ExpenseListFilter= (props)=> (
<div>
  <div>
  
  <input type="text" value={props.filters.text} onChange={(e)=>{
      console.log(e.target.value);
      props.dispatch(setTextFilter(e.target.value));
  }}/>
  </div>
  
  
  </div>

);

const mapStateToProps = (state)=> {
  return {
    filters:state.filters
    
  };
};
export default connect(mapStateToProps)(ExpenseListFilter);








