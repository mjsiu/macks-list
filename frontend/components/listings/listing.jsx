var React = require('react');

var NavBar = require('../navigation/navbar');
var Map = require('./map');
var StarredButton = require('../user/star_button');

var Listing = React.createClass({
  getInitialState: function() {
    return {
      primary_image: ''
    }
  },

  componentWillMount: function() {
    this.imageCheck();
  },

  imageCheck: function() {
    var partial = "http://res.cloudinary.com/mackslist/image/upload/c_scale,h_450/";

    if (this.props.listing.images[0]) {
      this.setState({primary_image: partial + this.props.listing.images[0].url})
    } else {
      this.setState({primary_image: partial + "v1450309841/logo_k5fymd.png"})
    }
  },

  render: function () {

    return (
      <div>

      <NavBar history={this.props.history}/>

      <div className="row">
        <div className="col-md-12">
          <div className="listing-title">
            <h2>{this.props.listing.title} - ${this.props.listing.price}</h2>
            <br/>
            <StarredButton listing={this.props.listing}/>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="listing-image">
              <img src={this.state.primary_image}/>
            </div>
          </div>
          <div className="col-md-5">
            <Map listing={this.props.listing}></Map>
          </div>
          <div className="col-md-1"></div>
      </div>

      <br/>
      <br/>

      <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">{this.props.listing.description}</div>
        <div className="col-md-4"></div>
      </div>

      </div>
    );
  }
});

module.exports = Listing;
