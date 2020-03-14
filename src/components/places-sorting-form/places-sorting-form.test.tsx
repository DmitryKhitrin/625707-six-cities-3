import React from "react";
import renderer from "react-test-renderer";
import {PlacesSortingForm} from "./places-sorting-form";

describe(`<PlacesSortingForm /> should render PlacesSortingForm.`, () => {
  it(`<PlacesSortingForm /> should render PlacesSortingForm with opened menu.`, () => {
    const tree = renderer
      .create(
          <PlacesSortingForm
            setSortType={jest.fn()}
            sortType={``}
            isMenuOpen={true}
            toggleSortMenu={jest.fn()}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<PlacesSortingForm /> should render PlacesSortingForm with closed menu.`, () => {
    const tree = renderer
      .create(
          <PlacesSortingForm
            setSortType={jest.fn()}
            sortType={``}
            isMenuOpen={false}
            toggleSortMenu={jest.fn()}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
