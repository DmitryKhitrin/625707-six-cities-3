import {combineReducers} from "redux";
import {offersReducer} from "./reducer.js";

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer
  });
