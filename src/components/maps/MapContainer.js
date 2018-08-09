import React, { Component } from "react";
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';


class MapContainer extends Component {
  static defaultProps = {
    center: {
      lat: -27.548,
      lng: -48.52
    },
    zoom: 15
  };

  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyCNLD7S6XHMufKI-nAjn6ypvwywaTjyEs0' }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
        <Marker 
          lat={-27.540605}
          lng={-48.522963}
        />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default MapContainer;