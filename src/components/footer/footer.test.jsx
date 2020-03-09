import React from "react";
import renderer from "react-test-renderer";
import {BrowserRouter as Router} from "react-router-dom";
import {Footer} from "./footer.jsx";

it(`<Footer /> should render Footer.`, () => {
  const tree = renderer
    .create(
        <Router>
          <Footer />
        </Router>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
