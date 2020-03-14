import React from "react";
import Enzyme, {shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {PlaceCard} from "./place-card";

Enzyme.configure({
  adapter: new Adapter()
});

describe(`<PlaceCard /> tests.`, () => {
  it(`PlaceCard should run onMouseEnter onHover.`, () => {
    const onMouseEnter = jest.fn();

    const placeCard = shallow(
        <PlaceCard
          id={`1`}
          price={20}
          previewImage={`img/room.jpg`}
          rating={`50%`}
          type={`Just Flat`}
          isPremium={false}
          title={`Just plane text.`}
          onMouseEnter={onMouseEnter}
          onMouseLeave={() => {}}
          isFavorite={false}
          setFavorite={() => {}}
        />
    );

    const card = placeCard.find(`.place-card`);
    card.simulate(`mouseEnter`);

    expect(onMouseEnter.mock.calls.length).toBe(1);
  });
});
