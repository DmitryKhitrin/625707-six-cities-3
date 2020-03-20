import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlacesSortingForm} from "./places-sorting-form";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`<PlacesSortingForm /> tests.`, () => {
  it(`Should sort span click one time`, () => {
    const onToggleSortMenu = jest.fn();

    const placesSortingForm = shallow(
        <PlacesSortingForm
          onSetSortType={jest.fn()}
          sortType={``}
          isMenuOpen={false}
          onToggleSortMenu={onToggleSortMenu}
        />
    );

    const list = placesSortingForm.find(`.places__sorting-type`);
    list.simulate(`click`);
    expect(onToggleSortMenu.mock.calls.length).toBe(1);
  });

  it(`Should sort item click four times`, () => {
    const onSetSortType = jest.fn();

    const placesSortingForm = shallow(
        <PlacesSortingForm
          onSetSortType={onSetSortType}
          sortType={``}
          isMenuOpen={false}
          onToggleSortMenu={jest.fn()}
        />
    );

    const list = placesSortingForm.find(`.places__option`);
    list.forEach((item) => item.simulate(`click`));
    expect(onSetSortType.mock.calls.length).toBe(4);
  });
});
