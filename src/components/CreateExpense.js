import React from 'react';
import { connect } from 'react-redux';
import AddForm from '../components/AddExpense';
import { startAddExpense } from '../actions/expenses';


 class CreateExpense extends React.Component {
    onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render(){
    return(
      <div>
        <AddForm onSubmit={this.onSubmit} />
      </div>
    )
  };
};

//da bih imao pristup dispatchu ubacujem dispatch to props ovako i koristim ga gore u nekoj funkciji.
const mapDispatchToProps = (dispatch) => ({
  startAddExpense: (expense) => dispatch(startAddExpense(expense))
});


export default connect(undefined, mapDispatchToProps)(CreateExpense);

/*
--------------------
Posto nemamo ovde mapStatetoProps stavljamo undefined
export default connect(mapStateToProps,mapDispatchToProps)(TodoItem)
--------------------
*/ 
/*
import { startAddExpense } from '../actions/expenses';

export class AddExpensePage extends React.Component {
  onSubmit = (expense) => {
    this.props.startAddExpense(expense);
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <h1>Add Expense</h1>
        <ExpenseForm
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}





*/