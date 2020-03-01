import React from "react";
import renderer from "react-test-renderer";
import {EmptyMain} from "./empty-main.jsx";

it(`Should render EmptyMain`, () => {
  const tree = renderer
    .create(<EmptyMain city={`Moscow`}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
