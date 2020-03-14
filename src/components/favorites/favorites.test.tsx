import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {Favorites} from "./favorites";
import {ParsedOfferCard} from "../../utils/utils";

const moc = {
  getFavoriteAsync: jest.fn(),
  setFavorite: jest.fn(),
  setCity: jest.fn(),
  favorites: {
    Paris: [
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
    ] as unknown as ParsedOfferCard[]
  }
};
it(`<Favorites /> should render Favorites.`, () => {
  const tree = renderer
    .create(
        <Router>
          <Favorites {...moc} />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
