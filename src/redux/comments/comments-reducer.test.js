import {commentsReducer} from "./comments-reducer.js";
import {SET_COMMENTS} from "./types.js";

describe(`commentsReducer`, () => {
  it(`should SET_COMMENTS.`, () => {
    const state = commentsReducer(
        {},
        {
          type: SET_COMMENTS,
          payload: {
            comments: [`Error`]
          }
        }
    );
    expect(state).toEqual({comments: [`Error`]});
  });
});
