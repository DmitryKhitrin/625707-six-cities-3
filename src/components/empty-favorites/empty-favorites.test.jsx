import React from "react";
import renderer from "react-test-renderer";
import {EmptyFavorites} from "./empty-favorites.jsx";

it(`<EmptyFavorites /> should render EmptyFavorites.`, () => {
  const tree = renderer.create(<EmptyFavorites />).toJSON();
  expect(tree).toMatchSnapshot();
});
