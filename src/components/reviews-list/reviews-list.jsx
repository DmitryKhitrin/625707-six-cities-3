import React from "react";
import {PropTypes} from "prop-types";
import {ReviewsItem} from "../reviews-item/reviews-item.jsx";

export const ReviewsList = ({reviews}) => {
  if (!reviews || reviews.length < 0) {
    return null;
  }
  return (
    <ul className="reviews__list">
      {reviews
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 10)
          .map(
              ({
                id,
                date,
                comment,
                rating,
                user = {},
              }) => {
                const {personName = ``, personPhoto = ``} = user;
                return (
                  <ReviewsItem
                    key={id}
                    reviewsDate={date}
                    reviewsText={comment}
                    reviewsRating={rating}
                    reviewsUserName={personName}
                    reviewsAvatar={personPhoto}
                  />
                );
              }
          )}
    </ul>
  );
};

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        date: PropTypes.string,
        comment: PropTypes.string,
        rating: PropTypes.string,
        personName: PropTypes.string,
        personPhoto: PropTypes.string
      })
  )
};
