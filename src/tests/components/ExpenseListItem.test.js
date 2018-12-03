import React from "react";
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import { ExpenseListItem } from '../../components/ExpenseListItem';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {expenses} from '../fixtures/expenses';

Enzyme.configure({ adapter: new Adapter() });
//Ovo uvek kopiram kada testiram komponentu u ENZYME
//------------------------------------------------------------
//console.log(expenses[0])

test('should render ExpenseList correctly', () => {
const wrapper = shallow(<ExpenseListItem expenses={expenses} />);
expect(toJSON(wrapper)).toMatchSnapshot();
//expect(wrapper.find('h1').text()).toBe('Expensify');
//expect(renderer.getRenderOutput()).toMatchSnapshot();
//console.log(renderer.getRenderOutput());

}); 