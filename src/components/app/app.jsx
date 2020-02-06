import React from 'react';
import {Main} from '../main/main.jsx';
import {PropTypes} from 'prop-types';


export const App = ({rentCount, placeCardsList}) => {
  return (
    <Main rentCount={rentCount} placeCardsList={placeCardsList}/>
  );
};

App.propTypes = {
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        priceValue: PropTypes.number,
        placeCardImage: PropTypes.string,
        cardName: PropTypes.string,
        starsRating: PropTypes.string,
        roomType: PropTypes.string,
        isPremium: PropTypes.bool,
      })
  ).isRequired,
  rentCount: PropTypes.number.isRequired
};
