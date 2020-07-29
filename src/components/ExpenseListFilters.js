import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

const ExpenseListFilters = (props) => {

  const [calendarFocused, setCalendarFocused] = useState(null);

  const onDatesChange = ({ startDate, endDate }) => {
    props.dispatch(setStartDate(startDate));
    props.dispatch(setEndDate(endDate));
  };

  const onFocusChange = (calendarFocused) => {
    setCalendarFocused(calendarFocused);
  };

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
        startDate={props.filters.startDate}
        endDate={props.filters.endDate}
        onDatesChange={onDatesChange}
        focusedInput={calendarFocused}
        onFocusChange={onFocusChange}
        showClearDates={true}
        numberOfMonths={1}
        isOutsideRange={() => false}
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
