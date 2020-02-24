import {GET_OFFERS, GET_LOCATIONS, SET_CITY} from "./actions/types.js";

const initialState = {
  locations: [],
  city: `Amsterdam`,
  offers: []
};

export const offersReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case GET_OFFERS:
      return {
        ...state,
        city: payload.city,
        offers: payload.offers
      };

    case GET_LOCATIONS:
      return {
        ...state,
        locations: payload
      };

    case SET_CITY:
      return {
        ...state,
        city: payload,
      };

    default:
      return initialState;
  }
};
