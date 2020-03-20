import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Subtract} from "utility-types";
import {formStatusSelector} from "../redux/property/property-selectors";
import {sendCommentAsync} from "../redux/property/property-actions";

export const RATING = [1, 2, 3, 4, 5];
const COMMENT_PARAM = {
  min: 50,
  max: 300,
};

type InjectedProps = {
  comment: string;
  rating: number
  isSubmiteButtonDisabled: boolean
  onSetStarsCount: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onSetCommentText: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onSubmit: (event: React.FormEvent<HTMLFormElement>, id: string) => void;
}


export const withFeedback = (Component: any) => {
  type P = React.ComponentProps<typeof Component>;
  type T = Subtract<P, InjectedProps>;

  const WithFeedback = (props: T) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState(``);

    const isFormSending = useSelector(formStatusSelector);
    const dispatch = useDispatch();

    const reset = () => {
      setRating(0);
      setComment(``);
    };

    const setStarsCount = (evt: React.ChangeEvent<HTMLInputElement>) => {
      setRating(Number(evt.target.value));
    };

    const handleSetCommentText = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
      const commentText = evt.target.value;
      const {max} = COMMENT_PARAM;
      if (commentText.length > max) {
        return;
      }
      setComment(commentText);
    };

    const handleSubmitForm = (evt: React.FormEvent<HTMLFormElement>, hotelId: string) => {
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
        onSetStarsCount={setStarsCount}
        onSetCommentText={handleSetCommentText}
        onSubmit={handleSubmitForm}
      />
    );
  };

  return WithFeedback;
};
