import React from "react";
import {connect} from "react-redux";
import {WrappedMain} from "../main/main.jsx";
import {
  locationsSelector,
  citySelector,
  offersInCitySelector,
} from "../../redux/offers/offer-selectors.js";

import {
  setCity,
  loadOffers
} from "../../redux/offers/offer-actions.js";

const MainContainer = (props) => {
  return <WrappedMain {...props} />;
};
const mapStateToProps = (state) => ({
  locations: locationsSelector(state),
  city: citySelector(state),
  placeCardsList: offersInCitySelector(state)
});

const mapDispatchToProps = {
  setCity,
  loadOffers
};


const WrappedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export {WrappedMainContainer as MainContainer};

