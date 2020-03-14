import {
  SET_COMMENTS,
  START_REVIEW_SENDING,
  FINISH_REVIEW_SENDING,
  SET_NEARBY,
  SET_CHOOSED,
} from './types.js';

const initialState = {
  comments: [],
  isFormSending: false,
  nearby: [],
  choosed: {},
};

export const propertyReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: payload.comments,
      };

    case SET_NEARBY:
      return {
        ...state,
        nearby: payload.nearby,
      };
    case START_REVIEW_SENDING:
      return {
        ...state,
        isFormSending: true,
      };

    case FINISH_REVIEW_SENDING:
      return {
        ...state,
        isFormSending: false,
      };

    case SET_CHOOSED:
      return {
        ...state,
        choosed: payload.choosed,
      };

    default:
      return state;
  }
};
