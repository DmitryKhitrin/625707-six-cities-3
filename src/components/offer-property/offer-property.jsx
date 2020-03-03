import React from "react";
import PropTypes from "prop-types";
import {ReviewsList} from "../reviews-list/reviews-list.jsx";
import {PropertiesInsideList} from "../properties-inside-list/properties-inside-list.jsx";
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";

export const OfferPropperty = ({
  // placePhotosList = [],
  offerHeader = ``,
  // descriptions = ``,
  isPremium,
  placeType = ``,
  rating = ``,
  bedroomsCount = ``,
  maxPeopleCount = 4,
  price = 120,
  amenitiesList = [],
  reviews,
  offersList,
  // hostInformation
}) => {
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
      <div style={{display: `none`}}>
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
        <header className="header">
          <div className="container">
            <div className="header__wrapper">
              <div className="header__left">
                <a className="header__logo-link" href="main.html">
                  <img
                    className="header__logo"
                    src="img/logo.svg"
                    alt="6 cities logo"
                    width={81}
                    height={41}
                  />
                </a>
              </div>
              <nav className="header__nav">
                <ul className="header__nav-list">
                  <li className="header__nav-item user">
                    <a
                      className="header__nav-link header__nav-link--profile"
                      href="#"
                    >
                      <div className="header__avatar-wrapper user__avatar-wrapper"></div>
                      <span className="header__user-name user__name">
                        Oliver.conner@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        <main className="page__main page__main--property">
          <section className="property">
            <div className="property__gallery-container container">
              <div className="property__gallery">
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="img/room.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="img/apartment-02.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="img/apartment-03.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="img/studio-01.jpg"
                    alt="Photo studio"
                  />
                </div>
                <div className="property__image-wrapper">
                  <img
                    className="property__image"
                    src="img/apartment-01.jpg"
                    alt="Photo studio"
                  />
                </div>
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
                    <span style={{width: rating}} />
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
                <PropertiesInsideList propertyInside={amenitiesList} />
                <div className="property__host">
                  <h2 className="property__host-title">Meet the host</h2>
                  <div className="property__host-user user">
                    <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                      <img
                        className="property__avatar user__avatar"
                        src="img/avatar-angelina.jpg"
                        width={74}
                        height={74}
                        alt="Host avatar"
                      />
                    </div>
                    <span className="property__user-name">Angelina</span>
                  </div>
                  <div className="property__description">
                    <p className="property__text">
                      A quiet cozy and picturesque that hides behind a a river
                      by the unique lightness of Amsterdam. The building is
                      green and from 18th century.
                    </p>
                    <p className="property__text">
                      An independent House, strategically located between
                      Rembrand Square and National Opera, but where the bustle
                      of the city comes to rest in this alley flowery and
                      colorful.
                    </p>
                  </div>
                </div>
                <section className="property__reviews reviews">
                  <h2 className="reviews__title">
                    Reviews &middot;
                    <span className="reviews__amount">{reviews.length}</span>
                  </h2>
                  <ReviewsList reviews={reviews} />
                  <form className="reviews__form form" action="#" method="post">
                    <label
                      className="reviews__label form__label"
                      htmlFor="review"
                    >
                      Your review
                    </label>
                    <div className="reviews__rating-form form__rating">
                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        defaultValue={5}
                        id="5-stars"
                        type="radio"
                      />
                      <label
                        htmlFor="5-stars"
                        className="reviews__rating-label form__rating-label"
                        title="perfect"
                      >
                        <svg
                          className="form__star-image"
                          width={37}
                          height={33}
                        >
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        defaultValue={4}
                        id="4-stars"
                        type="radio"
                      />
                      <label
                        htmlFor="4-stars"
                        className="reviews__rating-label form__rating-label"
                        title="good"
                      >
                        <svg
                          className="form__star-image"
                          width={37}
                          height={33}
                        >
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        defaultValue={3}
                        id="3-stars"
                        type="radio"
                      />
                      <label
                        htmlFor="3-stars"
                        className="reviews__rating-label form__rating-label"
                        title="not bad"
                      >
                        <svg
                          className="form__star-image"
                          width={37}
                          height={33}
                        >
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        defaultValue={2}
                        id="2-stars"
                        type="radio"
                      />
                      <label
                        htmlFor="2-stars"
                        className="reviews__rating-label form__rating-label"
                        title="badly"
                      >
                        <svg
                          className="form__star-image"
                          width={37}
                          height={33}
                        >
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                      <input
                        className="form__rating-input visually-hidden"
                        name="rating"
                        defaultValue={1}
                        id="1-star"
                        type="radio"
                      />
                      <label
                        htmlFor="1-star"
                        className="reviews__rating-label form__rating-label"
                        title="terribly"
                      >
                        <svg
                          className="form__star-image"
                          width={37}
                          height={33}
                        >
                          <use xlinkHref="#icon-star" />
                        </svg>
                      </label>
                    </div>
                    <textarea
                      className="reviews__textarea form__textarea"
                      id="review"
                      name="review"
                      placeholder="Tell how was your stay, what you like and what can be improved"
                      defaultValue={``}
                    />
                    <div className="reviews__button-wrapper">
                      <p className="reviews__help">
                        To submit review please make sure to set{` `}
                        <span className="reviews__star">rating</span> and
                        describe your stay with at least{` `}
                        <b className="reviews__text-amount">50 characters</b>.
                      </p>
                      <button
                        className="reviews__submit form__submit button"
                        type="submit"
                        disabled
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </section>
              </div>
            </div>
            <section className="property__map map">
              <Map
                city={[52.38333, 4.9]}
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
                  onMouseEnter={jest.fn()}
                  onMouseLeave={jest.fn()}
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
        id: PropTypes.string.isRequired,
        reviewsDate: PropTypes.string.isRequired,
        reviewsText: PropTypes.string.isRequired,
        reviewsRating: PropTypes.string.isRequired,
        reviewsUserName: PropTypes.string.isRequired,
        reviewsAvatar: PropTypes.string.isRequired
      })
  ),
  placePhotosList: PropTypes.arrayOf(PropTypes.string),
  offerHeader: PropTypes.string.isRequired,
  descriptions: PropTypes.arrayOf(PropTypes.string.isRequired),
  isPremium: PropTypes.bool.isRequired,
  placeType: PropTypes.string.isRequired,
  rating: PropTypes.string.isRequired,
  bedroomsCount: PropTypes.string.isRequired,
  maxPeopleCount: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
  amenitiesList: PropTypes.arrayOf(PropTypes.string),
  hostInformation: PropTypes.shape({
    hostPhoto: PropTypes.string,
    hostName: PropTypes.string,
    isSuper: PropTypes.bool
  }),
  offersList: PropTypes.array.isRequired,
};
