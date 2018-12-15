import React from "react";
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Header} from '../../components/Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import firebase from "../../firebase/firebase";

Enzyme.configure({ adapter: new Adapter() });

test('should render Header correctly', () => {
const wrapper = shallow(<Header startLogout={ () => {} } />);
expect(toJSON(wrapper)).toMatchSnapshot();
//expect(wrapper.find('h1').text()).toBe('Expensify');
//expect(renderer.getRenderOutput()).toMatchSnapshot();
//console.log(renderer.getRenderOutput());

});

// using spies

// should call startLogout on button click

// LoginPage test file -> Should call startLogin on button click
/*
test('should call onSubmit prop for valid form submission', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy} />);
  wrapper.find('form').simulate('submit', {
    preventDefault: () => { }
  });
  expect(wrapper.state('error')).toBe('');
  expect(onSubmitSpy).toHaveBeenLastCalledWith({
    description: expenses[0].description,
    amount: expenses[0].amount,
    note: expenses[0].note,
    createdAt: expenses[0].createdAt
  });
});
*/ 
test('should call startLogout on button click', () => {
  const onSubmitSpy = jest.fn();
  const wrapper = shallow(<Header startLogout={ onSubmitSpy }  />);
  
 wrapper.find('button').simulate('click');
  expect(onSubmitSpy).toHaveBeenCalled();
});

