import {combineReducers} from "redux";
import {offersReducer} from "./offers/offer-reducer.js";
import {userReducer, UserState} from "./user/user-reducer";
import {propertyReducer} from './property/property-reducer.js';

export type RootState = {
  offer: OfferState
  user: UserState
}

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer,
    user: userReducer,
    property: propertyReducer,
  });
