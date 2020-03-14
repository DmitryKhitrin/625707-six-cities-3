import {userReducer, UserState} from "./user-reducer";
import {LOG_IN, LOG_OUT, SET_AUTH_ERROR} from "./types";

describe(`offerReducer`, () => {
  it(`should login.`, () => {
    const payload = {id: 1, email: ``, name: `Vasia`, avatar: `url`, isPro: false};
    const state = userReducer({} as UserState, {type: LOG_IN, payload});
    expect(state).toEqual({
      user: {
        ...payload
      },
      authorizationStatus: `AUTH`
    });
  });

  it(`should logout.`, () => {
    const logoutState = {
      authorizationStatus: `NO_AUTH`,
      user: {
        id: 2,
        email: ``,
        name: ``,
        avatar: ``,
        isPro: false
      },
      error: ``
    };
    const state = userReducer({} as UserState, {type: LOG_OUT, payload: `Moscow`});
    expect(state).toEqual(logoutState);
  });

  it(`should set autherror.`, () => {
    const state = userReducer({} as UserState, {type: SET_AUTH_ERROR, payload: {
      error: `Error`
    }});
    expect(state).toEqual({error: `Error`});
  });
});
