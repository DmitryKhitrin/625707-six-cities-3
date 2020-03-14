import React from "react";
import renderer from "react-test-renderer";
import {ProppertyInside} from "./property-inside";

const mocData = `Душик`;

it(`<ProppertyInside /> should render main.`, () => {
  const tree = renderer.create(<ProppertyInside property={mocData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
