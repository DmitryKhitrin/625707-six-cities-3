import {SET_COMMENTS, START_REVIEW_SENDING, FINISH_REVIEW_SENDING} from "./types.js";

const initialState = {
  comments: [],
  isFormSending: false,
};

export const commentsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: payload.comments
      };
    case START_REVIEW_SENDING:
      return {
        ...state,
        isFormSending: true
      };

    case FINISH_REVIEW_SENDING:
      return {
        ...state,
        isFormSending: false
      };

    default:
      return state;
  }
};
