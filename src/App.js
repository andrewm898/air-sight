import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import MapContainer from "./components/Map/GoogleMap";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <MapContainer></MapContainer>
    </div>
  );
}

export default App;
