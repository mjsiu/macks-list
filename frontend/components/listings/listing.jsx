var React = require('react');
var History = require('react-router').History;

var NavBar = require('../navigation/navbar');
var Map = require('./map');

var Listing= React.createClass({
  mixins: [History],

  render: function () {
    return (
      <div>

      <NavBar history={this.props.history}/>

      <div className="row">
        <div className="col-md-12">
          <div className="listing-title">
            <h2>{this.props.listing.title} - ${this.props.listing.price}</h2>
            <br/>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="listing-image">
              <img src='http://res.cloudinary.com/mackslist/image/upload/c_scale,h_450/v1450306654/yorvkvyaz4ow3ylvav04.jpg'/>
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
