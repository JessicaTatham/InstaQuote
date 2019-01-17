import React from "react";
import "./App.css";
import GetQuote from "./GetQuote.js";

class App extends React.Component {

  render(){
    return(
      <div className="App">
        <GetQuote />
      </div>
    );
  }
};

export default App;
