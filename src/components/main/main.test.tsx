import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {TestMain} from "./main";
import {Map} from "../map/map";
import {store} from "../../mocks/mocked-store";
import {ParsedOfferCard, ParsedCity} from "../../utils/utils";

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
] as unknown as ParsedOfferCard[];

const mocLocations = [
  {id: `1`, name: `Dusseldorf`, location: [51.22172, 6.77616]}
] as unknown as ParsedCity[];

describe(`Main`, () => {
  it(`<Main /> should render main.`, () => {
    const onHeaderClick = () => {};
    Map.prototype.componentDidMount = jest.fn();
    const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <TestMain
                placeCardsList={mocData}
                setCity={jest.fn()}
                city={`Dusseldorf`}
                activeItem={``}
                setActiveItem={jest.fn()}
                removeActiveItem={jest.fn()}
                onSetSortType={jest.fn()}
                sortType={``}
                onToggleSortMenu={jest.fn()}
                isMenuOpen={false}
                setFavorite={jest.fn()}
                locations={mocLocations}
                isAuthenticated={false}
              />
            </Router>
          </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

