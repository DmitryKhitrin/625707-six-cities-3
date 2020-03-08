import React from "react";
import {connect} from "react-redux";
import {PropTypes} from "prop-types";
import {useMountEffect} from "../../hooks/useMountEffect.js";
import {
  setCity,
  getFavorite,
  setFavorite
} from "../../redux/offers/offer-actions.js";
import {Favorites} from "../favorites/favorites.jsx";

const FavoritesContainer = (props) => {
  useMountEffect(() => {
    props.getFavorite();
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
  getFavorite,
  setFavorite,
};

FavoritesContainer.propTypes = {
  setCity: PropTypes.func,
  getFavorite: PropTypes.func.isRequired,
  setFavorite: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer);
