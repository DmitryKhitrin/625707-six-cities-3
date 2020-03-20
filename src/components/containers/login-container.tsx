import React, {FC, memo} from "react";
import {connect} from "react-redux";
import {login} from "../../redux/user/user-actions";
import {setCity} from "../../redux/offers/offer-actions";
import {SignIn} from "../../components/sign-in/sign-in";
import {authSelector} from "../../redux/user/user-selectors";
import {RootState} from "../../redux/root-reducer";
import {withLogin} from "../../hocs/with-login";

type Props = {
  isAuthenticated: boolean;
  setCity: (T: string) => void;
  login: () => void;
  handleChange: (T: React.ChangeEvent<HTMLInputElement>) => void;
  handleSubmit: (T: React.FormEvent<HTMLFormElement>) => void;
};

const LoginContainer: FC<Props> = ({
  setCity: onSetCity,
  handleChange,
  handleSubmit,
}) => {
  return (
    <SignIn
      onSetCity={onSetCity}
      handleChange={handleChange}
      handleSubmit={handleSubmit}
    />
  );
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

const WrappedLoginContainer = memo(
    connect(mapStateToProps, mapDispatchToProps)(withLogin(LoginContainer)),
);
export {WrappedLoginContainer as LoginContainer};
