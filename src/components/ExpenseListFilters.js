import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate } from '../actions/filters';
import { DateRangePicker } from 'react-dates';

class ExpenseListFilters extends React.Component {
  state = {
    calendarFocused: null
  }

  onDatesChange = ({ startDate, endDate }) => {
    this.props.dispatch(setStartDate(startDate));
    this.props.dispatch(setEndDate(endDate));
  };

  onFocusChange = (calendarFocused) => {
    this.setState(() => ({calendarFocused}));
  };

  onTextChange = (e) => {
    this.props.dispatch(setTextFilter(e.target.value));
  };

  onSortChange = (e) => {
    if (e.target.value === 'Date') {
      this.props.dispatch(sortByDate());
    } else if (e.target.value === 'Amount') {
      this.props.dispatch(sortByAmount());
    }
  };

  render() {
    return (
      <div>
        <input
          type='text'
          value={props.filters.text}
          onChange={this.onTextChange}
        />
        <select 
          value={props.fitler.sortBy}
          onChange={this.onSortChange}
        >
          <option value="Date">Date</option>
          <option value="Amount">Amount</option>
        </select>
        <DateRangePicker
          startDate={this.props.filters.startDate}
          endDate={this.props.filters.endDate}
          onDatesChange={onDatesChange}
          focusedInput={calendarFocused}
          onFocusChange={onFocusChange}
          showClearDates={true}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
    filters: state.filters
});

const mapDispatchToProps = (dispatch) => ({
  setTextFilter: (text) => dispatch(setTextFilter(text)),
  sortByDate: () => dispatch(sortByDate()),
  sortByAmount: () => dispatch(sortByAmount()),
  setStartDate: (startDate) => dispatch(setStartDate(startDate)),
  setEndDate: (endDate) => dispatch(setEndDate(endDate))
});

export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);
