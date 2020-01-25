import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import GoogleMap from "./components/Map/GoogleMap";

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <GoogleMap></GoogleMap>
    </div>
  );
}

export default App;
