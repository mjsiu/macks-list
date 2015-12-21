var React = require('react');
var ListingForm = require('./listing_form');
var NavBar = require('../../navigation/navbar');

var ListingEdit = React.createClass({

  render: function() {

    var type = "Edit Listing";
    return (
      <div>
        <NavBar history={this.props.history}/>
        <ListingForm listing={this.props.listing} history={this.props.history} type={type}/>
      </div>
    )
  }

});

module.exports = ListingEdit;
