var React = require('react');
var ListingStore = require('../stores/listing');
var ReactRouter = require('react-router');
var Listing = require('./listing');
var ApiUtil = require('../util/api_utils');
var History = require('react-router').History;

var ListingShow = React.createClass ({
  mixins: [History],

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
     debugger
     this.history.pushState(null, "/listing/" + listing.id, {})
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
        <Listing listing={this.state.listing} className="list" onClick={this.handleClick}/>
      </div>
    );
  }

});


module.exports = ListingShow;
