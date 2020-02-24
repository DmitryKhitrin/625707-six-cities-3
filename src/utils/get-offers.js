
import offers from "../mocks/offers";

export const getOffers = (city) => {
  return offers.find((item) => item.city === city).offers;
};
