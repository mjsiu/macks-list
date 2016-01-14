var React = require('react');

var UserStore = require('../../stores/user');
var ApiUtil = require('../../util/api_utils');

var UserListingTable = React.createClass({
  getInitialState: function() {
    return {
      user_listings: this.getUserListings()
    }
  },

  getUserListings: function() {
    return UserStore.all();
  },

  onListingChange: function() {
    this.setState({ user_listings: this.getUserListings() });
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onListingChange);
    ApiUtil.fetchAllUserListings();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
  },

  handleListingClick: function (listing) {
    this.props.history.pushState(null, "/listings/" + listing.id, listing)
  },

  handleDeleteClick: function (listing) {
    ApiUtil.deleteListing(listing);
  },

  handleEditClick: function (listing) {
    this.props.history.pushState(null, "/listings/edit/" + listing.id, listing);
  },

  createListingElements: function() {
    var handleListingClick = this.handleListingClick;
    var handleDeleteClick = this.handleDeleteClick;
    var handleEditClick = this.handleEditClick;

    var user_listings = this.state.user_listings.map(function(listing, idx) {
      var boundListingClick = handleListingClick.bind(null,listing);
      var boundDeleteClick = handleDeleteClick.bind(null,listing);
      var boundEditClick = handleEditClick.bind(null,listing);

      return (
      <tr key={listing.id} listing={listing}>
        <td><a onClick={boundListingClick}>{listing.title}</a></td>
        <td><a onClick={boundEditClick}>Edit</a></td>
        <td><a onClick={boundDeleteClick}>Delete</a></td>
        <td>{listing.create_date}</td>
        <td>${listing.price}</td>
        <td>{listing.description.slice(0,50) + "..."}</td>
      </tr>
      );
    });

    return user_listings;
  },

  render: function() {
    var user_listings = this.createListingElements();

    return (
      <div className="user-listings-table">
        <h2>Your Listings</h2>
        <br/>
        <table className="table table-hover">
          <thead>
            <tr>
              <th>Link</th>
              <th>Edit</th>
              <th>Delete</th>
              <th>Date</th>
              <th>Price</th>
              <th>Description</th>
            </tr>
          </thead>

          <tbody>
            {user_listings}
          </tbody>
        </table>
      </div>
    );
  }
});

module.exports = UserListingTable;
