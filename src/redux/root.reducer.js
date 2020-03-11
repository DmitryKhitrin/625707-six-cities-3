import {combineReducers} from "redux";
import {offersReducer} from "./offers/offer-reducer.js";
import {userReducer} from "./user/user-reducer.js";
import {choosedReducer} from './choosed/choosed-reducer.js';

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer,
    user: userReducer,
    choosed: choosedReducer,
  });
