import {
  SET_CITY,
  SET_OFFERS,
  UPDATE_OFFERS_INFO,
  SET_FAVORITE,
} from "./types.js";

const initialState = {
  locations: [],
  city: `Paris`,
  offers: [],
  favorites: {}
};

export const offersReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_OFFERS:
      return {
        ...state,
        locations: payload.locations,
        offers: payload.offers
      };

    case SET_CITY:
      return {
        ...state,
        city: payload
      };

    case UPDATE_OFFERS_INFO:
      return {
        ...state,
        offers: payload.offers
      };

    case SET_FAVORITE:
      return {
        ...state,
        favorites: payload.favorites
      };

    default:
      return initialState;
  }
};
