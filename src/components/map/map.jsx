import React, {PureComponent} from "react";
import {PropTypes} from "prop-types";
import leaflet from "leaflet";

const SETTINGS = {
  zoom: 12,
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
    this._map = leaflet.map(`map`, {
      center: city,
      zoom: SETTINGS.zoom,
      zoomControl: false,
      marker: true
    });
    this._map.setView(city, this._zoom);
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
        .marker(card.coords, {icon, title: card.cardName})
        .addTo(this._markersLayer);
    }

    );
  }

  componentDidMount() {
    this._initCities();
  }

  componentDidUpdate(prevProps) {
    if (
      this.props.city !== prevProps.city ||
      this.props.activeCard !== this._activeCard
    ) {
      this._markersLayer.clearLayers();
      this._map.setView(this.props.city, this._zoom);
      this._addMarkers();
    }
  }

  render() {
    return <div id="map" style={{height: this.props.height}} />;
  }
}

Map.propTypes = {
  city: PropTypes.arrayOf(PropTypes.number),
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
  ),
  height: PropTypes.number.isRequired,
  activeCard: PropTypes.string,
};

