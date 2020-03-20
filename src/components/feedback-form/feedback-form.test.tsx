import React from "react";
import renderer from "react-test-renderer";
import {TestFeedbackFrom} from "./feedback-form";

it(`<FeedbackForm /> should render FeedbackForm.`, () => {
  const stub = jest.fn();
  const tree = renderer
    .create(
        <TestFeedbackFrom
          onSubmit={stub}
          onSetCommentText={stub}
          isSubmiteButtonDisabled={true}
          onSetStarsCount={stub}
          rating={3}
          comment={``}
          id={``}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
