import React from "react";
import {connect} from "react-redux";
import {login} from "../../redux/user/user-actions";
import {setCity} from "../../redux/offers/offer-actions";
import {SignIn} from "../../components/sign-in/sign-in.jsx";


const LoginContainer = (props) => {
  return <SignIn {...props} />;
};

const mapStateToProps = ({user}) => {
  return {
    isAuthenticated: user.authorizationStatus,
  };
};

const mapDispatchToProps = {
  setCity,
  login,
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LoginContainer);
