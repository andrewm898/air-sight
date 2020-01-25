import React, { Component } from "react";
import Switch from "react-switch";
import "./GoogleMap.css";
import { Map, Marker, GoogleApiWrapper, InfoWindow } from "google-maps-react";
import db from "../../firebaseConfig";


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
      markers : [],
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
    console.log(checked);
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
    console.log(e.latLng.lat(), e.latLng.lng());
  };


  onMapClicked = props => {
    if (this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null,
        visible: this.state.windowHasClosed
      });
    }
  };

  componentDidMount = () => {
    db.collection('fireLocations').onSnapshot(snapshot => {
        let changes = snapshot.docChanges();
        changes.forEach(change => {
            console.log(change.doc.data());
            if(change.type == 'added'){
                // renderCafe(change.doc);
                this.setState(this.state.markers = this.state.markers.concat(<Marker
                  name={change.doc.data().droneID}
                  position={{ lat: change.doc.data().coords.latitude, lng: change.doc.data().coords.longitude }}
                  onClick={this.onMarkerClick}
                  icon={{
                  url:
                    "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/211/fire_1f525.png",
                  anchor: new window.google.maps.Point(32, 32),
                  scaledSize: new window.google.maps.Size(64, 64)
                }}
              />))
            } 
        });
    });


  }

  render() {
    return (
      <div>
        {this.state.checked && (
          <Map
            google={this.props.google}
            zoom={14}
            style={style}
            onClick={this.onMapClicked}
            initialCenter={{ // make this dependent on users location given @ login?
              lat: 40.424, 
              lng: -86.929
            }}
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
            {this.state.markers}
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                {"(" +
                  this.state.x.toFixed(6) +
                  ", " +
                  this.state.y.toFixed(6) +
                  ")"}
              </div>
            </InfoWindow>
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
            <div className="switch-container">
              <Switch
                onChange={this.handleChange}
                checked={this.state.checked}
                checkedIcon={false}
                uncheckedIcon={false}
              />
            </div>
            <Marker
              name={"Corec"}
              position={{ lat: 40.424, lng: -86.929 }}
              onClick={this.onMarkerClick}
              icon={{
                url:
                  "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/emojione/211/fire_1f525.png",
                anchor: new window.google.maps.Point(32, 32),
                scaledSize: new window.google.maps.Size(64, 64)
              }}
            />
            <InfoWindow
              marker={this.state.activeMarker}
              visible={this.state.showingInfoWindow}
            >
              <div>
                {"(" +
                  this.state.x.toFixed(6) +
                  ", " +
                  this.state.y.toFixed(6) +
                  ")"}
              </div>
            </InfoWindow>
          </Map>
        )}
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: auth.API_KEY
})(GoogleMap);
