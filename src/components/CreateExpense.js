import React from 'react';
import { connect } from 'react-redux';
import AddForm from '../components/AddExpense';
import { addExpense } from '../actions/expenses';


const CreateExpense = (props) => (
    <div>
    <AddForm
      onSubmit={(expense) => {
        props.dispatch(addExpense(expense));
        props.history.push('/');
        
      }}
    />
    </div>
);

 const mapStateToProps = (state)=> {
  return {
    expenses:state.expenses,
    filters:state.filters
  };
};
export default connect()(CreateExpense);