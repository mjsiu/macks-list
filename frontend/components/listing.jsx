var React = require('react');
var History = require('react-router').History;
var Map = require('./map.jsx');

var Listing= React.createClass({
  mixins: [History],

  render: function () {
    debugger
    return (
      <div>

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
              <img src={this.props.listing.image_url}/>
            </div>
            <br/>
            <div clasName="listing-details">
              {this.props.listing.description}
              <br/>
              {this.props.listing.address}
            </div>
          </div>
          <div className="col-md-5">
            <Map listing={this.props.listing}></Map>
          </div>
          <div className="col-md-1"></div>
      </div>

      </div>
    );
  }
});

module.exports = Listing;
