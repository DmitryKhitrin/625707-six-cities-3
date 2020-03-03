import React, {memo} from "react";
import {PropTypes} from "prop-types";
import {CityTab} from "../city-tab/city-tab.jsx";

const CitiesTabsList = ({locations = [], setCity, activeCity}) => {
  return (
    <div className="cities tabs">
      <section className="locations container">
        <ul className="locations__list tabs__list">
          {locations.map((city, i) => {
            const {name} = city;
            return (
              <CityTab
                key={i}
                cityName={name}
                setCity={setCity}
                isActive={activeCity === name}
              />
            );
          })}
        </ul>
      </section>
    </div>
  );
};

const MemoizedCitiesTabsList = memo(CitiesTabsList);
export {MemoizedCitiesTabsList as CitiesTabsList};


CitiesTabsList.propTypes = {
  locations: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        cityName: PropTypes.string,
        location: PropTypes.any
      })
  ).isRequired,
  setCity: PropTypes.func.isRequired,
  activeCity: PropTypes.string.isRequired,
};
