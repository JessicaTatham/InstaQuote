import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";
import Quote from "./Quote.js";

class App extends Component {

  render(){
    return(
      <div className="App">
        <Quote />
      </div>
    );
  }
};

export default hot(module)(App);
