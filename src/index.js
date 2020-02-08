import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './components/app/app.jsx';

const rentCount = 312;

const placeCardsList = [
  {
    priceValue: 120,
    placeCardImage: `img/apartment-01.jpg`,
    starsRating: `93%`,
    roomType: `Apartment`,
    isPremium: true,
    cardName: `Beautiful &amp; luxurious apartment at great location`
  },
  {
    priceValue: 80,
    placeCardImage: `img/room.jpg`,
    starsRating: `80%`,
    roomType: `Private room`,
    isPremium: false,
    cardName: `Wood and stone place`
  },
  {
    priceValue: 132,
    placeCardImage: `img/apartment-02.jpg`,
    starsRating: `80%`,
    roomType: `Apartment`,
    isPremium: false,
    cardName: `Canal View Prinsengracht`
  },
  {
    priceValue: 180,
    placeCardImage: `img/apartment-03.jpg`,
    starsRating: `100%`,
    roomType: `Apartment`,
    isPremium: true,
    cardName: `Nice, cozy, warm big bed apartment`
  },
  {
    priceValue: 80,
    placeCardImage: `img/apartment-01.jpg`,
    starsRating: `80%`,
    roomType: `Apartment`,
    isPremium: true,
    cardName: `Wood and stone place`
  }
];

ReactDOM.render(
    <App rentCount={rentCount} placeCardsList={placeCardsList}/>,
    document.getElementById(`root`)
);
