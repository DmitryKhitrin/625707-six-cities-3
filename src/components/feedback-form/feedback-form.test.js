import React from "react";
import renderer from "react-test-renderer";
import FeedbackForm from "./feedback-form.jsx";

it(`<FeedbackForm /> should render FeedbackForm.`, () => {
  const stub = jest.fn();
  const tree = renderer
    .create(
        <FeedbackForm
          onSubmite={stub}
          setCommentText={stub}
          isSubmiteButtonDisabled={true}
          setStarsCount={stub}
          rating={3}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
