import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('Header renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Header />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders header links', () => {
  const header = shallow(<Header />)
  let length = header.find('li').length
  expect(length).toBe(1)
})

it('renders a logo', () => {
  const header = shallow(<Header />)
  let length = header.find('img').length
  expect(length).toBe(2)
})
