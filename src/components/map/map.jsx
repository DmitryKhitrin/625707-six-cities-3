import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import leaflet from "leaflet";

const SETTINGS = {
  zoom: 13,
};

export class Map extends PureComponent {

  _getIcon() {
    return leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30],
    });
  }

  _getActiveIcon() {
    return leaflet.icon({
      iconUrl: `img/pin-active.svg`,
      iconSize: [30, 30],
    });
  }

  _initCities() {
    const {city} = this.props;
    const {location} = city;
    this._map = leaflet.map(`map`, {
      center: location,
      zoom: SETTINGS.zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(location, this._zoom);
    leaflet
             .tileLayer(
                 `https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`,
                 {
                   attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
                 }
             )
             .addTo(this._map);

    this._addMarkers();
  }

  _addMarkers() {
    const {placeCardsList, activeCard} = this.props;
    this._activeCard = activeCard;
    this._markersLayer = leaflet.layerGroup().addTo(this._map);

    placeCardsList.map((card) => {
      const icon =
        this._activeCard === card.id ? this._getActiveIcon() : this._getIcon();
      return leaflet
        .marker(card.location, {icon, title: card.title})
        .addTo(this._markersLayer);
    }

    );
  }

  componentDidMount() {
    this._initCities();
  }

  componentDidUpdate() {
    this._markersLayer.clearLayers();
    this._map.setView(this.props.city.location, this._zoom);
    this._addMarkers();
  }

  render() {
    return <div id="map" style={{height: this.props.height}} />;
  }
}

Map.propTypes = {
  city: PropTypes.shape({
    location: PropTypes.arrayOf(PropTypes.number, PropTypes.number),
    name: PropTypes.string
  }),
  placeCardsList: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        price: PropTypes.number,
        previewImage: PropTypes.string,
        title: PropTypes.string,
        rating: PropTypes.string,
        type: PropTypes.string,
        isPremium: PropTypes.bool,
        location: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ),
  height: PropTypes.number.isRequired,
  activeCard: PropTypes.string
};

