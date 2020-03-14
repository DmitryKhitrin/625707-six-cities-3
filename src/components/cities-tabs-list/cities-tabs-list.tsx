import React, {FC, memo} from "react";
import {CityTab} from "../city-tab/city-tab";
import {ParsedCity} from "../../utils/utils";


type Props = {
  setCity: (city: string) => void;
  activeCity: string;
  locations: ParsedCity[]
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
