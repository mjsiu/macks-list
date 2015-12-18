var React = require('react');
var History = require('react-router').History;

var ListingStore = require('../../stores/listing');
var ApiUtil = require('../../util/api_utils');
var ListingIndex = require('../listings/listing_index');
var NavBar = require('./navbar');
var Splash = require('./splash');



var Index = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {
      listings: ListingStore.all()
    }
  },

  onChange: function () {
    this.setState({listings: ListingStore.all() })
  },

  handleListingClick: function (listing) {
    this.props.history.pushState(null, "/listings/" + listing.id, {})
  },

  componentDidMount: function() {
    this.listingListener = ListingStore.addListener(this.onChange);
    ApiUtil.fetchAllListings();
  },

  componentWillUnmount: function () {
    this.listingListener.remove();
  },

  render: function() {
    var handleListingClick = this.handleListingClick;
    var listings = this.state.listings.map(function(listing, idx) {
      var boundClick = handleListingClick.bind(null,listing)
      return <ListingIndex key={listing.id} listing={listing} onClick={boundClick}></ListingIndex>
    });

    return (
      <div>
        <NavBar history={this.props.history}/>
        <Splash/>
      <ul>
        {listings}
      </ul>

      </div>
    );
  }
});

module.exports = Index;