import React, {FC, memo} from "react";

type Props = {
  sortType: string;
  onSetSortType: (T: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  onToggleSortMenu: () => void;
  isMenuOpen: boolean;
}

const PlacesSortingForm: FC<Props> = ({
  sortType = ``,
  onSetSortType = () => {},
  onToggleSortMenu = () => {},
  isMenuOpen = true,
}) => {
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by</span>
      <span
        className="places__sorting-type"
        tabIndex={0}
        onClick={onToggleSortMenu}
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
          tabIndex={0}
          onClick={onSetSortType}
        >
          Popular
        </li>
        <li
          className={`places__option ${
            sortType === `Price: low to high` ? `places__option--active` : ``
          }`}
          tabIndex={0}
          onClick={onSetSortType}
        >
          Price: low to high
        </li>
        <li
          className={`places__option ${
            sortType === `Price: high to low` ? `places__option--active` : ``
          }`}
          tabIndex={0}
          onClick={onSetSortType}
        >
          Price: high to low
        </li>
        <li
          className={`places__option ${
            sortType === `Top rated first` ? `places__option--active` : ``
          }`}
          tabIndex={0}
          onClick={onSetSortType}
        >
          Top rated first
        </li>
      </ul>
    </form>
  );
};

const MemoizedPlacesSortingForm = memo(PlacesSortingForm);
export {MemoizedPlacesSortingForm as PlacesSortingForm};
