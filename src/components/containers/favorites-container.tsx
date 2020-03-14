import React, {FC, memo} from "react";
import {connect} from "react-redux";
import {useMountEffect} from "../../hooks/use-mount-effect";
import {
  setCity,
  getFavoriteAsync,
  setFavorite
} from "../../redux/offers/offer-actions";
import {Favorites} from "../favorites/favorites";
import {RootState} from "../../redux/root-reducer";
import {FavoriteMap} from "../../utils/utils";

type Props = {
  setCity: (T: string) => void;
  getFavoriteAsync: () => void;
  setFavorite: (T: string, S: number) => void;
  favorites: FavoriteMap;
}

const FavoritesContainer: FC<Props> = (props) => {
  useMountEffect(() => {
    props.getFavoriteAsync();
  });
  return <Favorites {...props} />;
};

const mapStateToProps = ({offer}: RootState) => {
  return {
    favorites: offer.favorites
  };
};

const mapDispatchToProps = {
  setCity,
  getFavoriteAsync,
  setFavorite,
};

const WrappedFavoritesContainer = memo(connect(mapStateToProps, mapDispatchToProps)(FavoritesContainer));
export {WrappedFavoritesContainer as FavoritesContainer};
