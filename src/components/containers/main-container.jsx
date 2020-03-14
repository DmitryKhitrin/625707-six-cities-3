import React from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {useMountEffect} from "../../hooks/use-mount-effect.js";
import {useScrollToTop} from "../../hooks/use-scroll-to-top.js";
import {authSelector} from "../../redux/user/user-selectors.js";
import {WrappedMain} from "../main/main.jsx";
import {
  locationsSelector,
  citySelector,
  offersInCitySelector,
} from "../../redux/offers/offer-selectors.js";

import {
  setCity,
  loadOffers,
  setFavorite,
} from "../../redux/offers/offer-actions.js";

const MainContainer = (props) => {
  useMountEffect(() => {
    props.loadOffers();
  });

  useScrollToTop();

  return <WrappedMain {...props} />;
};
const mapStateToProps = (state) => ({
  locations: locationsSelector(state),
  city: citySelector(state),
  placeCardsList: offersInCitySelector(state),
  isAuthenticated: authSelector(state),
});

const mapDispatchToProps = {
  setCity,
  loadOffers,
  setFavorite,
};


MainContainer.propTypes = {
  placeCardsList: PropTypes.array.isRequired,
  locations: PropTypes.any,
  setCity: PropTypes.func,
  city: PropTypes.string,
  setFavorite: PropTypes.func.isRequired,
  loadOffers: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

const WrappedMainContainer = connect(mapStateToProps, mapDispatchToProps)(MainContainer);
export {WrappedMainContainer as MainContainer};
