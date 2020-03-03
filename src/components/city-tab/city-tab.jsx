import React, {useCallback, memo} from "react";
import {PropTypes} from "prop-types";

const CityTab = ({cityName, setCity, isActive}) => {
  const onClick = useCallback(() => {
    setCity(cityName);
  }, [cityName, setCity]);
  return (
    <li className="locations__item" onClick={onClick}>
      <a
        className={`locations__item-link tabs__item ${
          isActive ? `tabs__item--active` : ``
        }`}
        href="#"
      >
        <span>{cityName}</span>
      </a>
    </li>
  );
};

const MemoizedCityTab = memo(CityTab);
export {MemoizedCityTab as CityTab};

CityTab.propTypes = {
  cityName: PropTypes.string.isRequired,
  setCity: PropTypes.func.isRequired,
  isActive: PropTypes.bool.isRequired
};
