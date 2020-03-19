import React from 'react';
import {Route, Redirect} from 'react-router-dom';
import {RootState} from "../../redux/root-reducer";
import {connect} from 'react-redux';
import {authSelector} from "../../redux/user/user-selectors";

const IsNotAuthUser = ({component: Component, isAuthenticated}: any) => {
  return (
    <Route
      render={(props) => (isAuthenticated ? <Component {...props} /> : <Redirect to="/login" />)}
    />
  );
};


const mapStateToProps = (state: RootState) => ({
  isAuthenticated: authSelector(state),
});

const ConnectedIsNotAuthUser = connect(mapStateToProps, null)(IsNotAuthUser);
export {ConnectedIsNotAuthUser as IsNotAuthUser};
