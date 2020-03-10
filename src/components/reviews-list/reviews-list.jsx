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
                user,
              }) => {
                const {hostName, hostPhoto} = user;
                return (
                  <ReviewsItem
                    key={id}
                    reviewsDate={date}
                    reviewsText={comment}
                    reviewsRating={rating}
                    reviewsUserName={hostName}
                    reviewsAvatar={hostPhoto}
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
