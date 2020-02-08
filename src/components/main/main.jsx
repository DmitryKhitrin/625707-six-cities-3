import React from 'react';
import {PropTypes} from 'prop-types';
import {PlaceCard} from '../place-card/place-card.jsx';

export const Main = ({rentCount, placeCardsList, onHeaderClick}) => {
  return (
    <main className="page__main page__main--index">
      <h1 onClick={onHeaderClick} className="visually-hidden">
        Cities
      </h1>
      <div className="cities tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Paris</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Cologne</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Brussels</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item tabs__item--active">
                <span>Amsterdam</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Hamburg</span>
              </a>
            </li>
            <li className="locations__item">
              <a className="locations__item-link tabs__item" href="#">
                <span>Dusseldorf</span>
              </a>
            </li>
          </ul>
        </section>
      </div>
      <div className="cities__places-wrapper">
        <div className="cities__places-container container">
          <section className="cities__places places">
            <h2 onClick={onHeaderClick} className="visually-hidden">
              Places
            </h2>
            <b className="places__found">{`${rentCount} places to stay in Amsterdam`}</b>
            <form className="places__sorting" action="#" method="get">
              <span className="places__sorting-caption">Sort by</span>
              <span className="places__sorting-type" tabIndex="0">
                Popular
                <svg className="places__sorting-arrow" width="7" height="4">
                  <use xlinkHref="#icon-arrow-select" />
                </svg>
              </span>
              <ul className="places__options places__options--custom places__options--opened">
                <li
                  className="places__option places__option--active"
                  tabIndex="0"
                >
                  Popular
                </li>
                <li className="places__option" tabIndex="0">
                  Price: low to high
                </li>
                <li className="places__option" tabIndex="0">
                  Price: high to low
                </li>
                <li className="places__option" tabIndex="0">
                  Top rated first
                </li>
              </ul>

              <select className="places__sorting-type" id="places-sorting">
                <option className="places__option" value="popular">
                  Popular
                </option>
                <option className="places__option" value="to-high">
                  Price: low to high
                </option>
                <option className="places__option" value="to-low">
                  Price: high to low
                </option>
                <option className="places__option" value="top-rated">
                  Top rated first
                </option>
              </select>
            </form>
            <div className="cities__places-list places__list tabs__content">
              {placeCardsList.map(
                  (
                      {
                        priceValue,
                        placeCardImage,
                        cardName,
                        starsRating,
                        roomType,
                        isPremium
                      },
                      i
                  ) => {
                    return (
                      <PlaceCard
                        key={i}
                        isPremium={isPremium}
                        roomType={roomType}
                        starsRating={starsRating}
                        priceValue={priceValue}
                        placeCardImage={placeCardImage}
                        cardName={cardName}
                        onHeaderClick={onHeaderClick}
                      />
                    );
                  }
              )}
            </div>
          </section>
          <div className="cities__right-section">
            <section className="cities__map map" />
          </div>
        </div>
      </div>
    </main>
  );
};

Main.propTypes = {
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        priceValue: PropTypes.number,
        placeCardImage: PropTypes.string,
        cardName: PropTypes.string,
        starsRating: PropTypes.string,
        roomType: PropTypes.string,
        isPremium: PropTypes.bool
      })
  ).isRequired,
  onHeaderClick: PropTypes.func.isRequired,
  rentCount: PropTypes.number.isRequired
};