import {offersReducer} from "./offer-reducer.js";
import {SET_CITY, UPDATE_OFFERS_INFO, SET_FAVORITE, SET_OFFERS} from "./types.js";

describe(`offerReducer`, () => {
  it(`should SET_CITY.`, () => {
    const state = offersReducer({}, {type: SET_CITY, payload: `Moscow`});
    expect(state).toEqual({city: `Moscow`});
  });

  it(`should UPDATE_OFFERS_INFO.`, () => {
    const state = offersReducer(
        {},
        {type: UPDATE_OFFERS_INFO, payload: {
          offers: [1, 2, 3],
        }}
    );
    expect(state).toEqual({offers: [1, 2, 3]});
  });

  it(`should SET_FAVORITE.`, () => {
    const state = offersReducer(
        {},
        {
          type: SET_FAVORITE,
          payload: {
            favorites: [1, 2, 3]
          }
        }
    );
    expect(state).toEqual({favorites: [1, 2, 3]});
  });

  it(`should SET_OFFERS.`, () => {
    const state = offersReducer(
        {},
        {
          type: SET_OFFERS,
          payload: {
            locations: [`Moscow`, `Paris`],
            offers: [1, 2, 3]
          }
        }
    );
    expect(state).toEqual({
      locations: [`Moscow`, `Paris`],
      offers: [1, 2, 3]
    });
  });
});
