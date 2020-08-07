import React from 'react';
import { shallow } from 'enzyme';
import Help from '../../components/Help';

test('should render the Help correctly', () => {
  const wrapper = shallow(<Help />);
  expect(wrapper).toMatchSnapshot();
});