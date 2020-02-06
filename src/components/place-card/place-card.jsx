import React from 'react';
import {PropTypes} from 'prop-types';

export const PlaceCard = ({
  priceValue,
  placeCardImage,
  cardName,
  starsRating,
  roomType,
  isPremium,
}) => {
  const premiumNameplate = isPremium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : null;

  return (
    <article className="cities__place-card place-card">
      {premiumNameplate}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={placeCardImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{priceValue}</b>
            <span className="place-card__price-text">
              &#47;&nbsp;night
            </span>
          </div>
          <button
            className="place-card__bookmark-button button"
            type="button"
          >
            <svg
              className="place-card__bookmark-icon"
              width="18"
              height="19"
            >
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: starsRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">
            {cardName}
          </a>
        </h2>
        <p className="place-card__type">{roomType}</p>
      </div>
    </article>
  );
};


PlaceCard.propTypes = {
  priceValue: PropTypes.number,
  placeCardImage: PropTypes.string,
  cardName: PropTypes.string,
  starsRating: PropTypes.string,
  roomType: PropTypes.string,
  isPremium: PropTypes.bool,
};
