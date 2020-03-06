import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFeedback} from "./with-feedback.jsx";

configure({adapter: new Adapter()});

const TestComponent = () => <div>Somw text.</div>;
const WithFeedback = withFeedback(TestComponent);

describe(`withLogin`, () => {
  it(`TestComponent should setCommentText password.`, () => {
    const component = shallow(<WithFeedback />);
    component.props().setCommentText({target: {value: `Hello world!`}});
    expect(component.state().comment).toEqual(`Hello world!`);
  });

  it(`TestComponent should setStarsCount email.`, () => {
    const component = shallow(<WithFeedback />);
    component
      .props()
      .setStarsCount({target: {value: 4}});
    expect(component.state().rating).toEqual(4);
  });
});
