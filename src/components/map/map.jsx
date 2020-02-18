import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import leaflet from "leaflet";

export class Map extends PureComponent {
  constructor(props) {
    super(props);
  }

  _initCities() {
    const {placeCardsList, city} = this.props;

    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    const zoom = 12;
    const map = leaflet.map(`map`, {
      center: city,
      zoom,
      zoomControl: false,
      marker: true
    });
    map.setView(city, zoom);
    leaflet
      .tileLayer(
          `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
          {
            attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
          }
      )
      .addTo(map);

    placeCardsList.map((card) => {
      leaflet.marker(card.coords, {icon, title: card.cardName}).addTo(map);
    });
  }

  componentDidMount() {
    this._initCities();
  }

  render() {
    return <div id="map" style={{height: 1000}} />;
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number).isRequired,
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        priceValue: PropTypes.number,
        placeCardImage: PropTypes.string,
        cardName: PropTypes.string,
        starsRating: PropTypes.string,
        roomType: PropTypes.string,
        isPremium: PropTypes.bool,
        coords: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  )
};

