import {GET_OFFERS, GET_LOCATIONS} from "./types";

import {getLocationsList, getOffersList} from "../../helpers";

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
    payload: {city, offers}
  };
};
