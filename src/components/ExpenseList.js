import React from 'react';
import { connect } from 'react-redux';
//connect redux component to the redux store
const ExpenseList= (props)=> (
<div>
  <h1>Boban Jankovic je car</h1>
  <div>
  {props.filters.text}
  </div>
  {props.expenses.length}
</div>
);

const mapStateToProps = (state)=> {
  return {
    expenses:state.expenses,
    filters:state.filters
  };
};
export default connect(mapStateToProps)(ExpenseList);