import React from "react";
import renderer from "react-test-renderer";
import SignIn from "./sign-in.jsx";
import {BrowserRouter as Router} from "react-router-dom";
it(`<SignIn /> should render SignIn.`, () => {
  const tree = renderer
    .create(
        <Router>
          <SignIn />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
