import React, {FC, memo} from "react";
import {connect} from "react-redux";
import {login} from "../../redux/user/user-actions.js";
import {setCity} from "../../redux/offers/offer-actions.js";
import {SignIn} from "../../components/sign-in/sign-in.jsx";
import {authSelector} from "../../redux/user/user-selectors.js";
import {RootState} from "../../redux/root-reducer.js";

type Props = {
  isAuthenticated: string;
  setCity: (T: string) => void;
  login: () => void;
};

const LoginContainer: FC<Props> = (props) => {
  return <SignIn {...props} />;
};


const mapStateToProps = (state: RootState) => {
  return {
    isAuthenticated: authSelector(state),
  };
};

const mapDispatchToProps = {
  setCity,
  login,
};

const WrappedLoginContainer = memo(connect(mapStateToProps, mapDispatchToProps)(LoginContainer));
export {WrappedLoginContainer as LoginContainer};
