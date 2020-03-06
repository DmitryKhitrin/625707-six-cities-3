import {SET_CITY, SET_OFFERS, UPDATE_OFFERS_INFO} from "./types.js";
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

export const redirect = (error) => {
  if (error.response) {
    if (error.response.status === 401) {
      history.push(`/login`);
    }
  }
};


export const updateOffer = (newOffer, offers) => {
  const insertIndex = offers.find((item) => item.id === newOffer.id);
  const newOffers = offers
    .slice(0, insertIndex)
    .concat(newOffer, offers.slice(insertIndex));
  return {
    type: UPDATE_OFFERS_INFO,
    payload: {offers: newOffers},
  };
};

export const setFavorite = (hotelId, status) => (
    dispatch,
    getState,
    api
) => {
  const offers = getState().offers;
  return api
           .post(`/favorite/${hotelId}/${status}`)
           .then((response) => {
             // eslint-disable-next-line no-console
             console.log(response);
             if (response.data) {
               dispatch(updateOffer(response.data, offers));
             }
           })
           .catch((error) => {
             redirect(error);
           });
};
