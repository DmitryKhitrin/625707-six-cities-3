import React from "react";
import renderer from "react-test-renderer";
import {TestSignIn} from "./sign-in";
import {BrowserRouter as Router} from "react-router-dom";
it(`<SignIn /> should render SignIn.`, () => {
  const tree = renderer
    .create(
        <Router>
          <TestSignIn setCity={jest.fn()} handleChange={jest.fn()} handleSubmit={jest.fn()} />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
