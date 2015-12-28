var React = require('react'),
    ReactRouter = require('react-router'),
    ListingStore = require('../../stores/listing'),
    Listing = require('./listing'),
    ApiUtil = require('../../util/api_utils');


var ListingShow = React.createClass ({
  getInitialState: function () {
   var listingId = this.props.params.listingId;
   var listing = this.findListingById(listingId) || {} ;
   return { listing: listing };
  },

  findListingById: function (id) {
    var found;
     ListingStore.all().forEach(function (listing) {
      if (id == listing.id) {
        found = listing;
      }
    }.bind(this));
     return found;
   },

  handleClick: function() {
     this.history.pushState(null, "/listings/" + listing.id, {})
  },

  componentDidMount: function () {
    this.listingListener = ListingStore.addListener(this.listingChanged);
    ApiUtil.fetchAllListings();
  },

  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  listingChanged: function () {
    var listingId = this.props.params.listingId;
    var listing = this.findListingById(listingId);
    this.setState({ listing: listing });
  },

  render: function() {
    var listings = [];
    if (this.state.listing) {
      listings.push(this.state.listing);
    }

    return (
      <div>
        <Listing history={this.props.history} listing={this.state.listing}></Listing>
      </div>
    );
  }

});


module.exports = ListingShow;
