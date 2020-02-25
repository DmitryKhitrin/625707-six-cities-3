import {locations} from "./mocks/locations.js";
import {offers} from "./mocks/offers.js";
import {sortTypes} from "./sortTypes.js";

export const getLocationsList = () => {
  return [...locations];
};

export const getOffersList = (city) => {
  return offers.find((item) => item.city === city).offers;
};

const rateToNumber = (rate) => (Number(rate.replace(`%`, ``)));

export const sortOffers = (type, offersList) => {
  switch (type) {
    case sortTypes.LOW_TO_HIGHT:
      return [...offersList].sort((a, b) => a.priceValue - b.priceValue);
    case sortTypes.HIGHT_TO_LOW:
      return [...offersList].sort((a, b) => b.priceValue - a.priceValue);
    case sortTypes.TOP_RATED:
      return [...offersList].sort(
          (a, b) => rateToNumber(b.starsRating) - rateToNumber(a.starsRating)
      );
    default:
      return [...offersList];
  }
};
