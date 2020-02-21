import React from "react";
import {PropTypes} from "prop-types";

export const CityTab = ({cityName}) => {
  return (
    <li className="locations__item">
      <a className="locations__item-link tabs__item" href="#">
        <span>{cityName}</span>
      </a>
    </li>
  );
};

CityTab.propTypes = {
  cityName: PropTypes.string.isRequired,
};
