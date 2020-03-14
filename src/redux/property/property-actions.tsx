import {
  SET_COMMENTS,
  START_REVIEW_SENDING,
  FINISH_REVIEW_SENDING,
  SET_NEARBY,
  SET_CHOOSED,
} from './types';
import {request} from "../../api/config";
import {parseComment, parseOffer, ParsedOfferCard, Comment, ParsedComment, OfferCard} from '../../utils/utils';
import {ThunkAction} from "../../utils/types";
import {Action} from "redux";
import {RootState} from "../root-reducer";

type SetComment = {
  type: typeof SET_COMMENTS;
  payload: {
    comments: ParsedComment[]
  }
}

const setComments = (comments: Comment[]): SetComment => {
  const parsedComments = comments.map(parseComment);
  return {
    type: SET_COMMENTS,
    payload: {
      comments: parsedComments
    }
  };
};

type SetStartReviewSending = {
  type: typeof START_REVIEW_SENDING;
}

const setStartReviewSending = (): SetStartReviewSending => {
  return {
    type: START_REVIEW_SENDING
  };
};

type SetFinishReviewSending = {
  type: typeof FINISH_REVIEW_SENDING
}

const setFinishReviewSending = (): SetFinishReviewSending => {
  return {
    type: FINISH_REVIEW_SENDING
  };
};

type SetNearby = {
  type: typeof SET_NEARBY;
  payload: {
    nearby: ParsedOfferCard[]
  }
}

const setNearby = (nearby: OfferCard[]): SetNearby => {
  const parsedNearby = nearby.map(parseOffer);
  return {
    type: SET_NEARBY,
    payload: {
      nearby: parsedNearby,
    },
  };
};

type SetChoosed = {
  type: typeof SET_CHOOSED;
  payload: {
    choosed: ParsedOfferCard | {}
  }
}

const setChoosed = (id: string, offers: OfferCard[]): SetChoosed => {
  const choosedOffer = offers.find((item) => item.id === Number(id));
  const parsedOffer = choosedOffer ? parseOffer(choosedOffer) : {};
  return {
    type: SET_CHOOSED,
    payload: {
      choosed: parsedOffer,
    },
  };
};

export const getChoosedOfferAsync = (id: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState, api) => {
  return api
      .get(request.hotels.get())
      .then((response) => {
        dispatch(setChoosed(id, response.data));
      })
      .catch(() => {});
};

export const getCommentsAcync = (hotelId: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState, api) => {
  return api
           .get(request.comments.get(hotelId))
           .then((response) => {
             if (response && response.data) {
               dispatch(setComments(response.data));
             }
           })
           .catch(() => {});
};

export const sendCommentAsync = (hotelId: string, rating: number, comment: string): ThunkAction<void, RootState, unknown, Action<string>> => (
    dispatch,
    getState,
    api
) => {
  dispatch(setStartReviewSending);
  return api
    .post(request.comments.post(hotelId), {rating, comment})
    .then((response) => {
      if (response.data) {
        dispatch(setComments(response.data));
        dispatch(setFinishReviewSending());
      }
    })
    .catch(() => {
      dispatch(setFinishReviewSending());
    });
};

export const getNearbyAsync = (hotelId: string): ThunkAction<void, RootState, unknown, Action<string>> => (dispatch, getState, api) => {
  return api
        .get(request.nearby.get(hotelId))
        .then((response) => {
          if (response.data) {
            dispatch(setNearby(response.data));
          }
        })
        .catch(() => {});
};

export type PropertyAction = SetComment | SetStartReviewSending | SetFinishReviewSending | SetNearby | SetChoosed;
