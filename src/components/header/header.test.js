import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {TestHeader} from "./header.jsx";

describe(`Header`, () => {
  it(`<Header /> should render empty Header.`, () => {
    const tree = renderer
      .create(
          <Router>
            <TestHeader isAuthenticated={false} user={{}} />
          </Router>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it(`<Header /> should render Header.`, () => {
    const tree = renderer
      .create(
          <Router>
            <TestHeader isAuthenticated={true} user={{email: `asd@mail.ru`, avatar: ``}} />
          </Router>)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});

