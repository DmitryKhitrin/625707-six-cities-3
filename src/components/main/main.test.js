import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import Main from "./main.jsx";
import {Map} from "../map/map";
import {store} from "../../mocks/mocked-store.js";

const mocData = [
  {
    id: `1`,
    price: 1,
    previewImage: `img/apartment-01.jpg`,
    rating: `25%`,
    type: `Apartment`,
    isPremium: true,
    title: `Just Flat.`,
    location: [49, 52]
  },
  {
    id: `2`,
    price: 20,
    previewImage: `img/room.jpg`,
    rating: `50%`,
    type: `Just Flat`,
    isPremium: false,
    title: `Just plane text.`,
    location: [49, 52]
  },
  {
    id: `3`,
    price: 100,
    previewImage: `img/apartment-02.jpg`,
    rating: `100%`,
    type: `Private room`,
    isPremium: true,
    title: `Best place in the World really.Beautiful luxurious apartment at great location`,
    location: [49, 52]
  }
];

describe(`Main`, () => {
  it(`<Main /> should render main.`, () => {
    const onHeaderClick = () => {};
    Map.prototype.componentDidMount = jest.fn();
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <Main
                placeCardsList={mocData}
                onHeaderClick={onHeaderClick}
                setCity={jest.fn()}
                city={`Dusseldorf`}
                activeItem={``}
                setActiveItem={jest.fn()}
                removeActiveItem={jest.fn()}
                setSortType={jest.fn()}
                sortType={``}
                toggleSortMenu={jest.fn()}
                isMenuOpen={false}
                loadOffers={jest.fn()}
                setFavorite={jest.fn()}
                locations={[
                  {id: `1`, name: `Dusseldorf`, location: [51.22172, 6.77616]}
                ]}
              />
            </Router>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

