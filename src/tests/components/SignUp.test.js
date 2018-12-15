import React from "react";
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {SignUp} from '../../components/SignUp';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });


test('should render SignUp correctly', () => {
const wrapper = shallow(<SignUp />);
expect(toJSON(wrapper)).toMatchSnapshot();
expect(wrapper.find('h3').text()).toBe('Login page');
});

test('should call startLogin on button click', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<SignUp startLogin={ onSubmitSpy }  />);
  
 wrapper.find('button').simulate('click');
  expect(onSubmitSpy).toHaveBeenCalled();
});