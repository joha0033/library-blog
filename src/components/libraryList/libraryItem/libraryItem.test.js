import React from 'react';
import ReactDOM from 'react-dom';
import LibraryItem from './libraryItem';
import LibraryList from '../libraryList';
import Enzyme from 'enzyme';
import { shallow } from 'enzyme'
import { mount } from "enzyme";
import Adapter from 'enzyme-adapter-react-16'
import renderer from 'react-test-renderer';

Enzyme.configure({ adapter: new Adapter() })

describe('renders a div', () => {
  let props
  let mountedItem
  //mount the list of items
  const item = () => {
    if (!mountedItem) {
      mountedItem = mount(
        <LibraryItem items={mount(<LibraryList />).state().libraries} />
      );
    }
    return mountedItem;
  }

  beforeEach(() => {
    props = {
      form: false
    }
    mountedItem = undefined
  })

  //at least renders 1 div
  it("always renders a div", () => {
    const divs = item().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  //at least renders 1 div
  it("always renders a div", () => {
    const divs = item().find("div");
    expect(divs.length).toBeGreaterThan(0);
  });

  describe("the rendered item", () => {

    it("contains everything else that gets rendered", () => {
      const divs = item().find("div");
      const wrappingDiv = divs.first();
      // console.log(item().children().children());
      expect(wrappingDiv.children().length).toEqual(item().children().children().length)
    });

    it("mapping function produces image", () => {
      // const wrapper = mount(<LibraryItem items={mount(<LibraryList />).state().libraries}/>);
      const tree = renderer
        .create(<LibraryItem items={mount(<LibraryList />).state().libraries}/>)
        .toJSON();
      expect(tree).toMatchSnapshot();
    })
  })

})
