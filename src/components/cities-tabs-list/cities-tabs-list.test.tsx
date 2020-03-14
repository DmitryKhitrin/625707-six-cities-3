import React from "react";
import renderer from "react-test-renderer";
import {CitiesTabsList} from "./cities-tabs-list";
import {ParsedCity} from "../../utils/utils";

const locations = [
  {
    id: `1`,
    name: `Paris`,
    location: [48.864716, 2.349014]
  },
  {
    id: `2`,
    name: `Dusseldorf`,
    location: [51.22172, 6.77616]
  },
] as unknown as ParsedCity[];
it(`<CitiesTabsList /> should render CitiesTabsList.`, () => {
  const tree = renderer
    .create(
        <CitiesTabsList
          locations={locations}
          setCity={jest.fn()}
          activeCity={`Moscow`}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
