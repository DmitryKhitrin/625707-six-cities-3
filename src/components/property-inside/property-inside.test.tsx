import React from "react";
import renderer from "react-test-renderer";
import {PropertyInside} from "./property-inside";

const mocData = `Душик`;

it(`<PropertyInside /> should render main.`, () => {
  const tree = renderer.create(<PropertyInside property={mocData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
