import React from "react";
import {PropTypes} from "prop-types";
import {ReviewsItem} from "../reviews-item/reviews-item.jsx";

export const ReviewsList = ({reviews}) => {
  return (
    <ul className="reviews__list">
      {reviews
        .sort((a, b) => new Date(b.reviewsDate) - new Date(a.reviewsDate))
        .map(
            ({
              id,
              reviewsDate,
              reviewsText,
              reviewsRating,
              reviewsUserName,
              reviewsAvatar
            }) => {
              return (
                <ReviewsItem
                  key={id}
                  reviewsDate={reviewsDate}
                  reviewsText={reviewsText}
                  reviewsRating={reviewsRating}
                  reviewsUserName={reviewsUserName}
                  reviewsAvatar={reviewsAvatar}
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
        id: PropTypes.string.isRequired,
        reviewsDate: PropTypes.string.isRequired,
        reviewsText: PropTypes.string.isRequired,
        reviewsRating: PropTypes.string.isRequired,
        reviewsUserName: PropTypes.string.isRequired,
        reviewsAvatar: PropTypes.string.isRequired
      })
  )
};
