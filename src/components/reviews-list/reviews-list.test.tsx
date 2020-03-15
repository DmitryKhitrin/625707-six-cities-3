import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list";
const mocData = [{
  comment: `string`,
  date: 2,
  id: `string`,
  rating: `string`,
  user: {
    personPhoto: `string`,
    personName: `string`,
    id: 2,
    isPro: true,
  }
}];

it(`<ReviewsList /> should render ReviewsList.`, () => {
  const tree = renderer.create(<ReviewsList reviews={mocData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
