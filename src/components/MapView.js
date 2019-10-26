import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Map, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import data from '../assets/data';
import Markers from './VenueMarkers';

const currentLocation = { lat: 52.52437, lng: 13.41053 };
const zoom = 12;
const markerZoom = 14;

class MapView extends Component {
  state = {
    currentLocation,
    zoom,
  }

  componentDidMount() {
    this.checkUrlWithId();
  }

  // check if a specific url with id is requested
  checkUrlWithId = () => {
    const id = this.props.match.params.id;
    if(id) {
      const {venues} = data;
      const venue = data.venues.filter(venue => venue.id == id);
      if(venue.length) {
        const coordinates = venue[0].geometry;
        this.setState({
          currentLocation: {
            lat: coordinates[0],
            lng: coordinates[1],
          },
          zoom: markerZoom,
        });
      }
    }
  }

  // user clicked on map
  mapClick = e => {
    this.setState({
      currentLocation,
      zoom,
    });
  }

  // user clicked on a marker
  markerClick = (clickedVenueMarker) => {
    const { lat, lng } = clickedVenueMarker.latlng;
    const { id, type } = clickedVenueMarker.target.options;
    this.props.history.push(`/${type}/${id}`);
    this.setState({
      currentLocation: { lat, lng },
      zoom: markerZoom,
    });
  }

  render() {
    const { currentLocation, zoom } = this.state;

    return (
      <Map center={currentLocation} zoom={zoom} onClick={this.mapClick}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
        />

        <Markers venues={data.venues} click={this.markerClick}/>
      </Map>
    );
  }
}

export default withRouter(MapView);
