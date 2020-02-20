import React from "react";
import renderer from "react-test-renderer";
import {OfferPropperty} from "./offer-property.jsx";
import {Map} from "../map/map.jsx";

const offerProperties = {
  placePhotosList: [],
  offerHeader: `Test header`,
  descriptions: [`This is kind of nice place.`],
  isPremium: true,
  placeType: `Apartment`,
  starsRating: `90`,
  bedroomsCount: `10`,
  maxPeopleCount: 100,
  price: 500,
  amenitiesList: [],
  reviews: [
    {
      id: `1`,
      reviewsDate: `April 2019`,
      reviewsText: `A quiet cozy and picturesque that The building is green and from 18th century.`,
      reviewsRating: `80%`,
      reviewsUserName: `Max`,
      reviewsAvatar: `img/avatar-max.jpg`
    }
  ],
  offersList: [
    {
      id: `5`,
      priceValue: 80,
      placeCardImage: `img/apartment-01.jpg`,
      starsRating: `80%`,
      roomType: `Apartment`,
      isPremium: true,
      cardName: `Wood and stone place`,
      coords: [52.369553943508, 4.939309666406197]
    },
    {
      id: `3`,
      priceValue: 132,
      placeCardImage: `img/apartment-02.jpg`,
      starsRating: `80%`,
      roomType: `Apartment`,
      isPremium: false,
      cardName: `Canal View Prinsengracht`,
      coords: [52.3909553943508, 4.929309666406198]
    },
    {
      id: `4`,
      priceValue: 180,
      placeCardImage: `img/apartment-03.jpg`,
      starsRating: `100%`,
      roomType: `Apartment`,
      isPremium: true,
      cardName: `Nice, cozy, warm big bed apartment`,
      coords: [52.3809553943508, 4.939309666406198]
    }
  ]
};

it(`<OfferPropperty /> should render place-card.`, () => {
  Map.prototype.componentDidMount = jest.fn();
  const tree = renderer
    .create(<OfferPropperty {...offerProperties} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
