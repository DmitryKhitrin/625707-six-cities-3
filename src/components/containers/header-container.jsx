import React from "react";
import {connect} from "react-redux";

import {Header} from "../../components/header/header.jsx";

export const HeaderContainer = (props) => {
  return <Header {...props} />;
};

const mapStateToProps = ({user}) => {
  return {
    isAuthenticated: user.authorizationStatus === `AUTH`,
    user: user.user
  };
};

export default connect(mapStateToProps, null)(HeaderContainer);
