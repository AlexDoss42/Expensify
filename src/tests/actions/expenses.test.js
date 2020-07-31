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

test('should set up add expense action object with provided values', () => {
  const expenseData = {
    description: 'Rent',
    amount: 46500,
    createdAt: 1000,
    note: 'This was last months rent'
  };
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      ...expenseData,
      id: expect.any(String)
    }
  })
});

test('should set up add expense action object with default values', () => {

});