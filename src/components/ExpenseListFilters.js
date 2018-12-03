import React from 'react';
import { connect } from 'react-redux';
import selectExpenses from '../selectors/expenses';
import {setTextFilter, setStartDate, setEndDate} from '../actions/filters';
import { DateRangePicker } from 'react-dates';
//connect redux component to the redux store
class ExpenseListFilter extends React.Component {
  onDatesChange= ({startDate, endDate})=> {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };
    onFocusChange = (calendarFocused) => {
    this.setState(() => ({ calendarFocused }));
  };
    render() {
      return (
        <div>
          <div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{this.props.dispatch(setTextFilter(e.target.value));}}/>
          </div>
          <DateRangePicker
            startDate={this.props.filters.startDate} // momentPropTypes.momentObj or null,
            //startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
            endDate={this.props.filters.endDate} // momentPropTypes.momentObj or null,
            //endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
            onDatesChange={this.onDatesChange} // PropTypes.func.isRequired,
            //focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
            onFocusChange={this.onFocusChange}
/>
        </div>
      );
    }

  }
const mapStateToProps = (state)=> {
  return {
    filters:state.filters
    
  };
};
export default connect(mapStateToProps)(ExpenseListFilter);


  


/*
const ExpenseListFilter= (props)=> (
  <div>
    <div>
      <input type="text" value={props.filters.text} onChange={(e)=>{props.dispatch(setTextFilter(e.target.value));}}/>
    </div>

  </div>

);
*/ 