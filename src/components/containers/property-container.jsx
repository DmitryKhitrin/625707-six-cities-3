import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {OfferPropperty} from "../offer-property/offer-property.jsx";
import {useScrollToTop} from '../../hooks/use-scroll-to-top.js';
import {setFavorite} from "../../redux/offers/offer-actions.js";
import {authSelector} from "../../redux/user/user-selectors.js";
import {commentsSelector, choosedSelector, nearbySelector} from "../../redux/property/property-selectors.js";
import {
  getCommentsAcync,
  getNearbyAsync,
  getChoosedOfferAsync,
} from '../../redux/property/property-actions.js';

const PropertyContainer = ({
  match,
  currentOffer,
  getChoosedOfferAsync: getChoosedOffer,
  getCommentsAcync: getComments,
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

  return (
    <OfferPropperty
      {...currentOffer}
      isAuthenticated={isAuthenticated}
      setFavorite={setFavoriteCard}
      reviews={reviews}
      offersList={nearby}
    />
  );
};
const mapStateToProps = (state) => ({
  currentOffer: choosedSelector(state),
  isAuthenticated: authSelector(state),
  reviews: commentsSelector(state),
  nearby: nearbySelector(state),
});

const mapDispatchToProps = {
  getChoosedOfferAsync,
  setFavorite,
  getCommentsAcync,
  getNearbyAsync,
};

PropertyContainer.propTypes = {
  setCity: PropTypes.func,
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
