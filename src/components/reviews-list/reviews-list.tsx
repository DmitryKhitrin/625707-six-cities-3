import React, {FC, memo} from "react";
import {ReviewsItem} from "../reviews-item/reviews-item";
import {ParsedComment} from '../../utils/utils';

type Props = {
  reviews: ParsedComment[];
}

const ReviewsList: FC<Props> = ({reviews}) => {
  if (!reviews || reviews.length < 0) {
    return null;
  }
  return (
    <ul className="reviews__list">
      {reviews
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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

const MemoizedReviewsList = memo(ReviewsList);
export {MemoizedReviewsList as ReviewsList};
