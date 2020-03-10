import React from "react";
import PropTypes from "prop-types";
import {ReviewsList} from "../reviews-list/reviews-list.jsx";
import {PropertiesInsideList} from "../properties-inside-list/properties-inside-list.jsx";
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";
import {FeedbackFrom} from "../feedback-form/feedback-form.jsx";

export const OfferPropperty = ({
  images = [],
  offerHeader = ``,
  description = ``,
  // descriptions = ``,
  isPremium,
  placeType = ``,
  rating = ``,
  bedroomsCount = ``,
  maxPeopleCount = 4,
  price = 120,
  goods = [],
  reviews = [],
  offersList = [],
  isAuthenticated = true,
  host = {},
  offerCity = {},
}) => {
  const {hostPhoto, hostName} = host;
  const {name = ``, location = []} = offerCity;
  const premium = isPremium ? (
    <div className="property__mark">
      <span>Premium</span>
    </div>
  ) : null;
  return (
    <div>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>6 cities: property</title>
      <link rel="stylesheet" href="css/main.css" />
      <div style={{ display: `none` }}>
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-arrow-select" viewBox="0 0 7 4">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M0 0l3.5 2.813L7 0v1.084L3.5 4 0 1.084V0z"
            />
          </symbol>
          <symbol id="icon-bookmark" viewBox="0 0 17 18">
            <path d="M3.993 2.185l.017-.092V2c0-.554.449-1 .99-1h10c.522 0 .957.41.997.923l-2.736 14.59-4.814-2.407-.39-.195-.408.153L1.31 16.44 3.993 2.185z" />
          </symbol>
          <symbol id="icon-star" viewBox="0 0 13 12">
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.5 9.644L10.517 12 9.451 7.56 13 4.573l-4.674-.386L6.5 0 4.673 4.187 0 4.573 3.549 7.56 2.483 12 6.5 9.644z"
            />
          </symbol>
        </svg>
      </div>
      <div className="page">
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
                  <h1 className="property__name">{offerHeader}</h1>
                  <button
                    className="property__bookmark-button button"
                    type="button"
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
                    <span style={{ width: rating }} />
                    <span className="visually-hidden">Rating</span>
                  </div>
                  <span className="property__rating-value rating__value">
                    4.8
                  </span>
                </div>
                <ul className="property__features">
                  <li className="property__feature property__feature--entire">
                    {placeType}
                  </li>
                  <li className="property__feature property__feature--bedrooms">
                    {bedroomsCount}
                  </li>
                  <li className="property__feature property__feature--adults">
                    Max {maxPeopleCount} adults
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
                        src={hostPhoto}
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">{hostName}</span>
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
                  {isAuthenticated ? <FeedbackFrom /> : null}
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                city={{ location, name }}
                placeCardsList={offersList}
                height={600}
              />
            </section>
          </section>
          <div className="container">
            <section className="near-places places">
              <h2 className="near-places__title">
                Other places in the neighbourhood
              </h2>
              <div className="near-places__list places__list">
                <OffersList
                  placeCardsList={offersList}
                  onHeaderClick={() => {}}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                />
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
};

OfferPropperty.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        reviewsDate: PropTypes.string,
        reviewsText: PropTypes.string,
        reviewsRating: PropTypes.string,
        reviewsUserName: PropTypes.string,
        reviewsAvatar: PropTypes.string
      })
  ),
  images: PropTypes.arrayOf(PropTypes.string),
  offerHeader: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  isPremium: PropTypes.bool,
  placeType: PropTypes.string,
  rating: PropTypes.string,
  bedroomsCount: PropTypes.string,
  maxPeopleCount: PropTypes.number,
  price: PropTypes.number,
  goods: PropTypes.arrayOf(PropTypes.string),
  host: PropTypes.shape({
    hostPhoto: PropTypes.string,
    hostName: PropTypes.string,
    isSuper: PropTypes.bool
  }),
  offersList: PropTypes.array,
  isAuthenticated: PropTypes.bool,
  description: PropTypes.string,
  offerCity: PropTypes.shape({
    name: PropTypes.string,
    location: PropTypes.array
  })
};
