import React, { Component, createRef } from "react";
import "./GoogleMap.css";

let auth = require("../../auth.json");

class GoogleMap extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.googleMapRef = React.createRef();
  }

  componentDidMount() {
    const googleMapScript = document.createElement("script");
    googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${auth.API_KEY}&libraries=places`;
    window.document.body.appendChild(googleMapScript);

    googleMapScript.addEventListener("load", () => {
      this.googleMap = this.createGoogleMap();
      this.marker = this.createMarker();
    });
  }

  createGoogleMap = () =>
    new window.google.maps.Map(this.googleMapRef.current, {
      zoom: 17,
      center: {
        lat: 40.429865,
        lng: -86.920815
      },
      disableDefaultUI: true,
      mapTypeId: "satellite"
    });

  createMarker = () =>
    new window.google.maps.Marker({
      position: { lat: 40.429865, lng: -86.920815 },
      map: this.googleMap
    });

  render() {
    return (
      <div
        id="google-map"
        ref={this.googleMapRef}
        style={{ width: "100%", height: "95vh" }}
      />
    );
  }
}

export default GoogleMap;
