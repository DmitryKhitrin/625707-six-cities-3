import {combineReducers} from "redux";
import {offersReducer, OfferState} from "./offers/offer-reducer";
import {userReducer, UserState} from "./user/user-reducer";
import {propertyReducer, PropertyState} from './property/property-reducer';

export type RootState = {
  offer: OfferState;
  user: UserState;
  property: PropertyState;
}

export const rootReducer = () =>
  combineReducers({
    offer: offersReducer,
    user: userReducer,
    property: propertyReducer,
  });
