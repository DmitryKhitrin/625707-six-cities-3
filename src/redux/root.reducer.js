import {combineReducers} from "redux";
import {offersReducer} from "./offer-reducer.js";

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer
  });
