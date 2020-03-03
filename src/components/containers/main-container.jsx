import React from "react";
import {connect} from "react-redux";
import {WrappedMain} from "../main/main.jsx";

import {
  setCity,
  loadOffers
} from "../../redux/offers/offer.actions.js";

const MainContainer = (props) => {
  return <WrappedMain {...props} />;
};
const mapStateToProps = (state) => ({
  locations: state.locations,
  city: state.city,
  placeCardsList: state.offers.filter((card) => (card.city === state.city)),
});

const mapDispatchToProps = {
  setCity,
  loadOffers
};


const WrappedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export {WrappedMainContainer as MainContainer};

