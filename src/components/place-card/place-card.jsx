import React, {memo} from "react";
import {PropTypes} from 'prop-types';

const PlaceCard = ({
  price,
  previewImage,
  title,
  rating,
  type,
  isPremium,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  isFavorite,
  setFavorite = () => {},
  id,
}) => {
  const premiumNameplate = isPremium ? (
    <div className="place-card__mark">
      <span>Premium</span>
    </div>
  ) : null;

  return (
    <article
      className="cities__place-card place-card"
      onMouseLeave={() => {
        onMouseLeave();
      }}
      onMouseEnter={() => {
        onMouseEnter(id);
      }}
    >
      {premiumNameplate}
      <div className="cities__image-wrapper place-card__image-wrapper">
        <a href="#">
          <img
            className="place-card__image"
            src={previewImage}
            width="260"
            height="200"
            alt="Place image"
          />
        </a>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button
            className={`place-card__bookmark-button${
              isFavorite ? `--active` : ``
            } button`}
            type="button"
            onClick={setFavorite}
          >
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark" />
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{width: rating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">{title}</a>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

const MemoizedPlaceCard = memo(PlaceCard);
export {MemoizedPlaceCard as PlaceCard};

PlaceCard.propTypes = {
  id: PropTypes.string.isRequired,
  price: PropTypes.number,
  previewImage: PropTypes.string,
  title: PropTypes.string,
  rating: PropTypes.string,
  type: PropTypes.string,
  isPremium: PropTypes.bool,
  onMouseEnter: PropTypes.func,
  onMouseLeave: PropTypes.func,
  isFavorite: PropTypes.bool,
  setFavorite: PropTypes.func
};
