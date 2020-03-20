import React, {FC} from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";

import {MainContainer} from "../containers/main-container";
import {Footer} from "../footer/footer";
import {PropertyContainer} from "../containers/property-container";
import {LoginContainer} from "../containers/login-container";
import {FavoritesContainer} from "../containers/favorites-container";
import {HeaderContainer} from "../containers/header-container";
import {history} from "../../utils/history";
import {PrivateRoute} from "../private-route/private-route";
import {RootState} from "../../redux/root-reducer";
import {connect} from 'react-redux';
import {authSelector} from "../../redux/user/user-selectors";

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
        <PrivateRoute path="/login" require={!isAuthenticated} to="/" render={() => <LoginContainer />}/>
        <PrivateRoute path="/favorites" require={isAuthenticated} to="/login" render={() => < FavoritesContainer />}/>
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
