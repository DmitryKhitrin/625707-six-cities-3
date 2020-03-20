import {
  SET_CITY,
  SET_OFFERS,
  UPDATE_OFFERS_INFO,
  SET_FAVORITE,
} from "./types";
import {OfferAction} from "./offer-actions";
import {ParsedOfferCard, FavoriteMap, ParsedCity} from "../../utils/utils";

export type OfferState = {
  locations: ParsedCity[];
  city: string;
  offers: ParsedOfferCard[];
  favorites: FavoriteMap;
};

const initialState: OfferState = {
  locations: [],
  city: `Hamburg`,
  offers: [],
  favorites: {}
};

export const offersReducer = (state = initialState, action: OfferAction) => {
  switch (action.type) {
    case SET_OFFERS:
      return {
        ...state,
        locations: action.payload.locations,
        offers: action.payload.offers
      };

    case SET_CITY:
      return {
        ...state,
        city: action.payload
      };

    case UPDATE_OFFERS_INFO:
      return {
        ...state,
        offers: action.payload.offers
      };

    case SET_FAVORITE:
      return {
        ...state,
        favorites: action.payload.favorites
      };

    default:
      return state;
  }
};
