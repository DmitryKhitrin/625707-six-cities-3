import React from "react";
import renderer from "react-test-renderer";
import {TestFeedbackFrom} from "./feedback-form";

it(`<FeedbackForm /> should render FeedbackForm.`, () => {
  const stub = jest.fn();
  const tree = renderer
    .create(
        <TestFeedbackFrom
          onSubmite={stub}
          setCommentText={stub}
          isSubmiteButtonDisabled={true}
          setStarsCount={stub}
          rating={3}
          comment={``}
          id={``}
        />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
