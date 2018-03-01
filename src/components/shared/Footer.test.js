import React from 'react';
import ReactDOM from 'react-dom';
import Footer from './Footer';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

Enzyme.configure({ adapter: new Adapter() })

it('Footer renders', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Footer />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders footer p tag', () => {
  const footer = shallow(<Footer />)
  let length = footer.find('p').length
  expect(length).toBe(1)
})
