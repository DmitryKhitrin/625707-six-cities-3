import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {App} from "./app.jsx";
import {Map} from "../map/map.jsx";
import {store} from "../../mocks/mocked-store.js";


const offerPropperties = {
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
  reviews: [
    {
      id: `1`,
      reviewsDate: `April 2019`,
      reviewsText: `A quiet cozy and picturesque that hides behind a a river by the unique lightness of Amsterdam. The building is green and from 18th century.`,
      reviewsRating: `80%`,
      reviewsUserName: `Max`,
      reviewsAvatar: `img/avatar-max.jpg`
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
      location: [52.369553943508, 4.939309666406197]
    },
  ]
};

describe(`App`, () => {
  it(`<App /> should render app.`, () => {
    Map.prototype.componentDidMount = jest.fn();
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router>
                <App isAuthenticated={false} offerPropperties={offerPropperties} />
              </Router>
            </Provider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
