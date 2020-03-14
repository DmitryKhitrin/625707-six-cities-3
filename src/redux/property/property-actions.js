import {
  SET_COMMENTS,
  START_REVIEW_SENDING,
  FINISH_REVIEW_SENDING,
  SET_NEARBY,
  SET_CHOOSED,
} from './types.js';
import {request} from "../../api/config.js";
import {parseComment, parseOffer} from '../../utils.js';

const setComments = (comments) => {
  const parsedComments = comments.map(parseComment);
  return {
    type: SET_COMMENTS,
    payload: {
      comments: parsedComments
    }
  };
};

const setStartReviewSending = () => {
  return {
    type: START_REVIEW_SENDING
  };
};

const setFinishReviewSending = () => {
  return {
    type: FINISH_REVIEW_SENDING
  };
};


const setNearby = (nearby) => {
  const parsedNearby = nearby.map(parseOffer);
  return {
    type: SET_NEARBY,
    payload: {
      nearby: parsedNearby,
    },
  };
};

const setChoosed = (id, offers) => {
  const choosedOffer = offers.find((item) => item.id === Number(id));
  const parsedOffer = choosedOffer ? parseOffer(choosedOffer) : {};
  return {
    type: SET_CHOOSED,
    payload: {
      choosed: parsedOffer,
    },
  };
};

export const getChoosedOfferAsync = (id) => (dispatch, _getState, api) => {
  return api
      .get(request.hotels.get())
      .then((response) => {
        dispatch(setChoosed(id, response.data));
      })
      .catch(() => {});
};

export const getCommentsAcync = (hotelId) => (dispatch, getState, api) => {
  return api
           .get(request.comments.get(hotelId))
           .then((response) => {
             if (response && response.data) {
               dispatch(setComments(response.data));
             }
           })
           .catch(() => {});
};

export const sendCommentAsync = (hotelId, rating, comment) => (
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

export const getNearbyAsync = (hotelId) => (dispatch, getState, api) => {
  return api
        .get(request.nearby.get(hotelId))
        .then((response) => {
          if (response.data) {
            dispatch(setNearby(response.data));
          }
        })
        .catch(() => {});
};
