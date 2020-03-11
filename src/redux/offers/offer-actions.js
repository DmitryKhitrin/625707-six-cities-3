import {SET_CITY, SET_OFFERS, UPDATE_OFFERS_INFO} from "./types.js";
import {request} from "../../api/config.js";
import {offersSelector} from "./offer-selectors.js";

import {parseCities, parseOffer} from "../../utils.js";

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
  const offers = hotels.map(parseOffer);
  return {
    type: SET_OFFERS,
    payload: {locations, offers}
  };
};

export const updateOffer = (newOffer, oldOffers) => {
  const parsedNewOffer = parseOffer(newOffer);
  const insertIndex = oldOffers.findIndex(
      (item) => item.id === parsedNewOffer.id
  );
  if (insertIndex !== -1) {
    const newOffers = oldOffers
      .slice(0, insertIndex)
      .concat(parsedNewOffer, oldOffers.slice(insertIndex + 1));
    return {
      type: UPDATE_OFFERS_INFO,
      payload: {offers: newOffers}
    };
  }
  return {
    type: UPDATE_OFFERS_INFO,
    payload: {offers: oldOffers}
  };
};

export const setFavorite = (hotelId, status) => (
    dispatch,
    getState,
    api
) => {
  const offersList = offersSelector(getState());
  return api
           .post(`/favorite/${hotelId}/${status}`)
           .then((response) => {
             // eslint-disable-next-line no-console
             console.log(response);
             if (response.data) {
               dispatch(updateOffer(response.data, offersList));
             }
           })
           .catch(() => {
           });
};
