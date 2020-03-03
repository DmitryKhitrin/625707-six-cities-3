import React from "react";
import renderer from "react-test-renderer";
import {CityTab} from "./city-tab.jsx";
it(`<CityTab /> should render CityTab.`, () => {

  const tree = renderer
    .create(
        <CityTab
          cityName={`Moscow`}
          setCity={jest.fn()}
          isActive={false}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
