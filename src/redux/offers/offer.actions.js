import {SET_CITY, SET_OFFERS} from "./types.js";
import {request} from "../../api/config.js";

import {
  parseCities,
  parseOffers
} from "../../utils.js";

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const loadOffers = () => (dispatch, getState, api) => {
  return api
    .get(request.hotels.get())
    .then((response) => {
      dispatch(setOffers(response.data));
    })
    .catch(() => {});
};

export const setOffers = (hotels) => {
  const locations = parseCities(hotels);
  const offers = parseOffers(hotels);
  return {
    type: SET_OFFERS,
    payload: {locations, offers}
  };
};
