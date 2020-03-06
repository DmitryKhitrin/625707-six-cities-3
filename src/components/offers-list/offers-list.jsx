import React, {memo} from "react";
import {PropTypes} from "prop-types";
import {PlaceCard} from "../place-card/place-card.jsx";

const OffersList = ({
  placeCardsList,
  onMouseEnter,
  onMouseLeave,
  setFavorite,
}) => {
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
            const onFavClick = () => (setFavorite(id, Number(!isFavorite)));
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
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        price: PropTypes.number,
        previewImage: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.string,
        type: PropTypes.string,
        isPremium: PropTypes.bool,
        isFavorite: PropTypes.bool
      })
  ).isRequired,
  onMouseEnter: PropTypes.func.isRequired,
  onMouseLeave: PropTypes.func.isRequired,
  setFavorite: PropTypes.func,
};
