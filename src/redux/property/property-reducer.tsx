import {
  SET_COMMENTS,
  START_REVIEW_SENDING,
  FINISH_REVIEW_SENDING,
  SET_NEARBY,
  SET_CHOOSED,
} from './types';
import {PropertyAction} from "./property-actions";
import {ParsedOfferCard, ParsedComment} from '../../utils/utils';

export type PropertyState = {
  comments: ParsedComment[];
  isFormSending: boolean;
  nearby: ParsedOfferCard[];
  choosed: ParsedOfferCard | {};
}

const initialState: PropertyState = {
  comments: [],
  isFormSending: false,
  nearby: [],
  choosed: {},
};

export const propertyReducer = (state = initialState, action: PropertyAction) => {
  switch (action.type) {
    case SET_COMMENTS:
      return {
        ...state,
        comments: action.payload.comments,
      };

    case SET_NEARBY:
      return {
        ...state,
        nearby: action.payload.nearby,
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
        choosed: action.payload.choosed,
      };

    default:
      return state;
  }
};
