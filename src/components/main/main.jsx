import React from 'react';
import {PropTypes} from 'prop-types';
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";
import {CitiesTabsList} from "../cities-tabs-list/cities-tabs-list.jsx";
import {PlacesSortingForm} from "../places-sorting-form/places-sorting-form.jsx";
import {sortTypes} from "../../sortTypes.js";
import {sortOffers} from "../../utils.js";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePlaceCard: null,
      sortType: sortTypes.POPULAR,
      isMenuOpen: false
    };

    this._setActivePlaceCard = this._setActivePlaceCard.bind(this);
    this._removeActivePlaceCard = this._removeActivePlaceCard.bind(this);
    this._setSortType = this._setSortType.bind(this);
    this._toggleSortMenu = this._toggleSortMenu.bind(this);
  }

  componentDidMount() {
    const {city, getOffers, getLocations} = this.props;
    getOffers(city);
    getLocations();
  }

  _setActivePlaceCard(id) {
    this.setState({
      activePlaceCard: id
    });
  }

  _removeActivePlaceCard() {
    this.setState({
      activePlaceCard: null
    });
  }

  _closeMenu() {
    this.setState({
      isMenuOpen: false
    });
  }

  _toggleSortMenu() {
    this.setState({
      isMenuOpen: !this.state.isMenuOpen,
    });
  }

  _setSortType(evt) {
    this.setState({sortType: evt.target.textContent});
    this._closeMenu();
  }

  render() {
    const {
      onHeaderClick,
      placeCardsList,
      locations,
      setCity,
      getOffers,
      city
    } = this.props;

    const sortedPlaceCardsList = sortOffers(
        this.state.sortType,
        placeCardsList
    );

    const place = locations.find((cityInfo) => cityInfo.cityName === city);
    const location = place ? place.location : undefined;

    return (
      <main className="page__main page__main--index">
        <h1 onClick={onHeaderClick} className="visually-hidden">
          Cities
        </h1>
        <CitiesTabsList
          locations={locations}
          setCity={setCity}
          getOffers={getOffers}
        />
        <div className="cities__places-wrapper">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 onClick={onHeaderClick} className="visually-hidden">
                Places
              </h2>
              <b className="places__found">{`${sortedPlaceCardsList.length} places to stay in ${city}`}</b>
              <PlacesSortingForm
                setSortType={this._setSortType}
                sortType={this.state.sortType}
                isMenuOpen={this.state.isMenuOpen}
                toggleSortMenu={this._toggleSortMenu}
              />
              {placeCardsList.length === 0 ? (
                `No places to stay available`
              ) : (
                <OffersList
                  placeCardsList={sortedPlaceCardsList}
                  onHeaderClick={onHeaderClick}
                  onMouseEnter={this._setActivePlaceCard}
                  onMouseLeave={this._removeActivePlaceCard}
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
                    activeCard={this.state.activePlaceCard}
                  />
                ) : null}
              </section>
            </div>
          </div>
        </div>
      </main>
    );
  }
}

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
};

export default Main;
