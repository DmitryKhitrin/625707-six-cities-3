import React, {FC, memo} from "react";
import moment from "moment";

type Props = {
  reviewsDate: number;
  reviewsText: string;
  reviewsRating: string;
  reviewsUserName: string;
  reviewsAvatar: string;
}

const ReviewsItem: FC<Props> = ({
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
          {moment(new Date(reviewsDate)).format(`MMMM YYYY`)}
        </time>
      </div>
    </li>
  );
};

const MemoizedReviewsItem = memo(ReviewsItem);
export {MemoizedReviewsItem as ReviewsItem};
