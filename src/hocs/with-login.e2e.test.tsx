import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withLogin} from "./with-login";

configure({adapter: new Adapter()});

const TestComponent = () => <div>Somw text.</div>;
const WithLogin = withLogin(TestComponent);

describe(`withLogin`, () => {

  it(`TestComponent should handleChange password.`, () => {
    const component = shallow(<WithLogin login={jest.fn()} />);
    component
       .props()
       .handleChange({target: {value: `123`, name: `password`}});
    const value: any = component.state();
    expect(value.password).toEqual(`123`);
  });

  it(`TestComponent should handleChange email.`, () => {
    const component = shallow(<WithLogin login={jest.fn()} />);
    component
      .props()
      .handleChange({target: {value: `login`, name: `email`}});
    const value: any = component.state();
    expect(value.email).toEqual(`login`);
  });
});
