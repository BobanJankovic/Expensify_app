import React from 'react';
import moment from "moment";
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



const now = moment();
console.log(now.format('MMM Do, YYYY'));
//stateful function za razliku od prethodnih koji su stateless
export default class AddForm extends React.Component {
  constructor(props){
    super(props);
//There is only one reason when one needs to pass props to super():
//When you want to access this.props in constructor.
    this.state = {
      description: props.expenseedit ? props.expenseedit.description : '',
      note: props.expenseedit ? props.expenseedit.note : '' ,
      amount: props.expenseedit ? props.expenseedit.amount : '' ,
      createdAt: props.expenseedit ? moment(props.expenseedit.createdAt) : moment(),
      calendarFocused:false,
      error:''
    };

  }
  
//moj nije radio zbog variable skopa sto je otklonjeno arrow funkijom u ekmaskriptu 6 i 
//od sada debilu glupi uvek koristi es6 gde god mozes a posebno arrow funkciju da bi olaksao sebi zivot.
  onChangeDescription = (e) => {
    let vrednost = e.target.value;
    this.setState(()=>({description: vrednost}))
    console.log(this.state.description.length);
    
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
    console.log(this.state.amount);
  };
  onDateChange = (createdAt) => {
    this.setState(()=>({ createdAt}))
  };
   onFocusChange = ({focused}) => {
    this.setState(()=> ({ calendarFocused:focused}))
  };



  onSubmitButton = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
      }
    };
  

  
  render() {
    return (
     <div>
        {this.state.error && <p>{this.state.error}</p>}

        <form onSubmit={this.onSubmitButton}>
        <input
        type='text'
        placeholder='description'
        value={this.state.description}
        onChange={this.onChangeDescription}
        />
        <input
        type="number"
        placeholder="Amount"
        value={this.state.amount}
        onChange={this.onAmountChange}
        />

        <SingleDatePicker
          date={this.state.createdAt} 
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused} // PropTypes.bool
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
          
        />

        <textarea
        placeholder="Add a note for your expense (optional)"
        value={this.state.note}
        onChange={this.onNoteChange}>
        </textarea>
        <button>Add EXPENSE</button>
        </form>
      </div>
    );
  }
}
/*
----------------------------------------------------------------------
onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };


import React from 'react';

export default class AddForm extends React.Component {
  state = {
    description: '',
    note: '',
    amount: ''
  };
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
            placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
          <textarea
            placeholder="Add a note for your expense (optional)"
            value={this.state.note}
            onChange={this.onNoteChange}
          >
          </textarea>
          <button>Add Expense</button>
        </form>
      </div>
    )
  }
}
*/


