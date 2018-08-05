import React, { Component } from "react";
import {Map, Marker, InfoWindow ,GoogleApiWrapper} from 'google-maps-react';
import { Card } from "react-materialize";
import './Maps.scss'; 
const style = {
    positon: 'static',
    width: '400px',
    height: '400px'
  }

export class MapContainer extends Component {

  render() {
    return (
      <Card className='large back'>
        <div className="map-container">
          <div className="map-container-map">
            <Map google={this.props.google} zoom={14} style={style} zIndex={0}>
              <Marker onClick={this.onMarkerClick}
                      name={'Current location'} />
                <InfoWindow>
                  test
                </InfoWindow>
            </Map>
          </div>
          <div className="map-container-text">
            <p>
            Os convidados, preferencialmente, deverão ter os seus carros alocados no Estacionamento localizado na Estrada Haroldo 
            Soares Glavan, 1760, Cacupé – Vivá Residence - Próximo ao SESC. Deste local os convidados serão transferidos para a 
            Casa Conceito através dos próprios organizadores do evento (TRANSFER).
            </p>   
          </div>
        </div>
      </Card>


      


    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCNLD7S6XHMufKI-nAjn6ypvwywaTjyEs0')
})(MapContainer)