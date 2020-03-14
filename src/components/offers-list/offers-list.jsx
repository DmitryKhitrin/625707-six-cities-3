import React, {memo} from "react";
import {PropTypes} from "prop-types";
import {useHistory} from "react-router-dom";
import {PlaceCard} from "../place-card/place-card";

const OffersList = ({
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
            const onFavClick = () =>
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
                  setFavorite={onFavClick}
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

OffersList.propTypes = {
  placeCardsList: PropTypes.array.isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setFavorite: PropTypes.func,
  isAuthenticated: PropTypes.bool
};
