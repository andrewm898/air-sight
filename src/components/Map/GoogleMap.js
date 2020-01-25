import React, { Component } from "react";
import { style, streetStyle } from "./GoogleMapStyles";
import Switch from "react-switch";
import "./GoogleMap.css";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import db from "../../firebaseConfig";

const auth = require("../../auth.json");

export class GoogleMap extends Component {
  constructor() {
    super();
    this.state = {
      markers: [],
      checked: true,
      x: 0,
      y: 0,
      showingInfoWindow: false,
      activeMarker: {},
      selectedPlace: {}
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(checked) {
    this.setState({ checked });
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      x: e.latLng.lat(),
      y: e.latLng.lng(),
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    });
  };

  onMapClicked = (props, e) => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        visible: this.state.windowHasClosed
      });
    } else {
      console.log(e);
    }
  };

  componentDidMount = () => {
    db.collection("fireLocations").onSnapshot(snapshot => {
      let changes = snapshot.docChanges();
      changes.forEach(change => {
        console.log(change.doc.data());
        if (change.type == "added") {
          console.log(change.doc.data());
          this.setState(
            (this.state.markers = this.state.markers.concat(
              <Marker
                name={change.doc.data().droneID}
                position={{
                  lat: change.doc.data().coords.latitude,
                  lng: change.doc.data().coords.longitude
                }}
                onClick={this.onMarkerClick}
                icon={{
                  url:
                    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/211/fire_1f525.png",
                  anchor: new window.google.maps.Point(32, 32),
                  scaledSize: new window.google.maps.Size(64, 64)
                }}
              />
            ))
          );
        }
      });
    });
  };

  switchContainer = () => {
    return (
      <div>
        <div className="switch-container">
          <Switch
            onChange={this.handleChange}
            checked={this.state.checked}
            checkedIcon={false}
            uncheckedIcon={false}
          />
        </div>
      </div>
    );
  };

  liveWindow = () => {
    return (
      <InfoWindow
        marker={this.state.activeMarker}
        visible={this.state.showingInfoWindow}
      >
        <div>
          {"(" + this.state.x.toFixed(6) + ", " + this.state.y.toFixed(6) + ")"}
        </div>
      </InfoWindow>
    );
  };

  render() {
    return (
      <div>
        {this.state.checked && (
          <Map
            google={this.props.google}
            zoom={14}
            style={style}
            onClick={this.onMapClicked}
            initialCenter={{
              // make this dependent on users location given @ login?
              lat: 40.424,
              lng: -86.929
            }}
            styles={streetStyle}
            disableDefaultUI={true}
            mapType={"roadmap"}
          >
            {this.state.markers}
            {this.switchContainer()}
            {this.liveWindow()}
          </Map>
        )}
        {!this.state.checked && (
          <Map
            google={this.props.google}
            zoom={14}
            style={style}
            onClick={this.onMapClicked}
            initialCenter={{
              lat: 40.424,
              lng: -86.929
            }}
            disableDefaultUI={true}
            mapType={"satellite"}
          >
            {this.state.markers}
            {this.switchContainer()}
            {this.liveWindow()}
          </Map>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: auth.API_KEY
})(GoogleMap);
