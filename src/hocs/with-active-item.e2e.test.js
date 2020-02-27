import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withActiveItem} from "./with-active-item.jsx";

configure({adapter: new Adapter()});

const TestComponent = () => <div>Somw text.</div>;
const WithActiveItem = withActiveItem(TestComponent);

it(`TestComponent should have right active item.`, () => {
  const component = shallow(<WithActiveItem />);
  expect(component.props().activeItem).toEqual(``);
  component.props().setActiveItem(`Moscow`);
  expect(component.props().activeItem).toEqual(`Moscow`);
});
