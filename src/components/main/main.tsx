import React, {FC, useMemo, memo} from "react";
import {OffersList} from "../offers-list/offers-list";
import {Map} from "../map/map";
import {CitiesTabsList} from "../cities-tabs-list/cities-tabs-list";
import {PlacesSortingForm} from "../places-sorting-form/places-sorting-form";
import {EmptyMain} from "../empty-main/empty-main";
import {sortOffers} from "../../utils/utils";
import {withActiveItem} from "../../hocs/with-active-item";
import {withSortMenu} from "../../hocs/with-sort-menu";
import {ParsedOfferCard, ParsedCity} from "../../utils/utils";

type Props = {
  city: string;
  placeCardsList: ParsedOfferCard[];
  locations: ParsedCity[];
  setCity: (T: string) => void;
  isMenuOpen: boolean;
  onSetSortType: (T: React.MouseEvent<HTMLLIElement, MouseEvent>) => void;
  sortType: string;
  onToggleSortMenu: () => void;
  setActiveItem: () => void;
  removeActiveItem: () => void;
  activeItem: string;
  setFavorite: () => void;
  isAuthenticated: boolean;
}

const Main: FC<Props> = ({
  city,
  placeCardsList = [],
  locations = [],
  setCity,
  isMenuOpen = false,
  onSetSortType = () => {},
  sortType,
  onToggleSortMenu = () => {},
  setActiveItem = () => {},
  removeActiveItem = () => {},
  activeItem,
  setFavorite,
  isAuthenticated,
}) => {
  const sortedPlaceCardsList = useMemo(
      () => sortOffers(sortType, placeCardsList),
      [sortType, placeCardsList]
  );

  const place = useMemo(
      () => locations.find((cityInfo) => cityInfo.name === city),
      [locations, city]
  );
  const location = useMemo(() => place || undefined, [place]);

  return (
    <>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <CitiesTabsList
          locations={locations}
          setCity={setCity}
          activeCity={city}
        />
        {sortedPlaceCardsList && sortedPlaceCardsList.length > 0 ? (
          <div className="cities__places-wrapper">
            <div className="cities__places-container container">
              <section className="cities__places places">
                <h2 className="visually-hidden">Places</h2>
                <b className="places__found">{`${sortedPlaceCardsList.length} places to stay in ${city}`}</b>
                <PlacesSortingForm
                  onSetSortType={onSetSortType}
                  sortType={sortType}
                  isMenuOpen={isMenuOpen}
                  onToggleSortMenu={onToggleSortMenu}
                />
                {placeCardsList.length === 0 ? (
                  `No places to stay available`
                ) : (
                  <OffersList
                    placeCardsList={sortedPlaceCardsList}
                    onMouseEnter={setActiveItem}
                    onMouseLeave={removeActiveItem}
                    setFavorite={setFavorite}
                    isAuthenticated={isAuthenticated}
                  />
                )}
              </section>
              <div className="cities__right-section">
                <section className="cities__map map">
                  {location ? (
                    <Map
                      city={location}
                      placeCardsList={sortedPlaceCardsList}
                      height={4000}
                      activeCard={activeItem}
                    />
                  ) : null}
                </section>
              </div>
            </div>
          </div>
        ) : (
          <EmptyMain city={city} />
        )}
      </main>
    </>
  );
};

const WrappedMain = withSortMenu(withActiveItem(memo(Main)));
export {WrappedMain as Main};
export {Main as TestMain};
