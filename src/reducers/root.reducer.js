import {combineReducers} from "redux";
import {offersReducer} from "./location.reducer.js";

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer
  });
