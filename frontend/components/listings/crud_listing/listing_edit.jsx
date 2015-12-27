var React = require('react');
var ListingForm = require('./listing_form');

var ListingEdit = React.createClass({

  render: function() {
    var type = "EDIT LISTING";
    return (
      <div>
        <ListingForm location={this.props.location} history={this.props.history} type={type}/>
      </div>
    )
  }

});

module.exports = ListingEdit;
