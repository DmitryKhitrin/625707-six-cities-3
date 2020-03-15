import React, {FC, memo} from "react";
import {PlaceCard} from "../place-card/place-card";
import {ParsedOfferCard} from "../../utils/utils";

type Props = {
  setFavorite: (T: string, S: number) => void;
  favorites: ParsedOfferCard[];
  city: string;
  getFavoriteAsync: () => void;
}

const FavoriteLoacation: FC<Props> = ({
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
          const onFavoriteClick = () => {
            setFavorite(id, Number(!isFavorite));
            getFavoriteAsync();
          };
          return <PlaceCard key={id} {...card} onFavoriteClick={onFavoriteClick} />;
        })}
      </div>
    </>
  );
};

const MemoizedFavoriteLocation = memo(FavoriteLoacation);
export {MemoizedFavoriteLocation as FavoriteLoacation};
