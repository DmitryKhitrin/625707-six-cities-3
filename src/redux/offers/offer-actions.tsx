import {Action} from "redux";
import {
  SET_CITY,
  SET_OFFERS,
  UPDATE_OFFERS_INFO,
  SET_FAVORITE,
} from "./types";
import {request} from "../../api/config";
import {offersSelector} from "./offer-selectors";
import {
  parseCities,
  parseOffer,
  parseFavorites,
  OfferCard,
  ParsedOfferCard,
  FavoriteMap,
  ParsedCity
} from "../../utils/utils";
import {ThunkAction} from "../../utils/types";
import {RootState} from "../root-reducer";

type SetCity = {
  type: typeof SET_CITY,
  payload: string;
}

export const setCity = (city: string): SetCity => {
  return {
    type: SET_CITY,
    payload: city,
  };
};

export const loadOffers = (): ThunkAction<
void,
RootState,
unknown,
Action<string>
> => (dispatch, getState, api) => {
  return api
    .get(request.hotels.get())
    .then((response) => {
      dispatch(setOffers(response.data));
    })
    .catch(() => {});
};

type SetOffers = {
  type: typeof SET_OFFERS;
  payload: {
    locations: ParsedCity[];
    offers: ParsedOfferCard[];
  }
}

export const setOffers = (hotels: OfferCard[]): SetOffers => {
  const locations = parseCities(hotels);
  const offers = hotels.map(parseOffer);
  return {
    type: SET_OFFERS,
    payload: {locations, offers}
  };
};

type UpdateFavorite = {
  type: typeof SET_FAVORITE;
  payload: {
      favorites: FavoriteMap

  }
}

const updateFavorite = (favorites: OfferCard[]): UpdateFavorite => {
  const parsedFavorites = parseFavorites(favorites);
  return {
    type: SET_FAVORITE,
    payload: {
      favorites: parsedFavorites
    }
  };
};

type UpdateOffer = {
  type: typeof UPDATE_OFFERS_INFO;
  payload: {
    offers: ParsedOfferCard[]
  }
}

export const updateOffer = (newOffer: OfferCard, oldOffers: ParsedOfferCard[]): UpdateOffer => {
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

export const setFavorite = (hotelId: string, status: number): ThunkAction<void, RootState, unknown, Action<string>> => (
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

export const getFavoriteAsync = (): ThunkAction<
void,
RootState,
unknown,
Action<string>
> => (dispatch, getState, api) => {
  return api
    .get(request.favorites.get())
    .then((response) => {
      if (response && response.data) {
        dispatch(updateFavorite(response.data));
      }
    })
    .catch(() => {});
};

export type OfferAction = SetCity | SetOffers | UpdateFavorite | UpdateOffer;
