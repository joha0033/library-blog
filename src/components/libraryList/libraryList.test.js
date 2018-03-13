import React from 'react';
import ReactDOM from 'react-dom';
import LibraryList from './librarylist';
import LibraryItem from './libraryItem/libraryItem'
import Header from '../shared/header/header'
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';
import App from '../App/App'

Enzyme.configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<anything />, div);
  ReactDOM.unmountComponentAtNode(div);
});

describe('libraryList', () => {
  let props
  let mountedList
  //mount the list of items
  const list = () => {
    if (!mountedList) {
      mountedList = mount(
        <LibraryList {...props} />
      );
    }
    return mountedList;
  }

  //clean slate before each test
  beforeEach(() => {
    props = {
      form: false
    }
    mountedList = undefined
  })
  //at least renders 1 div
  it("always renders a div", () => {
    const divs = list().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered div", () => {

    it("contains everything else that gets rendered", () => {
      const divs = list().find("div");
      // use .first() to get the outermost div.
      const wrappingDiv = divs.first();
      expect(wrappingDiv.children().length).toEqual(list().children().length)
    });

    it("always renders a `LibraryItem`", () => {
      expect(list().find(LibraryItem).length).toBe(1);
    });

    describe("when `toggle` is false, no form", () => {
      it("does not display `form` when toggle is false'", () => {
        expect(list().find('form').length).toBe(0);
      });

      it("does display `form` when toggle is true'", () => {
        const wrapper = mount(<App />);
        console.log(wrapper.state()); //shows false
        wrapper.find('a').simulate('click');
        let expectedState = {"showForm": true}
        console.log(wrapper.state()); //shows true
        expect(wrapper.state()).toEqual(expectedState); //passes
        expect(wrapper.find('form').length).toBe(1); //passes
      });

    });

  });

})
