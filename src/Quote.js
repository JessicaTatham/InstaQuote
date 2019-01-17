import React from "react";

class Quote extends React.Component {
	constructor(props) {
		super(props);
	}

	render(){
		return(
		  <div className="quote">
		  	<p>{this.props.info.quote}</p>
		  	<p><i>{this.props.info.author}</i></p>
		  </div>
		);
	}
};

export default Quote;
