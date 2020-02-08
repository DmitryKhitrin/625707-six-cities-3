import React from "react";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";

const mocData = [
  {
    priceValue: 1,
    placeCardImage: `img/apartment-01.jpg`,
    starsRating: `25%`,
    roomType: `Apartment`,
    isPremium: true,
    cardName: `Just Flat.`
  },
  {
    priceValue: 20,
    placeCardImage: `img/room.jpg`,
    starsRating: `50%`,
    roomType: `Just Flat`,
    isPremium: false,
    cardName: `Just plane text.`
  },
  {
    priceValue: 100,
    placeCardImage: `img/apartment-02.jpg`,
    starsRating: `100%`,
    roomType: `Private room`,
    isPremium: true,
    cardName: `Best place in the World really.Beautiful luxurious apartment at great location`
  }
];

const mocRentCount = 3;
const onClick = () => {};
it(`<App /> should render site.`, () => {
  const tree = renderer.create(
      <App rentCount={mocRentCount} placeCardsList={mocData} onHeaderClick={onClick}/>
  ).toJSON();
  expect(tree).toMatchSnapshot();
});
