import React from "react";
import renderer from "react-test-renderer";
import {ReviewsItem} from "./reviews-item";

const mocData = {
  id: `1`,
  reviewsDate: 123213123,
  reviewsText: `Somw new Text`,
  reviewsRating: `20%`,
  reviewsUserName: `Igor`,
  reviewsAvatar: `img/avatar-max.jpg`
};

it(`<ReviewsItem /> should render ReviewsItem.`, () => {
  const tree = renderer.create(<ReviewsItem {...mocData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
