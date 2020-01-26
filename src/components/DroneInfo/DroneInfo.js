import React, { Component } from "react";
import "./DroneInfo.css";
import droneIcon from "../../assets/droneIcon.png";
import fpv from "../../assets/fpv.png";
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
          <h1>Drone {this.props.droneId} Info</h1>
          <br />
          <h2>Current Location: (55.7558N, 37.6173E)</h2>
          <br />
          <h2>Battery: 100%</h2>
          <br />
          <h2>Other Sensor Data:</h2>
          <br/><l1>Wind Speed: 2 mph</l1>
          <br/><l2>Average Temperature: 30F</l2>
          <br/><l3>Conditions: Overcast with a 50% chance of rain</l3>
        </div>

        <div>
          <img className="example" src={fpv} alt="drone"/>
        </div>
      </div>
    );
  }
}

export default DroneInfo;
