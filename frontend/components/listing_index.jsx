var React = require('react');
var ReactRouter = require('react-router');

var ListingIndex = React.createClass({
  mixins: [ReactRouter.history],

  render: function () {
    return (
      <div className="index-items" onClick={this.props.onClick}>
          <div className="col">
          <b>{this.props.listing.title} - ${this.props.listing.price}</b>
          <br/>
          <img src={this.props.listing.image_url}/>
          <br/>
          </div>
      </div>
    );
  }
});

module.exports = ListingIndex;
