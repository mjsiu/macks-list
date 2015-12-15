var React = require('react');
var ListingStore = require('../stores/listing');
var ApiUtil = require('../util/api_utils');

var Index = React.createClass({
  getInitialState: function() {
    return {
      listings: ListingStore.all()
    }
  },

  onChange: function () {
    this.setState({listings: ListingStore.all() })
  },

  componentDidMount: function() {
    this.listingListener = ListingStore.addListener(this.onChange);
    ApiUtil.fetchListings();
  },

  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  render: function() {
    var listings = this.state.listings.map(function(listing, idx) {
      return <li key={idx}>{listing.title}</li>
    });

    return (
      <ul>
        {listings}
      </ul>
    );
  }
});

module.exports = Index;
