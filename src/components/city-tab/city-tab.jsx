import React, {useCallback} from "react";
import {PropTypes} from "prop-types";

export const CityTab = ({cityName, setCity, getOffers}) => {
  const onClick = useCallback(() => {
    setCity(cityName);
    getOffers(cityName);
  }, [cityName, setCity, getOffers]);
  return (
    <li className="locations__item" onClick={onClick}>
      <a className="locations__item-link tabs__item" href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
};

CityTab.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  getOffers: PropTypes.func.isRequired
};
