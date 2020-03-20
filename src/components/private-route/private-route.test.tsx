import React, {FC} from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {PrivateRoute} from './private-route';
import {BrowserRouter} from 'react-router-dom';

Enzyme.configure({
  adapter: new Adapter()
});

const TestComponent: FC = () => (<div>Hello</div>);

describe(`<PrivateRoute />`, () => {

  it(`should render Component.`, () => {

    const tree = Enzyme.mount(
        <BrowserRouter>
          <PrivateRoute
            path="/"
            to="/dublin"
            render={() => <TestComponent />}
            require={true}
          />
        </BrowserRouter>
    );

    expect(tree.getDOMNode()).toMatchSnapshot();
  });

  it(`should render null.`, () => {
    const tree = Enzyme.mount(
        <BrowserRouter>
          <PrivateRoute
            path="/"
            to="/dublin"
            render={() => <TestComponent />}
            require={false}
          />
        </BrowserRouter>
    );

    expect(tree.getDOMNode()).toMatchSnapshot();
  });
});
