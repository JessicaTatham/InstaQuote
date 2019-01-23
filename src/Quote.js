import React from "react";

class Quote extends React.Component {
	constructor(props) {
		super(props);

		this.getImage = this.getImage.bind(this);
	}

	getImage(author) {
		const flickr = new Flickr({
		  api_key: "8d392e1334d7f742e7dc4fec521d092a"
		});

		flickr.photos.search({
		  text: author
		}, function(err, result) {
		  if(err) { console.log(err) }
		  console.log(result);
		}
	}

	render(){
		return(
		  <div className="quote">
			  <Coverflow
			    width={960}
			    height={480}
			    displayQuantityOfSide={2}
			    navigation={false}
			    enableHeading={false}
			  >
			    <div
			      onClick={() => fn()}
			      onKeyDown={() => fn()}
			      role="menuitem"
			      tabIndex="0"
			    >
			    {this.props.quotes.map(function(q) {
			    	return <img
						        src={this.getImage(q.author)}
						        alt={q.quote}
						        style={{ display: 'block', width: '100%' }}
						      />
			    })}
			  </Coverflow>
		  </div>
		);
	}
};

export default Quote;
