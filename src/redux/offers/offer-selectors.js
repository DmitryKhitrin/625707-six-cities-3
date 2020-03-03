import {createSelector} from "reselect";

export const locationsSelector = (state) => state.locations;
export const citySelector = (state) => state.city;
export const offersSelector = (state) => state.offers;

export const offersInCitySelector = createSelector(
    citySelector,
    offersSelector,
    (city, offers) => offers.filter((card) => card.city === city)
);
