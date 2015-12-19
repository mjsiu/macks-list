var React = require('react');
var ListingForm = require('./create_listing/listing_form');

var ListingEdit = React.createClass({

  handleEditClick: function(listing) {
    ApiUtil.archiveListing(listing);
  },

  render: function() {
    return (
      <div>
        <ListingForm/>
      </div>
    )
  }

});

module.exports = ListingEdit;
