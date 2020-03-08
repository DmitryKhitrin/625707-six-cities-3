import React from "react";
import renderer from "react-test-renderer";
import {FavoriteLoacation} from "./favorite-location.jsx";

const moc = {
  city: `Paris`,
  getFavorite: jest.fn(),
  setFavorite: jest.fn(),
  favorites: [
    {
      id: `1`,
      price: 100,
      previewImage: `img/apartment-02.jpg`,
      rating: `100%`,
      type: `Private room`,
      isPremium: true,
      title: `Best place in the World really.Beautiful luxurious apartment at great location`
    },
    {
      id: `2`,
      price: 100,
      previewImage: `img/apartment-02.jpg`,
      rating: `100%`,
      type: `Private room`,
      isPremium: true,
      title: `Best place in the World really.Beautiful luxurious apartment at great location`
    }
  ]
};
it(`<FavoriteLoacation /> should render FavoriteLoacation.`, () => {
  const tree = renderer.create(<FavoriteLoacation {...moc}/>).toJSON();
  expect(tree).toMatchSnapshot();
});
