var React = require('react');

var StarredStore = require('../../stores/starred');
var ApiUtil = require('../../util/api_utils');

var UserStarredTable = React.createClass({
  getInitialState: function() {
    return {
      starred_listings: StarredStore.all()
    }
  },

  onChange: function() {
    this.setState({starred_listings: StarredStore.all()});
  },

  componentDidMount: function() {
    this.starredListener = StarredStore.addListener(this.onChange);
    ApiUtil.fetchStarredUserListings();
  },

  componentWillUnmount: function() {
    this.starredListener.remove();
  },

  handleUnstarClick: function(starred_listing) {
    ApiUtil.unstarListing(starred_listing)
  },

  render: function() {
    var handleUnstarClick = this.handleUnstarClick;

    var starred_listings = this.state.starred_listings.map(function(listing,idx){
      var boundUnstarClick = handleUnstarClick.bind(null,listing);
      return (
        <tr key={listing.id}>
          <td>{listing.title}</td>
          <td><a onClick={boundUnstarClick}>Unstar</a></td>
          <td>${listing.price}</td>
          <td>{listing.create_date}</td>
          <td>{listing.description.slice(0,50) + "..."}</td>
        </tr>
      )
    })

    return (
      <div>
        <h2>Starred Listings</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Link</th>
              <th>Unstar</th>
              <th>Price</th>
              <th>Post Date</th>
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
