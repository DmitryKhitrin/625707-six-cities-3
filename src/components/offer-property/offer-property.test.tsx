import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {OfferPropperty} from "./offer-property";
import {Map} from "../map/map";

import {store} from "../../mocks/mocked-store";
import {ParsedOfferCard} from "../../utils/utils";

const mocData = {
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
} as unknown as ParsedOfferCard;

const offerProperties = {
  ...mocData,
  isAuthenticated: false,
  setFavorite: jest.fn(),
  reviews: [{
    comment: `Beaut`,
    date: `2020-02-14T17:36:30.592Z`,
    id: `1`,
    rating: `60%`,
    user: {
      personPhoto: `https://htmlacademy-react-3.appspot.com/six-cities/static/avatar/5.jpg`,
      personName: `Corey`,
      id: 14,
      isPro: true,
    }
  }],
  offersList: [mocData]
};

it(`<OfferPropperty /> should render place-card.`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer
    .create(
        <Provider store={store}>
          <Router>
            <OfferPropperty {...offerProperties} setFavorite={jest.fn()} />
          </Router>
        </Provider>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
