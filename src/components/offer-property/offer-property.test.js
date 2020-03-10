import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import {OfferPropperty} from "./offer-property.jsx";
import {Map} from "../map/map.jsx";

import {store} from "../../mocks/mocked-store.js";

const offerProperties = {
  placePhotosList: [],
  offerHeader: `Test header`,
  descriptions: [`This is kind of nice place.`],
  isPremium: true,
  placeType: `Apartment`,
  rating: `90`,
  bedroomsCount: `10`,
  maxPeopleCount: 100,
  price: 500,
  amenitiesList: [],
  host: {
    personPhoto: ``,
    personName: ``,
  },
  reviews: [
    {
      id: `1`,
      date: `April 2019`,
      comment: `A quiet cozy and picturesque that The building is green and from 18th century.`,
      rating: `80%`,
      personName: `Max`,
      personPhoto: `img/avatar-max.jpg`
    }
  ],
  offersList: [
    {
      id: `5`,
      price: 80,
      previewImage: `img/apartment-01.jpg`,
      rating: `80%`,
      type: `Apartment`,
      isPremium: true,
      title: `Wood and stone place`,
      location: [52.369553943508, 4.939309666406197],
      offerCity: {
        name: `Moscow`,
        location: [52.3809553943508, 4.939309666406198]
      }
    },
    {
      id: `3`,
      price: 132,
      previewImage: `img/apartment-02.jpg`,
      rating: `80%`,
      type: `Apartment`,
      isPremium: false,
      title: `Canal View Prinsengracht`,
      location: [52.3809553943508, 4.939309666406198],
      offerCity: {
        name: `Moscow`,
        location: [52.3809553943508, 4.939309666406198]
      },
    },
    {
      id: `4`,
      price: 180,
      previewImage: `img/apartment-03.jpg`,
      rating: `100%`,
      type: `Apartment`,
      isPremium: true,
      title: `Nice, cozy, warm big bed apartment`,
      location: [52.3809553943508, 4.939309666406198],
      offerCity: {
        name: `Moscow`,
        location: [52.3809553943508, 4.939309666406198]
      }
    }
  ]
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
