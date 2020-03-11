import React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {MainContainer} from "../containers/main-container.jsx";
import {Footer} from "../footer/footer.jsx";
import {PropertyContainer} from "../containers/property-container.jsx";
import LoginContainer from "../containers/login-container.jsx";
import FavoritesContainer from "../containers/favorites-container.jsx";
import Header from "../containers/header-container.jsx";
import {history} from "../../history.js";

export const App = () => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/offer/:id" component={PropertyContainer} />
        <Route path="/login" exact={true} component={LoginContainer} />
        <Route path="/favorites" component={FavoritesContainer} />
        <Redirect to="/" />
      </Switch>
      <Footer />
    </Router>
  );
};
