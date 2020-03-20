import React from "react";
import renderer from "react-test-renderer";
import {PlacesSortingForm} from "./places-sorting-form";

describe(`<PlacesSortingForm /> should render PlacesSortingForm.`, () => {
  it(`<PlacesSortingForm /> should render PlacesSortingForm with opened menu.`, () => {
    const tree = renderer
      .create(
          <PlacesSortingForm
            onSetSortType={jest.fn()}
            sortType={``}
            isMenuOpen={true}
            onToggleSortMenu={jest.fn()}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it(`<PlacesSortingForm /> should render PlacesSortingForm with closed menu.`, () => {
    const tree = renderer
      .create(
          <PlacesSortingForm
            onSetSortType={jest.fn()}
            sortType={``}
            isMenuOpen={false}
            onToggleSortMenu={jest.fn()}
          />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
