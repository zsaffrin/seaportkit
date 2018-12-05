import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
import Header from '../Header/Header';

it('renders without crashing', () => {
    shallow(<App />);
});

it('renders a div with class .App', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists('.App')).toBe(true);
});

it('renders a Header element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.contains(<Header />)).toBe(true);
});
