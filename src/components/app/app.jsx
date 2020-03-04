import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import {MainContainer} from "../containers/main-container.jsx";
import {OfferPropperty} from "../offer-property/offer-property.jsx";
import LoginContainer from "../containers/login-container.jsx";
import {PropTypes} from "prop-types";


export const App = ({
  onHeaderClick,
  offerPropperties
}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <MainContainer
            onHeaderClick={onHeaderClick}
          />
        </Route>
        <Route path="/dev-offer">
          <OfferPropperty {...offerPropperties} />
        </Route>
        <Route>
          <LoginContainer path="/login" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  onHeaderClick: PropTypes.func.isRequired,
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
