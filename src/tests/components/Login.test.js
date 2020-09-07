import React from 'react';
import { shallow } from 'enzyme';
import { Login } from '../../components/Login';

test('should correctly render Login', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper).toMatchSnapshot();
});

test('should call startLogin on button click', () => {

});
