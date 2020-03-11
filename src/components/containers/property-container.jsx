import React, {useMemo, useEffect} from 'react';
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {OfferPropperty} from "../offer-property/offer-property.jsx";
import {useScrollToTop} from '../../hooks/use-scroll-to-top.js';
import {setFavorite} from "../../redux/offers/offer-actions.js";
import {
  getCommentsAcync,
  getNearbyAsync,
  getChoosedOfferAsync,
} from '../../redux/choosed/choosed-actions.js';

import {
  locationsSelector,
  citySelector,
} from '../../redux/offers/offer-selectors.js';

const PropertyContainer = ({
  match,
  currentOffer,
  getChoosedOfferAsync: getChoosedOffer,
  getCommentsAcync: getComments,
  locations,
  isAuthenticated,
  setFavorite: setFavoriteCard,
  reviews,
  nearby,
  getNearbyAsync: getNearby,
}) => {
  const {id} = match.params;
  useScrollToTop();

  useEffect(() => {
    getChoosedOffer(id);
    getNearby(id);
    getComments(id);
  }, [getChoosedOffer, getNearby, getComments, id]);

  const city = useMemo(() => {
    return currentOffer
      ? locations.find((location) => location.name === currentOffer.city)
      : undefined;
  }, [locations, currentOffer]);

  return (
    <OfferPropperty
      {...currentOffer}
      offerCity={city}
      isAuthenticated={isAuthenticated}
      setFavorite={setFavoriteCard}
      reviews={reviews}
      offersList={nearby}
    />
  );
};
const mapStateToProps = (state) => ({
  currentOffer: state.choosed.choosed,
  locations: locationsSelector(state),
  isAuthenticated: state.user.authorizationStatus === `AUTH`,
  reviews: state.choosed.comments,
  nearby: state.choosed.nearby,
  city: citySelector(state),
});

const mapDispatchToProps = {
  getChoosedOfferAsync,
  setFavorite,
  getCommentsAcync,
  getNearbyAsync,
};

PropertyContainer.propTypes = {
  locations: PropTypes.any,
  setCity: PropTypes.func,
  city: PropTypes.string,
  getChoosedOfferAsync: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  setFavorite: PropTypes.func.isRequired,
  getNearbyAsync: PropTypes.func.isRequired,
  getCommentsAcync: PropTypes.func.isRequired,
  reviews: PropTypes.array.isRequired,
  nearby: PropTypes.array,
  currentOffer: PropTypes.object,
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

const WrappedPropertyContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyContainer);
export {WrappedPropertyContainer as PropertyContainer};
