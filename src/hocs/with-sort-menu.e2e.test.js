import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withSortMenu} from "./with-sort-menu.jsx";
import {sortTypes} from "../utils/sort-types";

configure({adapter: new Adapter()});

const TestComponent = () => <div>Somw text.</div>;
const WithActiveItem = withSortMenu(TestComponent);

it(`TestComponent should have right props from withSortMenu.`, () => {
  const component = shallow(<WithActiveItem />);
  expect(component.props().isMenuOpen).toEqual(false);
  component.props().toggleSortMenu();
  expect(component.props().isMenuOpen).toEqual(true);
  expect(component.props().sortType).toEqual(sortTypes.POPULAR);
});
