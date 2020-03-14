import {propertyReducer, PropertyState} from './property-reducer';
import {ParsedOfferCard, ParsedComment} from '../../utils/utils';
import {SET_COMMENTS} from "./types";

describe(`choosedReducer`, () => {
  it(`should SET_COMMENTS.`, () => {
    const state = propertyReducer(
        {} as PropertyState,
        {
          type: SET_COMMENTS,
          payload: {
            comments: [{
              comment: ``,
              date: ``,
              id: ``,
              rating: ``,
              user: {
                personPhoto: ``,
                personName: ``,
                id: 1,
                isPro: false,
              },
            }],
          },
        },
    );
    expect(state).toEqual({comments: [{
      comment: ``,
      date: ``,
      id: ``,
      rating: ``,
      user: {
        personPhoto: ``,
        personName: ``,
        id: 1,
        isPro: false,
      },
    }]});
  });
});
