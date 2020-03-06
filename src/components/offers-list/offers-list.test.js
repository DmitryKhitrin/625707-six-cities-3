import React from "react";
import renderer from "react-test-renderer";
import {OffersList} from "./offers-list.jsx";

const mocData = [
  {
    id: `1`,
    price: 1,
    previewImage: `img/apartment-01.jpg`,
    rating: `25%`,
    type: `Apartment`,
    isPremium: true,
    title: `Just Flat.`
  },
  {
    id: `2`,
    price: 20,
    previewImage: `img/room.jpg`,
    rating: `50%`,
    type: `Just Flat`,
    isPremium: false,
    title: `Just plane text.`
  },
  {
    id: `3`,
    price: 100,
    previewImage: `img/apartment-02.jpg`,
    rating: `100%`,
    type: `Private room`,
    isPremium: true,
    title: `Best place in the World really.Beautiful luxurious apartment at great location`
  }
];

const onHeaderClick = () => {};

it(`<OffersList /> should render OffersList.`, () => {
  const tree = renderer
    .create(
        <OffersList
          placeCardsList={mocData}
          onHeaderClick={onHeaderClick}
          onMouseEnter={jest.fn()}
          onMouseLeave={jest.fn()}
          setFavorite={jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
