import React, {FC, memo} from "react";
import {CityTab} from "../city-tab/city-tab";

type Location = {
  id: string;
  name: string;
  location: number[];
}

type Props = {
  setCity: (city: string) => void;
  activeCity: string;
  locations: Location[]
}

const CitiesTabsList: FC<Props> = ({locations = [], setCity, activeCity}) => {
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
