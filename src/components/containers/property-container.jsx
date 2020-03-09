import React, {useMemo} from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {OfferPropperty} from "../offer-property/offer-property.jsx";
import {useMountEffect} from "../../hooks/useMountEffect.js";
import {
  offersInCitySelector
} from "../../redux/offers/offer-selectors.js";

import {
  loadOffers,
} from "../../redux/offers/offer-actions.js";

const PropertyContainer = ({
  match,
  placeCardsList,
  loadOffers: loadOffersCards
}) => {
  const {id} = match.params;

  useMountEffect(() => {
    loadOffersCards();
  });

  const currentOffer = useMemo(() => placeCardsList.find((item) => item.id === id), [placeCardsList, id]);

  return <OfferPropperty {...currentOffer} />;
};
const mapStateToProps = (state) => ({
  placeCardsList: offersInCitySelector(state),
});

const mapDispatchToProps = {
  loadOffers,
};

PropertyContainer.propTypes = {
  placeCardsList: PropTypes.array.isRequired,
  locations: PropTypes.any,
  setCity: PropTypes.func,
  city: PropTypes.string,
  setFavorite: PropTypes.func.isRequired,
  loadOffers: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    })
  })
};

const WrappedPropertyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyContainer);
export {WrappedPropertyContainer as PropertyContainer};
