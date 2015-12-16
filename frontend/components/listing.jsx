var React = require('react');
var ReactRouter = require('react-router');

var Listing = React.createClass({
  mixins: [ReactRouter.history],

  render: function () {
    var Link = ReactRouter.Link;
    return (
      <div onClick={this.props.onClick}>
          <li>Title: {this.props.listing.title}</li>
      </div>
    );
  }
});

module.exports = Listing;
