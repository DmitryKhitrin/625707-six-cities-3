import React from "react";
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import renderer from "react-test-renderer";
import {App} from "./app";
import {Map} from "../map/map";
import {store} from "../../mocks/mocked-store";

describe(`App`, () => {
  it(`<App /> should render app.`, () => {
    Map.prototype.componentDidMount = jest.fn();
    const tree = renderer
        .create(
            <Provider store={store}>
              <Router>
                <App isAuthenticated={false} />
              </Router>
            </Provider>,
        )
        .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
