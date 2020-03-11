import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {PlaceCard} from "./place-card.jsx";

const mockedCard = {
  id: `1`,
  price: 100,
  previewImage: `img/apartment-02.jpg`,
  rating: `100%`,
  type: `Private room`,
  isPremium: true,
  title: `Best place in the World really.Beautiful luxurious apartment at great location`,
  onMouseLeave: () => {},
  onHeaderClick: () => {},
  onMouseEnter: () => {},
};

const onHeaderClick = () => {};

it(`<PlaceCard /> should render place-card.`, () => {
  const tree = renderer
    .create(<Router><PlaceCard {...mockedCard} onHeaderClick={onHeaderClick} /></Router>)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
