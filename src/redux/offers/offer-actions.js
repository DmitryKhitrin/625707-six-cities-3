import {
  SET_CITY,
  SET_OFFERS,
  UPDATE_OFFERS_INFO,
  SET_FAVORITE,
} from "./types.js";
import {request} from "../../api/config.js";
import {offersSelector} from "./offer-selectors.js";

import {parseCities, parseOffer, parseFavorites} from "../../utils.js";

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

const updateFavorite = (favorites) => {
  const parsedFavorites = parseFavorites(favorites);
  return {
    type: SET_FAVORITE,
    payload: {
      favorites: parsedFavorites
    }
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
    .post(request.favorites.post(hotelId, status))
    .then((response) => {
      if (response.data) {
        dispatch(updateOffer(response.data, offersList));
      }
    })
    .catch(() => {});
};

export const getFavoriteAsync = () => (dispatch, _getState, api) => {
  return api
    .get(request.favorites.get())
    .then((response) => {
      if (response && response.data) {
        dispatch(updateFavorite(response.data));
      }
    })
    .catch(() => {});
};
