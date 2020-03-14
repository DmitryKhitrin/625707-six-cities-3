import {LOG_IN, LOG_OUT, SET_AUTH_ERROR} from "./types.js";
import {ParsedLoginParams, UserAction} from "./user-actions";

export type UserState = {
  authorizationStatus: `NO_AUTH` | `AUTH`;
  user: ParsedLoginParams;
  error: string;
}

const initialState: UserState = {
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

export const userReducer = (state = initialState, action: UserAction) => {
  switch (action.type) {
    case LOG_IN:
      const {
        id,
        email,
        name,
        avatar,
        isPro
      } = action.payload;
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
        error: action.payload.error,
      };

    default:
      return state;
  }
};
