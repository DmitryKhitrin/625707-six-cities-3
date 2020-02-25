import React from "react";
import renderer from "react-test-renderer";
import {CityTab} from "./city-tab.jsx";
it(`<CityTab /> should render CityTab.`, () => {

  const tree = renderer
    .create(
        <CityTab
          cityName={`Moscow`}
          setCity={jest.fn()}
          getOffers={jest.fn()}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});