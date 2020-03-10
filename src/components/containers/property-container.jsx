import React, {useMemo} from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {OfferPropperty} from "../offer-property/offer-property.jsx";
import {useMountEffect} from "../../hooks/useMountEffect.js";
import {loadOffers, setFavorite} from "../../redux/offers/offer-actions.js";
import {getCommentsAcyns} from "../../redux/comments/comments-actions.js";

import {
  offersInCitySelector,
  locationsSelector
} from "../../redux/offers/offer-selectors.js";

const PropertyContainer = ({
  match,
  placeCardsList,
  loadOffers: loadOffersCards,
  getCommentsAcyns: getComments,
  locations,
  isAuthenticated,
  setFavorite: setFavoriteCard,
  reviews,
}) => {
  const {id} = match.params;

  useMountEffect(() => {
    loadOffersCards();
    getComments(id);
  });

  const currentOffer = useMemo(
      () => placeCardsList.find((item) => item.id === id),
      [placeCardsList, id]
  );
  const city = useMemo(
      () => locations.find((location) => location.name === currentOffer.city),
      [locations, currentOffer]
  );

  return (
    <OfferPropperty
      {...currentOffer}
      offerCity={city}
      isAuthenticated={isAuthenticated}
      setFavorite={setFavoriteCard}
      reviews={reviews}
    />
  );
};
const mapStateToProps = (state) => ({
  placeCardsList: offersInCitySelector(state),
  locations: locationsSelector(state),
  isAuthenticated: state.user.authorizationStatus === `AUTH`,
  reviews: state.comments.comments,
});

const mapDispatchToProps = {
  loadOffers,
  setFavorite,
  getCommentsAcyns,
};

PropertyContainer.propTypes = {
  placeCardsList: PropTypes.array.isRequired,
  locations: PropTypes.any,
  setCity: PropTypes.func,
  city: PropTypes.string,
  loadOffers: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
  getCommentsAcyns: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
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
