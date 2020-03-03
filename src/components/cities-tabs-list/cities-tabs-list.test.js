import React from "react";
import renderer from "react-test-renderer";
import {CitiesTabsList} from "./cities-tabs-list.jsx";

const locations = [
  {
    id: `1`,
    cityName: `Paris`,
    location: [48.864716, 2.349014]
  },
  {
    id: `2`,
    cityName: `Dusseldorf`,
    location: [51.22172, 6.77616]
  },
];
it(`<CitiesTabsList /> should render CitiesTabsList.`, () => {
  const tree = renderer
    .create(
        <CitiesTabsList
          locations={locations}
          setCity={jest.fn()}
          activeCity={'Moscow'}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
