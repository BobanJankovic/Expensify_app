import React from 'react';
import { connect } from 'react-redux';
import ExpenseList from "../components/ExpenseList";


const ExpensePage = (props) => (
    <div className="expensePage">
    This is from expsense Page
    
    <ExpenseList />
    </div>
);

const mapStateToProps = (state)=> {
  return {
    expenses:state.expenses,
    filters:state.filters
  };
};
export default connect()(ExpensePage);