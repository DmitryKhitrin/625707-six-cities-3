import React from "react";
import renderer from "react-test-renderer";
import {Map} from "../map/map.jsx";

const mocData = [
  {
    id: `1`,
    priceValue: 1,
    placeCardImage: `img/apartment-01.jpg`,
    starsRating: `25%`,
    roomType: `Apartment`,
    isPremium: true,
    cardName: `Just Flat.`,
    coords: [49, 52]
  },
  {
    id: `2`,
    priceValue: 20,
    placeCardImage: `img/room.jpg`,
    starsRating: `50%`,
    roomType: `Just Flat`,
    isPremium: false,
    cardName: `Just plane text.`,
    coords: [49, 52]
  },
  {
    id: `3`,
    priceValue: 100,
    placeCardImage: `img/apartment-02.jpg`,
    starsRating: `100%`,
    roomType: `Private room`,
    isPremium: true,
    cardName: `Best place in the World really.Beautiful luxurious apartment at great location`,
    coords: [49, 52]
  }
];


it(`<Map /> should render map.`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer
    .create(<Map city={[52.38333, 4.9]} placeCardsList={mocData} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});