import React, {memo} from "react";
import PropTypes from "prop-types";
import {PlaceCard} from "../place-card/place-card";

const FavoriteLoacation = ({
  city,
  favorites,
  setFavorite = () => {},
  getFavoriteAsync = () => {}
}) => {
  return (
    <>
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <a className="locations__item-link" href="#">
            <span>{city}</span>
          </a>
        </div>
      </div>
      <div className="favorites__places">
        {favorites.map((card, i) => {
          const {id, isFavorite} = card;
          const onFavClick = () => {
            setFavorite(id, Number(!isFavorite));
            getFavoriteAsync();
          };
          return <PlaceCard key={i} {...card} setFavorite={onFavClick} />;
        })}
      </div>
    </>
  );
};

const MemoizedFavoriteLoacation = memo(FavoriteLoacation);
export {MemoizedFavoriteLoacation as FavoriteLoacation};

FavoriteLoacation.propTypes = {
  favorites: PropTypes.array,
  city: PropTypes.string,
  setFavorite: PropTypes.func,
  getFavoriteAsync: PropTypes.func
};
