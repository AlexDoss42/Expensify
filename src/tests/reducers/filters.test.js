import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
  const state = filtersReducer(undefined, {type: '@@INIT'});
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should set sortBy to amount', () => {
  const state = filtersReducer(undefined, { type: "SORT_BY_AMOUNT" });
  expect(state.sortBy).toBe('Amount');
});

test('should set sortBy to date', () => {
  const currentState = {
    text: '',
    startDate: undefined,
    endDate: undefined,
    sortBy: 'amount'
  };
  const action = { type: 'SORT_BY_DATE'}
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('Date');
});

test('should set text filter', () => {
  const action = { type: 'TEXT_FILTER', text: 'e' };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe('e');
});

test('should set startDate filter', () => {});

test('should set endDate filter', () => {});