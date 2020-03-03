import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Main from "./main.jsx";

Enzyme.configure({
  adapter: new Adapter(),
});

describe(`<Main /> tests.`, () => {
  it(`Should <h> click two times`, () => {
    const onHeaderClick = jest.fn();

    const mocData = [
      {
        id: `1`,
        price: 20,
        previewImage: `img/room.jpg`,
        rating: `50%`,
        type: `Just Flat`,
        isPremium: false,
        title: `Just plane text.`,
        location: [49, 52]
      }
    ];
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
      }
    ];

    const main = shallow(
        <Main
          placeCardsList={mocData}
          onHeaderClick={onHeaderClick}
          locations={locations}
          setCity={jest.fn()}
          city={`Paris`}
          activeItem={``}
          setActiveItem={jest.fn()}
          removeActiveItem={jest.fn()}
          setSortType={jest.fn()}
          sortType={``}
          toggleSortMenu={jest.fn()}
          isMenuOpen={false}
          loadOffers={jest.fn()}
        />
    );

    const mainH1 = main.find(`h1`);
    const mainH2 = main.find(`h2`);
    mainH1.props().onClick();
    mainH2.props().onClick();

    expect(onHeaderClick.mock.calls.length).toBe(2);
  });


});


