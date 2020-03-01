import React, {useEffect, useMemo, memo} from "react";
import {PropTypes} from 'prop-types';
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";
import {CitiesTabsList} from "../cities-tabs-list/cities-tabs-list.jsx";
import {PlacesSortingForm} from "../places-sorting-form/places-sorting-form.jsx";
import {EmptyMain} from "../empty-main/empty-main.jsx";
import {sortOffers} from "../../utils.js";
import {withActiveItem} from "../../hocs/with-active-item.jsx";
import {withSortMenu} from "../../hocs/with-sort-menu.jsx";

const Main = ({
  city,
  getOffers = () => {},
  getLocations = () => {},
  onHeaderClick = () => {},
  placeCardsList = [],
  locations = [],
  setCity,
  isMenuOpen = false,
  setSortType = () => {},
  sortType,
  toggleSortMenu = () => {},
  setActiveItem = () => {},
  removeActiveItem = () => {},
  activeItem
}) => {
  useEffect(() => {
    getOffers(city);
    getLocations();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const sortedPlaceCardsList = useMemo(
      () => sortOffers(sortType, placeCardsList),
      [sortType, placeCardsList]
  );

  const place = useMemo(
      () => locations.find((cityInfo) => cityInfo.cityName === city),
      [locations, city]
  );
  const location = useMemo(() => (place ? place.location : undefined), [place]);

  return (
    <main className="page__main page__main--index">
      <h1 onClick={onHeaderClick} className="visually-hidden">
        Cities
      </h1>
      <CitiesTabsList
        locations={locations}
        setCity={setCity}
        getOffers={getOffers}
        activeCity={city}
      />
      {sortedPlaceCardsList && sortedPlaceCardsList.length > 0 ? (
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 onClick={onHeaderClick} className="visually-hidden">
                Places
              </h2>
              <b className="places__found">{`${sortedPlaceCardsList.length} places to stay in ${city}`}</b>
              <PlacesSortingForm
                setSortType={setSortType}
                sortType={sortType}
                isMenuOpen={isMenuOpen}
                toggleSortMenu={toggleSortMenu}
              />
              {placeCardsList.length === 0 ? (
                `No places to stay available`
              ) : (
                <OffersList
                  placeCardsList={sortedPlaceCardsList}
                  onHeaderClick={onHeaderClick}
                  onMouseEnter={setActiveItem}
                  onMouseLeave={removeActiveItem}
                />
              )}
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                {location ? (
                  <Map
                    city={location}
                    placeCardsList={sortedPlaceCardsList}
                    height={1000}
                    activeCard={activeItem}
                  />
                ) : null}
              </section>
            </div>
          </div>
        </div>
      ) : (
        <EmptyMain city={city}/>
      )}
    </main>
  );
};

Main.propTypes = {
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        priceValue: PropTypes.number,
        placeCardImage: PropTypes.string,
        cardName: PropTypes.string,
        starsRating: PropTypes.string,
        roomType: PropTypes.string,
        isPremium: PropTypes.bool,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ).isRequired,
  locations: PropTypes.any,
  getOffers: PropTypes.func,
  getLocations: PropTypes.func,
  setCity: PropTypes.func,
  city: PropTypes.string,
  onHeaderClick: PropTypes.func.isRequired,
  activeItem: PropTypes.string.isRequired,
  setActiveItem: PropTypes.func.isRequired,
  removeActiveItem: PropTypes.func.isRequired,
  setSortType: PropTypes.func.isRequired,
  sortType: PropTypes.string.isRequired,
  toggleSortMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired,
};

export const WrappedMain = withSortMenu(withActiveItem(memo(Main)));
export default Main;
