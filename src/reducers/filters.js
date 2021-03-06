import moment from 'moment';

const filtersReducerDefaultState = { 
  text: '',
  sortBy: '',
  startDate: moment().startOf('month'),
  endDate: moment().endOf('month')
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    case 'TEXT_FILTER':
      return {
        ...state,
        text: action.text
      }
      case 'SORT_BY_AMOUNT':
        return {
          ...state,
          sortBy: 'Amount'
      }
      case 'SORT_BY_DATE':
        return {
          ...state,
          sortBy: 'Date'
      }
      case 'SET_START_DATE':
        return {
          ...state,
          startDate: action.startDate
      }
      case 'SET_END_DATE':
        return {
          ...state,
          startDate: action.endDate
      }
    default: 
      return state;
  }
};

export default filtersReducer;