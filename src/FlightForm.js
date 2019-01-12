import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import Quote from './Quote.js';

class FlightForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      from: '',
      to: '',
      depart: '',
      return: '',
      quotes: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const name = event.target.name;
    this.setState({
      [name]: event.target.value
    });  
  }

  handleSubmit(event) {
    event.preventDefault();
    let url = "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/" + "" + this.state.from + "-sky/" + this.state.to + "-sky/" + this.state.depart;
    if (this.state.return) {
      url = url + "?inboundpartialdate=" + this.state.return;
    };

    fetch(url, {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "68b704a9f9msh44d856a939f24c2p16b334jsnab17216dcec3"
      }
    })
    .then(results => {
      results.json().then(json => {
        this.setState({
          quotes: json.Quotes,
          location: json.Places
        })
        console.log(json);
      })   
    })
  }


  render() {
    let min = new Date();
    min = min.toISOString().substr(0,10);
    let max = new Date();
    max.setFullYear(max.getFullYear() + 1);
    max = max.toISOString().substr(0,10);

    let quotes = null;
    let searchData = this.state;
    if (this.state.quotes) {
      quotes = this.state.quotes.reduce (function(prev, current) {
        return (prev.MinPrice < current.MinPrice) ? <Quote key={prev.QuoteId} data={prev} searchData={searchData} /> : <Quote key={current.QuoteId} data={current} searchData={searchData} />
      })
    }

    let location = null;
    if (this.state.location) {
      const imgUrl = 'https://i.gifer.com/QtRw.gif';
      location = <h3> {this.state.location[1].Name} <img src={imgUrl} width="90" /> {this.state.location[0].Name}</h3>
    }

    return (
      <div>
        <form className={this.state.quotes ? 'hidden' : ''} onSubmit={this.handleSubmit}>
          <label>
            From:
            <input type="text" name="from" placeholder="Departure Airport Code" value={this.state.from} onChange={this.handleChange} required></input>
          </label>

          <label>
            To:
            <input type="text" name="to" placeholder="Arrival Airport Code" value={this.state.to} onChange={this.handleChange} required></input>
          </label>

          <label>
            Depart:
            <input type="date" min={min} max={max} name="depart" value={this.state.depart} onChange={this.handleChange} required></input>
          </label>

          <label>
            Return:
            <input type="date" min={this.state.depart} max={max} name="return" value={this.state.return} onChange={this.handleChange}></input>
          </label>

          <input className="button" type="submit" value="Search for flights" ></input>
        </form>

        <div id="results">
          { location }
          { quotes }
          <button onClick="window.location.reload();">Start Over </button>
        </div>

      </div>
    );
  }
}

export default hot(module)(FlightForm);
