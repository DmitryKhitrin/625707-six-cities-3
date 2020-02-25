import React from "react";
import {PropTypes} from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";

export const OffersList = ({
  placeCardsList,
  onMouseEnter,
  onMouseLeave,
  onHeaderClick
}) => {
  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCardsList.map(
          ({
            id,
            priceValue,
            placeCardImage,
            cardName,
            starsRating,
            roomType,
            isPremium
          }) => {
            return (
              <div key={id}>
                <PlaceCard
                  id={id}
                  isPremium={isPremium}
                  roomType={roomType}
                  starsRating={starsRating}
                  priceValue={priceValue}
                  placeCardImage={placeCardImage}
                  cardName={cardName}
                  onHeaderClick={onHeaderClick}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                />
              </div>
            );
          }
      )}
    </div>
  );
};

OffersList.propTypes = {
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        priceValue: PropTypes.number,
        placeCardImage: PropTypes.string,
        cardName: PropTypes.string,
        starsRating: PropTypes.string,
        roomType: PropTypes.string,
        isPremium: PropTypes.bool
      })
  ).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  onHeaderClick: PropTypes.func.isRequired
};
