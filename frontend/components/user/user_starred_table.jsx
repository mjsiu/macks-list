var React = require('react');

var StarredStore = require('../../stores/starred');
var ApiUtil = require('../../util/api_utils');

var UserStarredTable = React.createClass({
  getInitialState: function() {
    return {
      starred_listings: this.getStarredListings()
    }
  },

  getStarredListings: function() {
    return StarredStore.all();
  },

  onStarredChange: function() {
    this.setState({ starred_listings: this.getStarredListings() });
  },

  componentDidMount: function() {
    this.starredListener = StarredStore.addListener(this.onStarredChange);
    ApiUtil.fetchStarredUserListings();
  },

  componentWillUnmount: function() {
    this.starredListener.remove();
  },

  handleListingClick: function (listing) {
    this.props.history.pushState(null, "/listings/" + listing.id)
  },

  handleUnstarClick: function(starred_listing) {
    ApiUtil.unstarListing(starred_listing)
  },

  render: function() {
    var handleListingClick = this.handleListingClick;
    var handleUnstarClick = this.handleUnstarClick;

    var starred_listings = this.state.starred_listings.map(function(listing,idx){
      var boundListingClick = handleListingClick.bind(null,listing);
      var boundUnstarClick = handleUnstarClick.bind(null,listing);

      return (
        <tr key={listing.id} listing={listing}>
          <td><a onClick={boundListingClick}>{listing.title}</a></td>
          <td><a onClick={boundUnstarClick}>Unstar</a></td>
          <td>${listing.price}</td>
          <td>{listing.create_date}</td>
          <td>{listing.description.slice(0,75) + "..."}</td>
        </tr>
      );
      return starred_listings;
    });

    return (
      <div className="starred-table">
        <h2>Starred Listings</h2>
        <br/>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Link</th>
              <th>Unstar</th>
              <th>Price</th>
              <th>Date</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {starred_listings}
          </tbody>
        </table>

      </div>
    );
  }

});

module.exports = UserStarredTable;
