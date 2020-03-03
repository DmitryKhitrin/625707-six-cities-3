import {combineReducers} from "redux";
import {offersReducer} from "./offers/offer-reducer.js";

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer
  });
