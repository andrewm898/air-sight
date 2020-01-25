import React, { Component } from "react";
import "./GoogleMap.css";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";

const auth = require("../../auth.json");
export class GoogleMap extends Component {
  state = {
    x: 0,
    y: 0,
    showingInfoWindow: false,
    activeMarker: {},
    selectedPlace: {},
  };

  onMarkerClick = (props, marker, e) => {
    this.setState({
      x: e.latLng.lat(),
      y: e.latLng.lng(),
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
    console.log(e.latLng.lat(), e.latLng.lng());
  }
    

    onMapClicked = (props) => {
      if (this.state.showingInfoWindow) {
        this.setState({
          showingInfoWindow: false,
          activeMarker: null,
          visible: this.state.windowHasClosed
        })
      }
    };

  render() {
  
    return (
      <Map google={this.props.google} zoom={14}
        onClick={this.onMapClicked}
        initialCenter={{
          lat: 40.4240, lng: -86.9290
        }}>

        <Marker 
          name={'Corec'}
          position={{lat: 40.4240, lng: -86.9290}}
          onClick={this.onMarkerClick}
          icon={{
            url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/211/fire_1f525.png',
            anchor: new window.google.maps.Point(32,32),
            scaledSize: new window.google.maps.Size(64,64)
          }}
        />

        <Marker 
          name={'Corec'}
          position={{lat: 38.4240, lng: -90.9290}}
          onClick={this.onMarkerClick}
          icon={{
            url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/211/fire_1f525.png',
            anchor: new window.google.maps.Point(32,32),
            scaledSize: new window.google.maps.Size(64,64)
          }}
        />

        <Marker 
          name={'Corec'}
          position={{lat: 35.4240, lng: -93.9290}}
          onClick={this.onMarkerClick}
          icon={{
            url: 'https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/211/fire_1f525.png',
            anchor: new window.google.maps.Point(32,32),
            scaledSize: new window.google.maps.Size(64,64)
          }}
        />
      
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}>
          <div>{"(" + this.state.x.toFixed(6) + ", " + this.state.y.toFixed(6) + ")"}</div>
        </InfoWindow>
        
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: auth.API_KEY
})(GoogleMap);
