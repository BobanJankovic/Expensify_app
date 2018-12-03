import React from "react";
import { shallow } from 'enzyme';
import toJSON from 'enzyme-to-json';
import {Header} from '../../components/Header';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

test('should render Header correctly', () => {
const wrapper = shallow(<Header />);
expect(toJSON(wrapper)).toMatchSnapshot();
//expect(wrapper.find('h1').text()).toBe('Expensify');
//expect(renderer.getRenderOutput()).toMatchSnapshot();
//console.log(renderer.getRenderOutput());

});