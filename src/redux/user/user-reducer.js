import {LOG_IN, LOG_OUT, SET_AUTH_ERROR} from "./types.js";

const initialState = {
  authorizationStatus: `NO_AUTH`,
  user: {
    id: null,
    email: ``,
    name: ``,
    avatar: ``,
    isPro: false
  },
  error: ``,
};

export const userReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case LOG_IN:
      const {
        id,
        email,
        name,
        avatar,
        isPro
      } = payload;
      return {
        ...state,
        authorizationStatus: `AUTH`,
        user: {
          id,
          email,
          name,
          avatar,
          isPro
        }
      };

    case LOG_OUT:
      return {
        ...initialState,
      };

    case SET_AUTH_ERROR:
      return {
        ...state,
        error: payload.error,
      };

    default:
      return state;
  }
};
