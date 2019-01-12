import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class Quote extends Component {
	constructor(props) {
	    super(props);

      this.handleSubmit = this.handleSubmit.bind(this);
	}

  handleSubmit(event) {
    event.preventDefault();
    let url = "https://andruxnet-random-famous-quotes.p.rapidapi.com/?cat=famous&count=10";

    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "68b704a9f9msh44d856a939f24c2p16b334jsnab17216dcec3"
      }
    })
    .then(results => {
      results.json().then(json => {
        this.setState({
          quotes: json
        })
        console.log(json);
      })   
    })
  }

  render(){
  	
    return(
      <div className="quote">
      	<h2>Best Price!</h2>
      	<button onClick={this.handleSubmit}>Get Quote</button>
      </div>
    );
  }
};

export default hot(module)(Quote);