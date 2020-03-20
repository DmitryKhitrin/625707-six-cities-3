import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFeedback} from "./with-feedback";

configure({adapter: new Adapter()});

jest.mock(`react-redux`, () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: jest.fn(),
}));
jest.mock(`../redux/property/property-selectors`);


const TestComponent = () => <div>Somw text.</div>;
const WithFeedback = withFeedback(TestComponent);

describe(`withFeedback`, () => {
  it(`TestComponent should setCommentText password.`, () => {
    const component = shallow(<WithFeedback />);
    component.props().onSetCommentText({target: {value: `Hello world!`}});
    expect(component.props().comment).toEqual(`Hello world!`);
  });

  it(`TestComponent should setStarsCount email.`, () => {
    const component = shallow(<WithFeedback />);
    component
      .props()
      .onSetStarsCount({target: {value: 4}});
    expect(component.props().rating).toEqual(4);
  });
});
