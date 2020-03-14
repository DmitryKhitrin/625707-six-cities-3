import React, {memo, useMemo} from "react";
import PropTypes from "prop-types";
import {FavoriteLoacation} from "../favorite-location/favorite-location.jsx";
import {EmptyFavorites} from "../empty-favorites/empty-favorites";

const Favorites = ({favorites = {}, setFavorite = () => {}, getFavoriteAsync = () => {}}) => {
  const isFavoritesEmpty = useMemo(() => Object.keys(favorites).length > 0, [
    favorites
  ]);
  return (
    <main className="page__main page__main--favorites">
      <div className="page__favorites-container container">
        {isFavoritesEmpty ? (
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              {Object.keys(favorites).map((city, i) => {
                const favoritesForCity = favorites[city];
                return (
                  <li className="favorites__locations-items" key={i}>
                    <FavoriteLoacation
                      city={city}
                      favorites={favoritesForCity}
                      setFavorite={setFavorite}
                      getFavoriteAsync={getFavoriteAsync}
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        ) : (
          <EmptyFavorites />
        )}
      </div>
    </main>
  );
};

const MemoizedFavorites = memo(Favorites);
export {MemoizedFavorites as Favorites};

Favorites.propTypes = {
  favorites: PropTypes.object,
  setFavorite: PropTypes.func,
  getFavoriteAsync: PropTypes.func
};
