import React from "react";
import {configure, shallow} from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import {withFeedback} from "./with-feedback.jsx";
import {commentsSelector, formStatusSelector} from '../redux/choosed/choosed-selector';

configure({adapter: new Adapter()});

jest.mock(`react-redux`, () => ({
  useSelector: jest.fn((fn) => fn()),
  useDispatch: jest.fn(),
}));
jest.mock(`../redux/choosed/choosed-selector`);


const TestComponent = () => <div>Somw text.</div>;
const WithFeedback = withFeedback(TestComponent);

describe(`withLogin`, () => {
  it(`TestComponent should setCommentText password.`, () => {
    formStatusSelector.mockReturnValue(false);
    commentsSelector.mockReturnValue(``);
    const component = shallow(<WithFeedback />);
    component.props().setCommentText({target: {value: `Hello world!`}});
    expect(component.props().comment).toEqual(`Hello world!`);
  });

  it(`TestComponent should setStarsCount email.`, () => {
    formStatusSelector.mockReturnValue(false);
    commentsSelector.mockReturnValue(``);
    const component = shallow(<WithFeedback />);
    component
      .props()
      .setStarsCount({target: {value: 4}});
    expect(component.props().rating).toEqual(4);
  });
});
