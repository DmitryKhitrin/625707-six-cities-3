import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card.jsx";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`<PlaceCard /> tests.`, () => {
  it(`PlaceCard should run onMouseEnter onHover.`, () => {
    const onMouseEnter = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          id={`1`}
          priceValue={20}
          placeCardImage={`img/room.jpg`}
          starsRating={`50%`}
          roomType={`Just Flat`}
          isPremium={false}
          cardName={`Just plane text.`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => {}}
          onHeaderClick={() => {}}
        />
    );

    const card = placeCard.find(`.place-card`);
    card.simulate(`mouseEnter`);

    expect(onMouseEnter.mock.calls.length).toBe(1);
  });
});
