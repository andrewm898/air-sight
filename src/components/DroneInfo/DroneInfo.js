import React from "react";
import "./DroneInfo.css";

// todo: Unless you need to use lifecycle methods or local state,
// write your component in functional form as above and delete
// this section.

class DroneInfo extends React.Component {
  render() {
    return (
      <div>
        <div className="info">
          <h1>Drone {this.props.droneId} Info.</h1>
          <br />
          <h2>Current Location: (Lat, Long)</h2>
          <br />
          <h2>Battery: 100%</h2>
          <br />
          <h2>Other Sensor Data</h2>
        </div>

        <div className="image">test</div>
      </div>
    );
  }
}

export default DroneInfo;
