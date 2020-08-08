import React from 'react';
import { shallow } from 'enzyme';
import { CreateExpense } from '../../components/CreateExpense';

test('should render CreateExpense correctly', () => {
  const onSubmit = jest.fn();
  const history = { push: jest.fn() };
  const wrapper = shallow(<CreateExpense onSubmit={onSubmit} history={history} />);
  expect(wrapper).toMatchSnapshot();
});