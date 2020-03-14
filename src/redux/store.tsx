import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {makeApi} from "../api/api";
import {rootReducer} from "./root-reducer";

const api = makeApi();
export const store = createStore(
    rootReducer(),
    compose(
        applyMiddleware(thunk.withExtraArgument(api)),
        window.__REDUX_DEVTOOLS_EXTENSION__
          ? window.__REDUX_DEVTOOLS_EXTENSION__()
          : (f: () => void) => f
    )
);
