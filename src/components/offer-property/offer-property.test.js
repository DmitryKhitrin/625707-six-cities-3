import React from "react";
import renderer from "react-test-renderer";
import {OfferPropperty} from "./offer-property.jsx";

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
  amenitiesList: []
};

it(`<OfferPropperty /> should render place-card.`, () => {
  const tree = renderer
    .create(<OfferPropperty {...offerProperties} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
