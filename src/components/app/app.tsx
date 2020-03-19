import React, {FC} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";

import {MainContainer} from "../containers/main-container";
import {Footer} from "../footer/footer";
import {PropertyContainer} from "../containers/property-container";
import {LoginContainer} from "../containers/login-container";
import {FavoritesContainer} from "../containers/favorites-container";
import {HeaderContainer} from "../containers/header-container";
import {history} from "../../utils/history";
import {IsNotAuthUser} from "../is-no-auth-user/is-no-auth-user";


export const App: FC = () => {
  return (
    <Router history={history}>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/offer/:id" component={PropertyContainer} />
        <Route path="/login" exact={true} component={LoginContainer} />
        <IsNotAuthUser component={FavoritesContainer} />
      </Switch>
      <Footer />
    </Router>
  );
};

