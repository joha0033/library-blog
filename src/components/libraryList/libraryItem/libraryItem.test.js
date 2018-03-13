import React from 'react';
import ReactDOM from 'react-dom';
import libraryItem from './libraryItem';
import Enzyme from 'enzyme';
import {shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<anything />, div);
  ReactDOM.unmountComponentAtNode(div);
});
