import React from "react";
import {PropTypes} from "prop-types";

export const ReviewsItem = ({
  reviewsDate,
  reviewsText,
  reviewsRating,
  reviewsUserName,
  reviewsAvatar,
}) => {

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img
            className="reviews__avatar user__avatar"
            src={reviewsAvatar}
            width={54}
            height={54}
            alt="Reviews avatar"
          />
        </div>
        <span className="reviews__user-name">{reviewsUserName}</span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: reviewsRating}} />
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">{reviewsText}</p>
        <time className="reviews__time" dateTime="2019-04-24">
          {reviewsDate}
        </time>
      </div>
    </li>
  );

};

ReviewsItem.propTypes = {
  id: PropTypes.string,
  date: PropTypes.string,
  comment: PropTypes.string,
  rating: PropTypes.string,
  personName: PropTypes.string,
  personPhoto: PropTypes.string,
};
