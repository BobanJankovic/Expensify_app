import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from "../components/ExpenseListItem";
import ExpenseListFilter from "../components/ExpenseListFilters";

//connect redux component to the redux store
const ExpenseList= (props)=> (
<div>
  <h1>Boban Jankovic je car</h1>
  <ExpenseListItem />
  <ExpenseListFilter />

</div>
);
/*
const mapStateToProps = (state)=> {
  return {
    expenses:state.expenses,
    filters:state.filters
  };
};
export default connect(mapStateToProps)(ExpenseList);
*/
export default ExpenseList;