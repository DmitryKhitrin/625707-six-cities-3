import React from "react";
import renderer from "react-test-renderer";
import {Map} from "./map";
import {ParsedOfferCard} from "../../utils/utils";

const mocData = [
  {
    id: `1`,
    price: 1,
    previewImage: `img/apartment-01.jpg`,
    rating: `25%`,
    type: `Apartment`,
    isPremium: true,
    title: `Just Flat.`,
    isFavorite: false,
    setFavorite: () => {}
  },
  {
    id: `2`,
    price: 20,
    previewImage: `img/room.jpg`,
    rating: `50%`,
    type: `Just Flat`,
    isPremium: false,
    title: `Just plane text.`,
    isFavorite: false,
    setFavorite: () => {}
  },
  {
    id: `3`,
    price: 100,
    previewImage: `img/apartment-02.jpg`,
    rating: `100%`,
    type: `Private room`,
    isPremium: true,
    title: `Best place in the World really.Beautiful luxurious apartment at great location`,
    isFavorite: false,
  }
] as ParsedOfferCard[];


it(`<Map /> should render map.`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer
    .create(<Map city={{name: `Moscow`, location: [52.38333, 4.9]}} placeCardsList={mocData} height={1000} activeCard={``}/>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
