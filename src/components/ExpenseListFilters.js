import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

const ExpenseListFilters = (props) => {

  const [calendarFocused, setCalendarFocused] = useState(null);

  return (
    <div>
      <input type='text' value={props.filters.text} onChange={(e) => {
        props.dispatch(setTextFilter(e.target.value));
      }} />
      <select 
        value={props.fitler.sortBy}
        onChange={(e) => {
          if (e.target.value === 'Date') {
            props.dispatch(sortByDate(e.target.value));
          } else if (e.target.value === 'Amount') {
            props.dispatch(sortByAmount(e.target.value));
          }
          return
        }}
      >
        <option value="Date">Date</option>
        <option value="Amount">Amount</option>
      </select>
      <DateRangePicker

      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    filters: state.filters
  };
};

export default connect(mapStateToProps)(ExpenseListFilters);
