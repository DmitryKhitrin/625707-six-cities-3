import React, {FC, memo, Fragment, useCallback} from "react";
import {RATING, withFeedback} from "../../hocs/with-feedback";

type Props = {
  onSubmit: (event: React.FormEvent<HTMLFormElement>, id: string) => void;
  setCommentText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  isSubmiteButtonDisabled: boolean;
  setStarsCount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  comment: string;
  rating: number;
  id: string;
  formError?: string;
}

const FeedbackFrom: FC<Props> = ({
  onSubmit = () => {},
  setCommentText = () => {},
  isSubmiteButtonDisabled = true,
  setStarsCount = () => {},
  comment,
  rating,
  id,
  formError,
}) => {

  const onSubmiteClick = useCallback(
      (evt) => {
        onSubmit(evt, id);
      },
      [onSubmit, id]
  );

  return (
    <form
      className="reviews__form form"
      action="#"
      method="post"
      onSubmit={onSubmiteClick}
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
      {formError && (
        <span className={`form__error error`}>
          При отправке формы возникла ошибка. Пожалуйста, попробуйте
          позже.
        </span>
      )}
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

const WrappedFeedbackForm = withFeedback(memo(FeedbackFrom));
export {WrappedFeedbackForm as FeedbackFrom};
export {FeedbackFrom as TestFeedbackFrom};
