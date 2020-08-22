import { addExpense, editExpense, removeExpense } from '../../actions/expenses';
import expenses from '../fixtures/expenses';

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