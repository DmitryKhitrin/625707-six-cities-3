import React, {FC, useCallback, memo} from 'react';
import {useHistory} from "react-router-dom";
import {ReviewsList} from "../reviews-list/reviews-list";
import {PropertiesInsideList} from "../properties-inside-list/properties-inside-list";
import {OffersList} from "../offers-list/offers-list";
import {Map} from "../map/map";
import {FeedbackFrom} from "../feedback-form/feedback-form";
import {ParsedOfferCard, ParsedComment} from "../../utils/utils";

type Props = ParsedOfferCard & {
  isAuthenticated: boolean;
  setFavorite: (T: string, S: number) => void;
  reviews: ParsedComment[];
  offersList: ParsedOfferCard[];
}

const OfferPropperty: FC<Props> = ({
  images = [],
  title,
  description = ``,
  isPremium,
  type = ``,
  rating = ``,
  bedrooms = ``,
  maxAdults = 4,
  price = 120,
  goods = [],
  reviews = [],
  offersList = [],
  isAuthenticated = false,
  host = {},
  city = {},
  isFavorite,
  setFavorite,
  id,
}) => {
  const {personPhoto = ``, personName = ``} = host;
  const {name, location} = city;
  const history = useHistory();

  const onFavoriteClick = useCallback(
      () => (isAuthenticated ? setFavorite(id, Number(!isFavorite)) : history.push(`/login`)),
      [setFavorite, isAuthenticated, id, isFavorite, history],
  );
  const premium = isPremium ? (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  ) : null;
  return (
    <main className="page__main page__main--property">
      <section className="property">
        <div className="property__gallery-container container">
          <div className="property__gallery">
            {images.map((item, index) => {
              return (
                <div key={index} className="property__image-wrapper">
                  <img
                    className="property__image"
                    src={item}
                    alt="Photo studio"
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div className="property__container container">
          <div className="property__wrapper">
            {premium}
            <div className="property__name-wrapper">
              <h1 className="property__name">{title}</h1>
              <button
                className="property__bookmark-button button"
                type="button"
                onClick={onFavoriteClick}
              >
                <svg
                  className="property__bookmark-icon"
                  width={31}
                  height={33}
                >
                  <use xlinkHref="#icon-bookmark" />
                </svg>
                <span className="visually-hidden">To bookmarks</span>
              </button>
            </div>
            <div className="property__rating rating">
              <div className="property__stars rating__stars">
                <span style={{width: rating}} />
                <span className="visually-hidden">Rating</span>
              </div>
              <span className="property__rating-value rating__value">4.8</span>
            </div>
            <ul className="property__features">
              <li className="property__feature property__feature--entire">
                {type}
              </li>
              <li className="property__feature property__feature--bedrooms">
                {bedrooms}
              </li>
              <li className="property__feature property__feature--adults">
                                      Max {maxAdults} adults
              </li>
            </ul>
            <div className="property__price">
              <b className="property__price-value">€{price}</b>
              <span className="property__price-text">&nbsp;night</span>
            </div>
            <PropertiesInsideList propertyInside={goods} />
            <div className="property__host">
              <h2 className="property__host-title">Meet the host</h2>
              <div className="property__host-user user">
                <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                  <img
                    className="property__avatar user__avatar"
                    src={personPhoto}
                    width={74}
                    height={74}
                    alt="Host avatar"
                  />
                </div>
                <span className="property__user-name">{personName}</span>
              </div>
              <div className="property__description">
                <p className="property__text">{description}</p>
              </div>
            </div>
            <section className="property__reviews reviews">
              <h2 className="reviews__title">
                                      Reviews &middot;
                <span className="reviews__amount">{reviews.length}</span>
              </h2>
              <ReviewsList reviews={reviews} />
              {isAuthenticated ? <FeedbackFrom id={id} /> : null}
            </section>
          </div>
        </div>
        <section className="property__map map">
          <Map
            city={{location, name}}
            placeCardsList={[...offersList, {id, location, title}]}
            activeCard={id}
            height={600}
          />
        </section>
      </section>
      <div className="container">
        <section className="near-places places">
          <h2 className="near-places__title">Other places in the neighbourhood</h2>
          <div className="near-places__list places__list">
            <OffersList
              placeCardsList={offersList}
              onMouseEnter={() => {}}
              onMouseLeave={() => {}}
              isAuthenticated={isAuthenticated}
              setFavorite={setFavorite}
            />
          </div>
        </section>
      </div>
    </main>
  );
};

const MemoizedOfferPropperty = memo(OfferPropperty);
export {MemoizedOfferPropperty as OfferPropperty};

