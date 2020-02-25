import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {offers} from "./mocks/offers.js";
import {offerPropperties} from "./mocks/offer-propperties.js";
import {App} from './components/app/app.jsx';
import {store} from "./redux/index.js";

const onHeaderClick = () => {};

ReactDOM.render(
    <Provider store={store}>
      <App
        placeCardsList={offers}
        onHeaderClick={onHeaderClick}
        offerPropperties={offerPropperties}
      />,
    </Provider>,
    document.getElementById(`root`)
);
