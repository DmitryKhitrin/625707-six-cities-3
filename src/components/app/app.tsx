import React, {FC} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {authSelector} from "../../redux/user/user-selectors";
import {connect} from 'react-redux';

import {MainContainer} from "../containers/main-container";
import {Footer} from "../footer/footer";
import {PropertyContainer} from "../containers/property-container";
import {LoginContainer} from "../containers/login-container";
import {FavoritesContainer} from "../containers/favorites-container";
import {HeaderContainer} from "../containers/header-container";
import {history} from "../../utils/history";
import {RootState} from "../../redux/root-reducer";

type Props = {
  isAuthenticated: boolean;
}

const App: FC<Props> = ({isAuthenticated}) => {
  return (
    <Router history={history}>
      <HeaderContainer />
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/offer/:id" component={PropertyContainer} />
        <Route path="/login" exact={true} component={LoginContainer} />
        {isAuthenticated ? (
          <Route path="/favorites" exact={true} component={FavoritesContainer} />
        ) : (
          <Redirect to="/login" />
        )}
      </Switch>
      <Footer />
    </Router>
  );
};

const mapStateToProps = (state: RootState) => ({
  isAuthenticated: authSelector(state),
});

const ConnectedApp = connect(mapStateToProps, null)(App);
export {ConnectedApp as App};
