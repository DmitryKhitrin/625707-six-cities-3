import * as types from "../actions/types.js";

const initialState = {
  locations: [],
  city: `Amsterdam`,
  offers: []
};

export const offersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case types.GET_OFFERS:
      return {
        ...state,
        city: payload.city,
        offers: payload.offers
      };

    case types.GET_LOCATIONS:
      return {
        ...state,
        locations: payload
      };

    default:
      return state;
  }
}
