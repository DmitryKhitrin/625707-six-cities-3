import {createSelector} from "reselect";

export const locationsSelector = (state) => state.offer.locations;
export const citySelector = (state) => state.offer.city;
export const offersSelector = (state) => state.offer.offers;

export const offersInCitySelector = createSelector(
    citySelector,
    offersSelector,
    (city, offers) => offers.filter((card) => card.city === city)
);
