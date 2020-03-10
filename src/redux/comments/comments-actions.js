import {
  SET_COMMENTS,
  START_REVIEW_SENDING,
  FINISH_REVIEW_SENDING
} from "./types.js";
import {request} from "../../api/config.js";
import {parseComment} from "../../utils.js";

const setComments = (comments) => {
  const parsedComments = comments.map(parseComment);
  return {
    type: SET_COMMENTS,
    payload: {
      comments: parsedComments
    }
  };
};

export const setStartReviewSending = () => {
  return {
    type: START_REVIEW_SENDING
  };
};

export const setFinishReviewSending = () => {
  return {
    type: FINISH_REVIEW_SENDING
  };
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
