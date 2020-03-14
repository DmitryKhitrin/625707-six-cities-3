import React, {PureComponent} from "react";
import leaflet from "leaflet";
import {ParsedOfferCard, ParsedCity} from "../../utils/utils";


type Props = {
  placeCardsList: Pick<ParsedOfferCard, |`id` | `title` | `location`>[];
  city: ParsedCity;
  height: number;
  activeCard: string;
}

const SETTINGS = {
  zoom: 13,
};

export class Map extends PureComponent<Props> {

  _map: leaflet.Map = {} as leaflet.Map;
  _zoom = 13;
  _markersLayer: leaflet.LayerGroup<any> = {} as leaflet.LayerGroup<any>;
  _activeCard = ``;

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
    const {location = [52.38333, 4.9]} = city;
    this._map = leaflet.map(`map`, {
      center: location,
      zoom: SETTINGS.zoom,
      zoomControl: false,
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

    placeCardsList.forEach((card) => {
      const {location, title, id} = card;
      if (!location) {
        return;
      }
      const icon =
        this._activeCard === id ? this._getActiveIcon() : this._getIcon();
      leaflet
        .marker(location, {icon, title})
        .addTo(this._markersLayer);
    }

    );
  }

  componentDidMount() {
    this._initCities();
  }

  componentDidUpdate() {
    const {name, location} = this.props.city;
    if (name && location.length) {
      this._markersLayer.clearLayers();
      this._map.setView(location, this._zoom);
      this._addMarkers();
    }

  }

  render() {
    return <div id="map" style={{height: this.props.height}} />;
  }
}
