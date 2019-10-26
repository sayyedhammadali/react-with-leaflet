import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import { Marker } from 'react-leaflet';
import { VenueLocationIcon } from './VenueLocationIcon';
import MarkerPopup from './MarkerPopup';

class VenueMarkers extends Component {
  render() {
    const { venues } = this.props;

    const markers = venues.map((venue, index) => (
        <Marker
          key={index}
          position={venue.geometry}
          icon={VenueLocationIcon}
          onClick={this.props.click}
          id={venue.id}
          type='venue'
        />
    ));

    return <Fragment>{markers}</Fragment>;
  };
}

export default VenueMarkers;
