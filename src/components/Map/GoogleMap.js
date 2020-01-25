import React, { Component } from "react";
import "./GoogleMap.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const auth = require("../../auth.json");
export class GoogleMap extends Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} name={"Current location"} />
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: auth.API_KEY
})(GoogleMap);
