import {createSelector} from "reselect";
import {RootState} from "../root-reducer";

export const locationsSelector = (state: RootState) => state.offer.locations;
export const citySelector = (state: RootState) => state.offer.city;
export const offersSelector = (state: RootState) => state.offer.offers;

export const offersInCitySelector = createSelector(
    citySelector,
    offersSelector,
    (city, offers) => offers.filter((card) => card.city.name === city)
);
