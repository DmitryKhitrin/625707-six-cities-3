import React from "react";
import renderer from "react-test-renderer";
import {PropertiesInsideList} from "./properties-inside-list.jsx";

const mocData = [`Ванная`, `Камин`, `Стул`, `Стол`, `Ложка`];

it(`<PropertiesInsideList /> should render main.`, () => {
  const tree = renderer
    .create(<PropertiesInsideList propertyInside={mocData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
