import React from "react";
import renderer from "react-test-renderer";
import {PlaceCard} from "./place-card.jsx";

const mockedCard = {
  priceValue: 100,
  placeCardImage: `img/apartment-02.jpg`,
  starsRating: `100%`,
  roomType: `Private room`,
  isPremium: true,
  cardName: `Best place in the World really.Beautiful luxurious apartment at great location`
};

const onHeaderClick = () => {};

it(`<Main /> should render main.`, () => {
  const tree = renderer
    .create(<PlaceCard {...mockedCard} onHeaderClick={onHeaderClick}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
