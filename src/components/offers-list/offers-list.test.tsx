import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {OffersList} from "./offers-list";
import {ParsedOfferCard} from "../../utils/utils";

const mocData = [
  {
    id: `3`,
    price: 100,
    previewImage: `img/apartment-02.jpg`,
    rating: `100%`,
    type: `Private room`,
    isPremium: true,
    title: `Best place in the World really.Beautiful luxurious apartment at great location`,
    isFavorite: false,
    images: [``],
    bedrooms: 1,
    maxAdults: 1,
    goods: [``],
    host: {
      personPhoto: ``,
      personName: ``,
      id: 1,
      isPro: false
    },
    location: [52, 2],
    description: ``,
    city: {
      name: `Moscow`,
      location: [54, 2]
    }
  }
] as unknown as ParsedOfferCard[];


it(`<OffersList /> should render OffersList.`, () => {
  const tree = renderer
    .create(
        <Router>
          <OffersList
            placeCardsList={mocData}
            onMouseEnter={jest.fn()}
            onMouseLeave={jest.fn()}
            setFavorite={jest.fn()}
            isAuthenticated={false}
          />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
