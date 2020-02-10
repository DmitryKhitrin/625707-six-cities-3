import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

const mockedCard = {
  id: `1`,
  priceValue: 100,
  placeCardImage: `img/apartment-02.jpg`,
  starsRating: `100%`,
  roomType: `Private room`,
  isPremium: true,
  cardName: `Best place in the World really.Beautiful luxurious apartment at great location`,
  onMouseLeave: () => {},
  onHeaderClick: () => {},
  onMouseEnter: () => {},
};

const onHeaderClick = () => {};

it(`<PlaceCard /> should render place-card.`, () => {
  const tree = renderer
    .create(<PlaceCard {...mockedCard} onHeaderClick={onHeaderClick} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
