import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import {CityTab} from "../city-tab/city-tab.jsx";

export class CitiesTabsList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const {locations = [], setCity, getOffers} = this.props;
    return (
      <div className="cities tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {locations.map((city) => {
              const {id, cityName} = city;
              return (
                <CityTab
                  key={id}
                  cityName={cityName}
                  setCity={setCity}
                  getOffers={getOffers}
                />
              );
            })}
          </ul>
        </section>
      </div>
    );
  }
}

CitiesTabsList.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        cityName: PropTypes.string,
        location: PropTypes.any
      })
  ).isRequired,
  setCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired
};
