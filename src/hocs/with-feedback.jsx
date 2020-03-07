import React, {PureComponent} from "react";

export const RATING = [1, 2, 3, 4, 5];
const COMMENT_PARAM = {
  min: 50,
  max: 300,
};

export const withFeedback = (Component) => {
  class WithFeedback extends PureComponent {
    constructor(props) {
      super(props);

      this.state = {
        rating: 0,
        comment: ``
      };

      this._setStarsCount = this._setStarsCount.bind(this);
      this._setCommentText = this._setCommentText.bind(this);
      this._onSubmitForm = this._onSubmitForm.bind(this);
    }

    _reset() {
      this.setState({
        rating: 0,
        comment: ``
      });
    }

    _setStarsCount(evt) {
      this.setState({rating: Number(evt.target.value)});
    }

    _setCommentText(evt) {
      const comment = evt.target.value;
      const {max} = COMMENT_PARAM;

      if (comment.length > max) {
        return;
      }

      this.setState({
        comment
      });
    }

    _onSubmitForm(evt) {
      evt.preventDefault();
      this._reset();
    }

    render() {
      const {comment, rating} = this.state;
      const {max, min} = COMMENT_PARAM;
      const commentLength = comment.length;
      const isSubmiteButtonDisabled =
        !rating || commentLength < min || commentLength > max;
      return (
        <Component
          {...this.props}
          comment={comment}
          rating={rating}
          isSubmiteButtonDisabled={isSubmiteButtonDisabled}
          setStarsCount={this._setStarsCount}
          setCommentText={this._setCommentText}
          onSubmite={this._onSubmitForm}
        />
      );
    }
  }

  return WithFeedback;
};

