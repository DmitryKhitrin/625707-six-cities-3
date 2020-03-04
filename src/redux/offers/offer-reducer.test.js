import {offersReducer} from "./offer-reducer.js";
import {SET_CITY} from "./types.js";

describe(`offerReducer`, () => {
  it(`should set city.`, () => {
    const state = offersReducer({}, {type: SET_CITY, payload: `Moscow`});
    expect(state).toEqual({city: `Moscow`});
  });
});
