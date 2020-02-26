import React from "react";
import {connect} from "react-redux";
import {WrappedMain} from "../main/main.jsx";

import {
  getOffers,
  getLocations,
  setCity
} from "../../redux/actions/location.actions.js";

const MainContainer = (props) => {
  return <WrappedMain {...props} />;
};
const mapStateToProps = (state) => ({
  locations: state.locations,
  city: state.city,
  placeCardsList: state.offers,
});

const mapDispatchToProps = {
  getLocations,
  getOffers,
  setCity
};


const WrappedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export {WrappedMainContainer as MainContainer};

