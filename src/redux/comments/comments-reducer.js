import {SET_COMMENTS} from "./types.js";

const initialState = {
  comments: [],
};

export const commentsReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: payload.comments
      };

    default:
      return state;
  }
};
