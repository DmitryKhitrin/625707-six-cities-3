import {SET_COMMENTS} from "./types.js";
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


export const getCommentsAcyns = (hotelId) => (dispatch, getState, api) => {
  return api
           .get(request.comments.get(hotelId))
           .then((response) => {
             if (response && response.data) {
               dispatch(setComments(response.data));
             }
           })
           .catch(() => {});
};
