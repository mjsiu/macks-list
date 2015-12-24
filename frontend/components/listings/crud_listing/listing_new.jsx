var React = require('react');
var ListingForm = require('./listing_form');

var ListingNew = React.createClass({

  render: function() {
    var type = "New Listing";

    return (
      <div className="container">
        <ListingForm location={this.props.location} history={this.props.history} type={type}/>
      </div>
    )
  }

});

module.exports = ListingNew;
