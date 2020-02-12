import React from "react";
import renderer from "react-test-renderer";
import {Main} from "./main.jsx";

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

const mocRentCount = 3;

const onHeaderClick = () => {};

it(`<Main /> should render main.`, () => {
  const tree = renderer
    .create(
        <Main rentCount={mocRentCount} placeCardsList={mocData} onHeaderClick={onHeaderClick}/>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
