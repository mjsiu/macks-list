var React = require('react');
var ListingForm = require('./listing_form');
var NavBar = require('../../navigation/navbar');

var ListingEdit = React.createClass({

  render: function() {
    debugger
    var type = "Edit Listing";
    return (
      <div>
        <NavBar history={this.props.history}/>
        <ListingForm location={this.props.location} history={this.props.history} type={type}/>
      </div>
    )
  }

});

module.exports = ListingEdit;
