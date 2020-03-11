import React from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {useMountEffect} from "../../hooks/useMountEffect.js";
import {
  setCity,
  getFavoriteAsync,
  setFavorite
} from "../../redux/offers/offer-actions.js";
import {Favorites} from "../favorites/favorites.jsx";

const FavoritesContainer = (props) => {
  useMountEffect(() => {
    props.getFavoriteAsync();
  });
  return <Favorites {...props} />;
};

const mapStateToProps = ({offer}) => {
  return {
    favorites: offer.favorites
  };
};

const mapDispatchToProps = {
  setCity,
  getFavoriteAsync,
  setFavorite,
};

FavoritesContainer.propTypes = {
  setCity: PropTypes.func,
  getFavoriteAsync: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
