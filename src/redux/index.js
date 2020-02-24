import {createStore, compose} from "redux";
import {offersReducer} from "./offer-reducer.js";

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools ? devtools : compose;
const enhansedStore = composeEnhancers();

export const store = createStore(offersReducer, enhansedStore);
