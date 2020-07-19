import { createStore } from 'redux';

const incrementCount = ({ incrementBy = 1 } = {}) => {
  return {
    type: 'INCREMENT',
    incrementBy
  }
};

const decrementCount = ({ decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  }
};

const setCount = ({ count = 42 } = {}) => {
  return {
    type: 'SET',
    count
  }
};

const resetCount = () => {
  return {
    type: 'RESET'
  }
};

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + 1
      };
    case 'DECREMENT':
      return {
        count: state.count - 1
      };
    case 'SET': 
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: 0
      }
    default:
      return state;
  }
});

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(incrementCount(5));

store.dispatch(decrementCount(4));

store.dispatch(setCount(1));

store.dispatch(resetCount());
