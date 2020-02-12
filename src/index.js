import React from 'react';
import ReactDOM from 'react-dom';
import {offers} from './mocks/offers.js';
import {App} from './components/app/app.jsx';

const rentCount = 312;
const onHeaderClick = () => {};

ReactDOM.render(
    <App
      rentCount={rentCount}
      placeCardsList={offers}
      onHeaderClick={onHeaderClick}
    />,
    document.getElementById(`root`)
);
