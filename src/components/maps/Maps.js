import React, { Component } from "react";
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
 
const style = {
    width: '90%',
    height: '70%'
  }

export class MapContainer extends Component {

  render() {
    return (
      <Map google={this.props.google} zoom={14} style={style}>
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCNLD7S6XHMufKI-nAjn6ypvwywaTjyEs0')
})(MapContainer)