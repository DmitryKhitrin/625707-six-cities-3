import React, {PureComponent} from "react";
import {CityTab} from "../city-tab/city-tab.jsx";

export class CitiesTabsList extends PureComponent {
  constructor(props) {
    super(props);
  }
  render(props) {
    const {citiesList} = props;
    return (
      <div className="cities tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {citiesList.map((city) => {
              const {id, cityName} = city;
              return <CityTab key={id} cityName={cityName} />;
            })}
          </ul>
        </section>
      </div>
    );
  }
}
