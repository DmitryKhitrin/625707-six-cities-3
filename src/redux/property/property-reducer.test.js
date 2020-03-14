import {propertyReducer} from './property-reducer.js';
import {SET_COMMENTS} from "./types.js";

describe(`choosedReducer`, () => {
  it(`should SET_COMMENTS.`, () => {
    const state = propertyReducer(
        {},
        {
          type: SET_COMMENTS,
          payload: {
            comments: [`Error`],
          },
        },
    );
    expect(state).toEqual({comments: [`Error`]});
  });
});
