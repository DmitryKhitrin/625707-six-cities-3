import {offersReducer} from "./offer-reducer.js";
import {GET_OFFERS, GET_LOCATIONS, SET_CITY} from "./actions/types.js";

const mocData = {
  city: `Hamburg`,
  location: [],
  offers: [
    {
      id: `1`,
      priceValue: 170,
      placeCardImage: `img/apartment-01.jpg`,
      starsRating: `93%`,
      roomType: `Apartment`,
      isPremium: true,
      cardName: `Beautiful & luxurious apartment at great location`,
      coords: [52.3909553943508, 4.85309666406198]
    },
    {
      id: `2`,
      priceValue: 130,
      placeCardImage: `img/room.jpg`,
      starsRating: `80%`,
      roomType: `Private room`,
      isPremium: false,
      cardName: `Wood and stone place`,
      coords: [52.369553943508, 4.85309666406198]
    }
  ]
};

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

describe(`offerReducer`, () => {
  it(`Should get offers list.`, () => {
    const state = offersReducer(
        {},
        {type: GET_OFFERS, payload: mocData}
    );
    expect(state).toEqual({ city: mocData.city, offers: mocData.offers });
  });

  it(`should get loactions.`, () => {
    const state = offersReducer(
        {},
        {type: GET_LOCATIONS, payload: locations}
    );
    expect(state).toEqual({locations});
  });

  it(`should set city.`, () => {
    const state = offersReducer(
        {},
        {type: SET_CITY, payload: `Moscow`}
    );
    expect(state).toEqual({city: `Moscow`});
  });
});

