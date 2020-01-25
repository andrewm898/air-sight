import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GoogleMap from "./components/Map/GoogleMap";
import DroneInfo from "./components/DroneInfo/DroneInfo";
import "./App.css";

function App() {
  return (
    <Router>
      <link
        href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
        rel="stylesheet"
      />
      <div className="App">
        <Navbar></Navbar>
        <Switch>
          <Route path="/" exact component={GoogleMap}></Route>
          <Route
            path="/DroneInfo"
            render={() => <DroneInfo droneId={3} />}
          ></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
