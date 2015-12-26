var React = require('react');

var ListingStore = require('../../stores/listing');
var FilterParamsStore = require('../../stores/filter_params');
var FilterParamsStore = require('../../stores/filter_params');
var ApiUtil = require('../../util/api_utils');
var Filter = require('../filter/filter');
var ListingIndex = require('../listings/listing_index');

var SearchIndex = React.createClass ({
  getInitialState: function() {
    return {
      listings: this.getListings(),
      filterParams: FilterParamsStore.params()
    }
  },

  getListings: function() {
    return ListingStore.all();
  },

  filtersChanged: function () {
    var newParams = FilterParamsStore.params();
    this.setState({ filterParams: newParams });
    ApiUtil.fetchAllListings();
  },

  listingsChanged: function() {
    this.setState({ listings: this.getListings() });
  },

  componentDidMount: function(){
   this.listingListener = ListingStore.addListener(this.listingsChanged);
   this.filterListener = FilterParamsStore.addListener(this.filtersChanged);
   ApiUtil.fetchAllListings();
 },

 componentWillUnmount: function(){
    this.listingListener.remove();
    this.filterListener.remove();
  },

  handleListingClick: function (listing) {
    this.props.history.pushState(null, "/listings/" + listing.id)
  },

  render: function() {
    var handleListingClick = this.handleListingClick;

    var listings = this.state.listings.map(function(listing, idx) {
      var boundClick = handleListingClick.bind(null,listing)

      return (
        <ListingIndex
          key={listing.id}
          listing={listing}
          onClick={boundClick}>
        </ListingIndex>
      );
    });

    return (
      <div className="container">
        <br/>
        <br/>

        <div className="row row-centered">
          <div className="col-md-3">
            <Filter filterParams={this.state.filterParams}/>
          </div>

          <div className="col-md-9">
            <ul>
              {listings}
            </ul>
          </div>
        </div>
      </div>
    );
  }
});

module.exports = SearchIndex;
