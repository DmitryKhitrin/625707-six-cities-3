import {
  SET_CITY,
  SET_OFFERS
} from "./types.js";

const initialState = {
  locations: [],
  city: `Paris`,
  offers: [],
};

export const offersReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_OFFERS:
      return {
        ...state,
        locations: payload.locations,
        offers: payload.offers,
      };

    case SET_CITY:
      return {
        ...state,
        city: payload
      };

    default:
      return initialState;
  }
};
