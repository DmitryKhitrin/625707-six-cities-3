import React, {memo, Fragment} from "react";
import PropTypes from "prop-types";
import {RATING, withFeedback} from "../../hocs/with-feedback.jsx";

const FeedbackFrom = ({
  onSubmite = () => {},
  setCommentText = () => {},
  isSubmiteButtonDisabled = true,
  setStarsCount = () => {},
  comment,
  rating
}) => {

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmite}
    >
      <label className="reviews__label form__label" htmlFor="review">
        Your review
      </label>
      <div className="reviews__rating-form form__rating">
        {RATING.map((item, index) => {
          const count = RATING.length - index;
          return (
            <Fragment key={item}>
              <input
                className="form__rating-input visually-hidden"
                name="rating"
                value={count}
                id={`${count}-stars`}
                type="radio"
                onChange={setStarsCount}
                checked={count === rating}
              />
              <label
                htmlFor={`${count}-stars`}
                className="reviews__rating-label form__rating-label"
              >
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star" />
                </svg>
              </label>
            </Fragment>
          );
        })}
      </div>
      <textarea
        className="reviews__textarea form__textarea"
        id="review"
        name="review"
        placeholder="Tell how was your stay, what you like and what can be improved"
        value={comment}
        onChange={setCommentText}
      />
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set{` `}
          <span className="reviews__star">rating</span> and describe your stay
          with at least{` `}
          <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button
          className="reviews__submit form__submit button"
          type="submit"
          disabled={isSubmiteButtonDisabled}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

FeedbackFrom.propTypes = {
  onSubmite: PropTypes.func.isRequired,
  setCommentText: PropTypes.func.isRequired,
  isSubmiteButtonDisabled: PropTypes.bool.isRequired,
  setStarsCount: PropTypes.func.isRequired,
  rating: PropTypes.number.isRequired,
  comment: PropTypes.string,
};

const WrappedFeedbackForm = withFeedback(memo(FeedbackFrom));
export {WrappedFeedbackForm as FeedbackFrom};
export default FeedbackFrom;