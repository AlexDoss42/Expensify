import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

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