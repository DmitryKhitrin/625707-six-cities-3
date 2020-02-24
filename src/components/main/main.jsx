import React from 'react';
import {PropTypes} from 'prop-types';
import {OffersList} from "../offers-list/offers-list.jsx";
import {Map} from "../map/map.jsx";
import {CitiesTabsList} from "../cities-tabs-list/cities-tabs-list.jsx";

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {city, getOffers, getLocations} = this.props;
    getOffers(city);
    getLocations();
  }

  render() {
    const {
      onHeaderClick,
      placeCardsList,
      locations,
      setCity,
      getOffers
    } = this.props;
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
              <b className="places__found">{`${placeCardsList.length} places to stay in Amsterdam`}</b>
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
              <OffersList
                placeCardsList={placeCardsList}
                onHeaderClick={onHeaderClick}
              />
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  city={[52.38333, 4.9]}
                  placeCardsList={placeCardsList}
                  height={1000}
                />
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
