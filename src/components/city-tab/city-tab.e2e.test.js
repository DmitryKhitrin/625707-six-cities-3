import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {CityTab} from "./city-tab.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`<PlaceCard /> tests.`, () => {
  it(`CityTab should action setCity onClick.`, () => {
    const setCity = jest.fn();

    const cityTab = shallow(
        <CityTab setCity={setCity} cityName={`Moscow`} isActive={false}/>
    );

    const tab = cityTab.find(`.locations__item`);
    tab.simulate(`click`);

    expect(setCity.mock.calls.length).toBe(1);
  });
});
