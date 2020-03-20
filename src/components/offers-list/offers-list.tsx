import React, {memo, FC} from "react";
import {useHistory} from "react-router-dom";
import {PlaceCard} from "../place-card/place-card";
import {ParsedOfferCard} from "../../utils/utils";

type Props = {
  placeCardsList: ParsedOfferCard[];
  onMouseEnter: (T: string) => void;
  onMouseLeave: () => void;
  setFavorite: (id: string, hotel: number) => void;
  isAuthenticated: boolean;
}

const OffersList: FC<Props> = ({
  placeCardsList,
  onMouseEnter = () => {},
  onMouseLeave = () => {},
  setFavorite,
  isAuthenticated,
}) => {
  const history = useHistory();
  return (
    <div className="cities__places-list places__list tabs__content">
      {placeCardsList.map(
          ({
            id,
            price,
            previewImage,
            title,
            rating,
            type,
            isPremium,
            isFavorite
          }) => {
            const handleFavoriteClick = () =>
              isAuthenticated ? setFavorite(id, Number(!isFavorite)) : history.push(`/login`);
            return (
              <div key={id}>
                <PlaceCard
                  id={id}
                  isPremium={isPremium}
                  type={type}
                  rating={rating}
                  price={price}
                  previewImage={previewImage}
                  title={title}
                  onMouseEnter={onMouseEnter}
                  onMouseLeave={onMouseLeave}
                  isFavorite={isFavorite}
                  onFavoriteClick={handleFavoriteClick}
                />
              </div>
            );
          }
      )}
    </div>
  );
};

const MemoizedOffersList = memo(OffersList);
export {MemoizedOffersList as OffersList};
