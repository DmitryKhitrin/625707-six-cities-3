import { GET_OFFERS, GET_LOCATIONS, SET_CITY } from "./types";

import { getLocationsList, getOffersList } from "../../utils.js";

export const getLocations = () => {
  const locations = getLocationsList();
  return {
    type: GET_LOCATIONS,
    payload: locations
  };
};

export const getOffers = (city) => {
  const offers = getOffersList(city);
  return {
    type: GET_OFFERS,
    payload: { city, offers }
  };
};

export const setCity = (city) => {
  return {
    type: SET_CITY,
    payload: city,
  };
};
