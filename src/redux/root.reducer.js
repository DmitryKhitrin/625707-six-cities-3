import {combineReducers} from "redux";
import {offersReducer} from "./offers/offer-reducer.js";
import {userReducer} from "./user/user-reducer.js";
import {commentsReducer} from "./comments/comments-reducer.js";

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer,
    user: userReducer,
    comments: commentsReducer,
  });
