import React from "react";
import {Router, Route, Switch, Redirect} from "react-router-dom";
import {MainContainer} from "../containers/main-container.jsx";
import {OfferPropperty} from "../offer-property/offer-property.jsx";
import {Footer} from "../footer/footer.jsx";
import LoginContainer from "../containers/login-container.jsx";
import FavoritesContainer from "../containers/favorites-container.jsx";
import Header from "../containers/header-container.jsx";
import {PropTypes} from "prop-types";
import {history} from "../../history.js";

export const App = ({
  offerPropperties
}) => {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/" component={MainContainer} exact />
        <Route path="/offer/:id">
          <OfferPropperty {...offerPropperties} />
        </Route>
        <Route path="/login" component={LoginContainer} />
        <Route path="/favorites" component={FavoritesContainer} />
        <Redirect to="/" />
      </Switch>
      <Footer/>
    </Router>
  );
};

App.propTypes = {
  offerPropperties: PropTypes.shape({
    placePhotosList: PropTypes.arrayOf(PropTypes.string),
    offerHeader: PropTypes.string.isRequired,
    descriptions: PropTypes.arrayOf(PropTypes.string.isRequired),
    isPremium: PropTypes.bool.isRequired,
    placeType: PropTypes.string.isRequired,
    rating: PropTypes.string.isRequired,
    bedroomsCount: PropTypes.string.isRequired,
    maxPeopleCount: PropTypes.number.isRequired,
    price: PropTypes.number.isRequired,
    amenitiesList: PropTypes.arrayOf(PropTypes.string),
    hostInformation: PropTypes.shape({
      hostPhoto: PropTypes.string,
      hostName: PropTypes.string,
      isSuper: PropTypes.bool
    })
  })
};
