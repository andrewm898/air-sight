import React, { Component } from "react";
import "./DroneInfo.css";
import droneIcon from "../../assets/droneIcon.png";
import UserForm from "../../components/DroneInfo/UserForm";
// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.

class DroneInfo extends React.Component {
  render() {
    return (
      <div>
        <UserForm />
        <div className="info">
          <h1>Drone {this.props.droneId} Info.</h1>
          <br />
          <h2>Current Location: (Lat, Long)</h2>
          <br />
          <h2>Battery: 100%</h2>
          <br />
          <h2>Other Sensor Data</h2>
        </div>

        <div>
          <img src={droneIcon} alt="drone" height="700px" width="600"/>
        </div>
      </div>
    );
  }
}

export default DroneInfo;
