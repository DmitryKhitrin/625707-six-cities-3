import {locations} from "./mocks/locations.js";
import {offers} from "./mocks/offers.js";

export const getLocationsList = () => {
  return [...locations];
};

export const getOffersList = (city) => {
  return offers.find((item) => item.city === city).offers;
};
