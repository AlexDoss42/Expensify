import { createStore, combineReducers } from 'redux';

const expenseReducerDefaultState = []
const filtersReducerDefaultState = { text: '', sortBy: '', startDate: undefined, endDate: undefined }

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type) {
    default: 
    return state;
  }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch(action.type) {
    default: 
      return state;
  }
}

const store = createStore(
  combineReducers({
    expenses: expenseReducer,
    fitlers: filtersReducer
  })
  );

const demoState = {
  expenses: [{
    id: 'poijsdfas',
    description: 'January Rent',
    note: 'This was the final payment for 999 W',
    amount: 39500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy: 'date', // date or amount
    startDate: undefined,
    endDate: undefined
  }
};