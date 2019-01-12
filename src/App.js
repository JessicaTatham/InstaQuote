import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import FlightForm from "./FlightForm.js";
import Flidget from "../img/Flidget.png";

class App extends Component {

  render(){
    return(
      <div className="App">
      	<img id="HeaderBanner" src={Flidget} />
      	<b><h3>
          Find the best prices for your next adventure!
        </h3></b>
        <FlightForm />
      </div>
    );
  }
};

export default hot(module)(App);
