import React from "react";
import renderer from "react-test-renderer";
import {OffersList} from "./offers-list.jsx";

const mocData = [
  {
    id: `1`,
    priceValue: 1,
    placeCardImage: `img/apartment-01.jpg`,
    starsRating: `25%`,
    roomType: `Apartment`,
    isPremium: true,
    cardName: `Just Flat.`
  },
  {
    id: `2`,
    priceValue: 20,
    placeCardImage: `img/room.jpg`,
    starsRating: `50%`,
    roomType: `Just Flat`,
    isPremium: false,
    cardName: `Just plane text.`
  },
  {
    id: `3`,
    priceValue: 100,
    placeCardImage: `img/apartment-02.jpg`,
    starsRating: `100%`,
    roomType: `Private room`,
    isPremium: true,
    cardName: `Best place in the World really.Beautiful luxurious apartment at great location`
  }
];

const onHeaderClick = () => {};

it(`<OffersList /> should render OffersList.`, () => {
  const tree = renderer
    .create(
        <OffersList
          placeCardsList={mocData}
          onHeaderClick={onHeaderClick}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
