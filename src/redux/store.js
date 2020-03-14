import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {makeApi} from "../api/api.js";
import {rootReducer} from "./root-reducer.js";

const api = makeApi();
export const store = createStore(
    rootReducer(),
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f) => f
    )
);
