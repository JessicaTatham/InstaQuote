import React, { Component } from "react";
import Quote from './Quote.js';
import "./App.css";

class GetQuote extends Component {
	constructor(props) {
	    super(props);

      this.state = {
        quotes: []
      }

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
      	<h2>Get a Quote for your instagram post!</h2>
      	<button onClick={this.handleSubmit}>Get Quote</button>

        {this.state.quotes.length > 0 ? this.state.quotes.map(function(q) { return <Quote info={q} />}) : ''}

      </div>
    );
  }
};

export default GetQuote;