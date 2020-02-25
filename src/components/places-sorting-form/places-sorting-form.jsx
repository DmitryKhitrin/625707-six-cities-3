import React from "react";
import {PropTypes} from "prop-types";

export const PlacesSortingForm = ({
  sortType = ``,
  setSortType = () => {},
  toggleSortMenu = () => {},
  isMenuOpen = true,
}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex="0"
        onClick={toggleSortMenu}
      >
        {sortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select" />
        </svg>
      </span>
      <ul
        className={`places__options places__options--custom ${
          isMenuOpen ? `places__options--opened` : ``
        }`}
      >
        <li
          className={`places__option ${
            sortType === `Popular` ? `places__option--active` : ``
          }`}
          tabIndex="0"
        >
          Popular
        </li>
        <li
          className={`places__option ${
            sortType === `Price: low to high` ? `places__option--active` : ``
          }`}
          tabIndex="0"
          onClick={setSortType}
        >
          Price: low to high
        </li>
        <li
          className={`places__option ${
            sortType === `Price: high to low` ? `places__option--active` : ``
          }`}
          tabIndex="0"
          onClick={setSortType}
        >
          Price: high to low
        </li>
        <li
          className={`places__option ${
            sortType === `Top rated first` ? `places__option--active` : ``
          }`}
          tabIndex="0"
          onClick={setSortType}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
};

PlacesSortingForm.propTypes = {
  sortType: PropTypes.string.isRequired,
  setSortType: PropTypes.func.isRequired,
  toggleSortMenu: PropTypes.func.isRequired,
  isMenuOpen: PropTypes.bool.isRequired
};
