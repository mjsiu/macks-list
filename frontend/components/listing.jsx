var React = require('react');
var ReactRouter = require('react-router');
var Map = require('./map.jsx');

var Listing= React.createClass({
  mixins: [ReactRouter.history],

  render: function () {
    return (
      <div>

      <div className="row">
        <div className="col-md-12">
          <div className="listing-title">
            <h2>{this.props.listing.title} - ${this.props.listing.price}</h2>
          </div>
        </div>
      </div>

      <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div className="listing-image">
              <img src={this.props.listing.image_url}/>
            </div>
          </div>
          <div className="col-md-5">
            <Map></Map>
          </div>
          <div className="col-md-1"></div>
      </div>

      <div className="row">
          <br/>
          <div className="col-md-1"></div>
          <div className="col-md-5">
            <div clasName="listing-details">
              {this.props.listing.description}
              <br/>
              {this.props.listing.address}
            </div>
          </div>
          <div className="col-md-5"></div>
          <div className="col-md-1"></div>
      </div>

      </div>
    );
  }
});

module.exports = Listing;
