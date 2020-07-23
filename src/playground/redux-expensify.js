import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  expense: {
    id: uuid(),
    description,
    note, 
    amount,
    createdAt
  }
});

const expenseReducerDefaultState = []
const filtersReducerDefaultState = { 
  text: '',
  sortBy: '',
  startDate: undefined,
  endDate: undefined
};

const expenseReducer = (state = expenseReducerDefaultState, action) => {
  switch(action.type) {
    case 'ADD_EXPENSE':
      return state.concat(action.expense);
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

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(addExpense({ description: 'rent', amount: 100 }));

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