import React, {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import {formStatusSelector} from "../redux/comments/comments-selector.js";
import {sendCommentAsync} from "../redux/comments/comments-actions.js";

export const RATING = [1, 2, 3, 4, 5];
const COMMENT_PARAM = {
  min: 50,
  max: 300,
};

export const withFeedback = (Component) => {
  const WithFeedback = (props) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(``);

    const isFormSending = useSelector(formStatusSelector);
    const dispatch = useDispatch();

    const reset = () => {
      setRating(0);
      setComment(``);
    };

    const setStarsCount = (evt) => {
      setRating(Number(evt.target.value));
    };

    const setCommentText = (evt) => {
      const commentText = evt.target.value;
      const {max} = COMMENT_PARAM;
      if (commentText.length > max) {
        return;
      }
      setComment(commentText);
    };

    const onSubmitForm = (evt, hotelId) => {
      evt.preventDefault();
      dispatch(sendCommentAsync(hotelId, rating, comment));
      reset();
    };

    const {max, min} = COMMENT_PARAM;
    const commentLength = comment.length;
    const isSubmiteButtonDisabled =
      !rating || commentLength < min || commentLength > max || isFormSending;

    return (
      <Component
        {...props}
        comment={comment}
        rating={rating}
        isSubmiteButtonDisabled={isSubmiteButtonDisabled}
        setStarsCount={setStarsCount}
        setCommentText={setCommentText}
        onSubmite={onSubmitForm}
      />
    );
  };

  return WithFeedback;
};


export const useFeedback = (hotelId) => {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState(``);

  const isFormSending = useSelector(formStatusSelector);
  const dispatch = useDispatch();

  const reset = () => {
    setRating(0);
    setComment(``);
  };

  const setStarsCount = (evt) => {
    setRating(Number(evt.target.value));
  };

  const setCommentText = (evt) => {
    const commentText = evt.target.value;
    const {max} = COMMENT_PARAM;
    if (commentText.length > max) {
      return;
    }
    setComment(commentText);
  };

  const onSubmitForm = (evt) => {
    evt.preventDefault();
    dispatch(sendCommentAsync(hotelId, rating, comment));
    reset();
  };

  const {max, min} = COMMENT_PARAM;
  const commentLength = comment.length;
  const isSubmiteButtonDisabled =
           !rating ||
           commentLength < min ||
           commentLength > max ||
           isFormSending;

  return {
    comment,
    rating,
    isSubmiteButtonDisabled,
    setStarsCount,
    setCommentText,
    onSubmite: onSubmitForm
  };
};
