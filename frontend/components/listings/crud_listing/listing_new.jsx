var React = require('react'),
    ListingForm = require('./listing_form');

var ListingNew = React.createClass({
  render: function() {
    var type = "NEW LISTING";

    return (
      <div className="container">
        <ListingForm location={this.props.location} history={this.props.history} type={type}/>
      </div>
    )
  }

});

module.exports = ListingNew;
