import React, { Component } from "react";
import { hot } from "react-hot-loader";
import "./App.css";

class Quote extends Component {
	constructor(props) {
	    super(props);
	}

  render(){
  	let searchData = this.props.searchData;
  	let buyNow = "https://www.skyscanner.com/transport/flights/" + searchData.from + "/" + searchData.to + "/" + searchData.depart + "/" + searchData.return + "/?adults=1&children=0&adultsv2=1&childrenv2=&infants=0&cabinclass=economy&rtn=1&preferdirects=false&outboundaltsenabled=false&inboundaltsenabled=false&ref=home#results";
    return(
      <div className="quote">
      	<h2>Best Price!</h2>
      	<p> $ {this.props.data.MinPrice}</p>
      	<a href={buyNow}><button className="buyNow">Buy Now</button></a>
      </div>
    );
  }
};

export default hot(module)(Quote);
