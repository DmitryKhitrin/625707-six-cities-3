import React from "react";
import renderer from "react-test-renderer";
import {ReviewsList} from "./reviews-list.jsx";

export const mocData = {
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
    {
      id: `3`,
      price: 132,
      previewImage: `img/apartment-02.jpg`,
      rating: `80%`,
      type: `Apartment`,
      isPremium: false,
      title: `Canal View Prinsengracht`,
      location: [52.3909553943508, 4.929309666406198]
    },
    {
      id: `4`,
      price: 180,
      previewImage: `img/apartment-03.jpg`,
      rating: `100%`,
      type: `Apartment`,
      isPremium: true,
      title: `Nice, cozy, warm big bed apartment`,
      location: [52.3809553943508, 4.939309666406198]
    }
  ]
};

it(`<ReviewsList /> should render ReviewsList.`, () => {
  const tree = renderer.create(<ReviewsList {...mocData} />).toJSON();
  expect(tree).toMatchSnapshot();
});
