import React, {FC, memo} from "react";
import {connect} from "react-redux";
import {login} from "../../redux/user/user-actions";
import {setCity} from "../../redux/offers/offer-actions";
import {SignIn} from "../../components/sign-in/sign-in";
import {authSelector} from "../../redux/user/user-selectors";
import {RootState} from "../../redux/root-reducer";

type Props = {
  isAuthenticated: boolean;
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
