import React from "react";
import PropTypes from 'prop-types';
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {authSelector} from "../../redux/user/user-selectors";
import {connect} from 'react-redux';

import {MainContainer} from "../containers/main-container";
import {Footer} from "../footer/footer";
import {PropertyContainer} from "../containers/property-container.jsx";
// import {LoginContainer} from "../containers/login-container.jsx";
import {SignIn} from "../sign-in/sign-in";
import FavoritesContainer from "../containers/favorites-container.jsx";
import Header from "../containers/header-container.jsx";
import {history} from "../../utils/history";

const App = ({isAuthenticated}) => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/offer/:id" component={PropertyContainer} />
        <Route path="/login" exact={true} component={SignIn} />
        {isAuthenticated ? (
          <Route path="/favorites" component={FavoritesContainer} />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
      <Footer />
    </Router>
  );
};

App.propTypes = {
  isAuthenticated: PropTypes.bool,
};


const mapStateToProps = (state) => ({
  isAuthenticated: authSelector(state),
});

const ConnectedApp = connect(mapStateToProps, null)(App);
export {ConnectedApp as App};
