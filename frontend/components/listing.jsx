var React = require('react');
var ReactRouter = require('react-router');

var Listing= React.createClass({
  mixins: [ReactRouter.history],

  render: function () {
    return (
      <div>
      <div className="row">

          <div className="col-md-6">
            <h3><b>{this.props.listing.title} - ${this.props.listing.price}</b></h3>
          <img src={this.props.listing.image_url}/>
          </div>
          <div className="col-md-6"></div>
      </div>
      <div className="row">
          <div className="col-md-6">

            <br/>
            {this.props.listing.description}
            <br/>
            {this.props.listing.address}
          </div>
          <div className="col-md-6"></div>
      </div>
      </div>
    );
  }
});

module.exports = Listing;
