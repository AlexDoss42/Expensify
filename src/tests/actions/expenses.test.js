import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should set up remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: "REMOVE_EXPENSE",
    id: '123'
  });
});