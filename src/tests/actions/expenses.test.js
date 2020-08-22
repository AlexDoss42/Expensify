import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

const createMockStore = configureMockStore([thunk]);

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: '123'
  });
});

test('should set up edit expense action object', () => {
  const action = editExpense('123', { note: 'New Note Value' });
  expect(action).toEqual({
    type: "EDIT_EXPENSE",
    id: '123',
    updates: { note: 'New Note Value' }
  });
});

test('should set up add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  })
});

test('should add expense to database and store', (done) => {
  const store = createMockStore({});
  const expenseData = {
    description: 'Mouse',
    amount: 3000,
    note: 'This one is better',
    createdAt: 1000
  }
  store.dispatch(startAddExpense(expenseData)).then(() => {
    const actions = store.getActions();
    expect(actions[0]).toEqual({
      type: 'ADD_EXPENSE',
      expense: {
        id: expect.any(String),
        ...expenseData
      }
    });
    done();
  });
});

test('should add expense with defaults to database and store', () => {

});

// test('should set up add expense action object with default values', () => {
//   const action = addExpense();
//   expect(action).toEqual({
//     type: "ADD_EXPENSE",
//     expense: {
//       id: expect.any(String),
//       description = '',
//       note = '',
//       amount = 0,
//       createdAt = 0
//     }
//   });
// });