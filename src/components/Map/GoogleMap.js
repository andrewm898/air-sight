import React, { Component } from "react";
import Switch from "react-switch";
import "./GoogleMap.css";
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react";

const auth = require("../../auth.json");
const style = {
  width: "100%",
  height: "95vh"
};
const streetStyle = [
  { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
  {
    elementType: "labels.text.stroke",
    stylers: [{ color: "#242f3e" }]
  },
  { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
  {
    featureType: "administrative.locality",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "poi.park",
    elementType: "geometry",
    stylers: [{ color: "#263c3f" }]
  },
  {
    featureType: "poi.park",
    elementType: "labels.text.fill",
    stylers: [{ color: "#6b9a76" }]
  },
  {
    featureType: "road",
    elementType: "geometry",
    stylers: [{ color: "#38414e" }]
  },
  {
    featureType: "road",
    elementType: "geometry.stroke",
    stylers: [{ color: "#212a37" }]
  },
  {
    featureType: "road",
    elementType: "labels.text.fill",
    stylers: [{ color: "#9ca5b3" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry",
    stylers: [{ color: "#746855" }]
  },
  {
    featureType: "road.highway",
    elementType: "geometry.stroke",
    stylers: [{ color: "#1f2835" }]
  },
  {
    featureType: "road.highway",
    elementType: "labels.text.fill",
    stylers: [{ color: "#f3d19c" }]
  },
  {
    featureType: "transit",
    elementType: "geometry",
    stylers: [{ color: "#2f3948" }]
  },
  {
    featureType: "transit.station",
    elementType: "labels.text.fill",
    stylers: [{ color: "#d59563" }]
  },
  {
    featureType: "water",
    elementType: "geometry",
    stylers: [{ color: "#17263c" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.fill",
    stylers: [{ color: "#515c6d" }]
  },
  {
    featureType: "water",
    elementType: "labels.text.stroke",
    stylers: [{ color: "#17263c" }]
  }
];

export class GoogleMap extends Component {
  constructor() {
    super();
    this.state = {
      checked: true
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    console.log(checked);
    this.setState({ checked });
  }

  render() {
    return (
      <div>
        {this.state.checked && (
          <Map
            google={this.props.google}
            zoom={14}
            style={style}
            styles={streetStyle}
            disableDefaultUI={true}
            mapType={"roadmap"}
          >
            <div className="switch-container">
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
          </Map>
        )}
        {!this.state.checked && (
          <Map
            google={this.props.google}
            zoom={14}
            style={style}
            disableDefaultUI={true}
            mapType={"satellite"}
          >
            <div className="switch-container">
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
            <Marker onClick={this.onMarkerClick} name={"Current location"} />
          </Map>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: auth.API_KEY
})(GoogleMap);
