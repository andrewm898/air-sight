import React from "react";
import { Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import GoogleMap from "./components/Map/GoogleMap";
import DroneInfo from "./components/DroneInfo/DroneInfo";
import droneIcon from "./assets/droneIcon.png";
import db from "./firebaseConfig";
import "./App.css";

class App extends React.Component{
  constructor() {
    super();
    this.state = {
      isAuth : false
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {

  }


  render (){
    if (this.state.isAuth) {
    return (
      <div className="App">
        <Router>
         <link
          href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
          rel="stylesheet"
        />
        <div className="App">
          <Switch>
            <Navbar></Navbar>
            <Route
              path="/droneinfo"
              render={() => <DroneInfo droneId={3} />}
            ></Route>
            <Route path="/" exact component={GoogleMap}></Route>
          </Switch>
        </div>
      </Router>
      </div>);
      
    } else {
      return(
      <div className="App">
      <form className="base-container" onSubmit={this.handleSubmit}>
            <img className="logo" src={droneIcon} alt="Drone"/>
            <div className="form">
                <div className="form-group">
                    <input type="text" name="email" placeholder="Email"/>  
                </div>
                <div className="form-group">
                    <input type="password" name="password" placeholder="Password"/>  
                </div>
            </div>
            <div className="footer">
                <button type="button" className="btn" onClick={this.handleSubmit}>
                    Login
                </button>
            </div>
            </form>
    </div>);
    }
  }
  
}

export default App;
