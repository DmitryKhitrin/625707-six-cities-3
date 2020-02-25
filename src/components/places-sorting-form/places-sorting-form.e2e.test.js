import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlacesSortingForm} from "./places-sorting-form.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`<PlacesSortingForm /> tests.`, () => {
  it(`Should sort span click one time`, () => {
    const toggleSortMenu = jest.fn();

    const placesSortingForm = shallow(
        <PlacesSortingForm
          setSortType={jest.fn()}
          sortType={``}
          isMenuOpen={false}
          toggleSortMenu={toggleSortMenu}
        />
    );

    const list = placesSortingForm.find(`.places__sorting-type`);
    list.simulate(`click`);
    expect(toggleSortMenu.mock.calls.length).toBe(1);
  });

  it(`Should sort item click four times`, () => {
    const setSortType = jest.fn();

    const placesSortingForm = shallow(
        <PlacesSortingForm
          setSortType={setSortType}
          sortType={``}
          isMenuOpen={false}
          toggleSortMenu={jest.fn()}
        />
    );

    const list = placesSortingForm.find(`.places__option`);
    list.forEach((item) => item.simulate(`click`));
    expect(setSortType.mock.calls.length).toBe(4);
  });
});
