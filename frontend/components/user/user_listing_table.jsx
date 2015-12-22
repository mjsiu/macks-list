var React = require('react');
var UserStore = require('../../stores/user');
var ListingStore = require('../../stores/listing');
var StarredStore = require('../../stores/starred');
var ApiUtil = require('../../util/api_utils');

var UserListingTable = React.createClass({
  getInitialState: function() {
    return {
      user_listings: UserStore.all(),
      starred_listings: StarredStore.all()
    }
  },

  onChange: function() {
    this.setState({user_listings: UserStore.all()});
  },


  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    this.starredListener = StarredStore.addListener(this.onStarredChange);
    ApiUtil.fetchAllUserListings();
    ApiUtil.fetchStarredUserListings();
  },

  componentWillUnmount: function() {
    this.userListener.remove();
    this.starredListener.remove();

  },

  handleDeleteClick: function (listing) {
    ApiUtil.deleteListing(listing);
  },

  handleEditClick: function (listing) {
    this.props.history.pushState(null, "/listings/edit/" + listing.id, listing);
  },

  render: function() {
    debugger
    var handleDeleteClick = this.handleDeleteClick;
    var handleEditClick = this.handleEditClick;

    var user_listings = this.state.user_listings.map(function(listing, idx) {
      var boundDeleteClick = handleDeleteClick.bind(null,listing);
      var boundEditClick = handleEditClick.bind(null,listing);
      return (
      <tr key={listing.id}>
        <td>{listing.title}</td>
        <td><a onClick={boundEditClick}>Edit</a></td>
        <td><a onClick={boundDeleteClick}>Delete</a></td>
        <td>{listing.create_date}</td>
        <td>${listing.price}</td>
        <td>{listing.description.slice(0,50) + "..."}</td>
      </tr>
      )
    }.bind(this));

    var starred_listings = this.state.starred_listings.map(function(listing,idx){
      return (
        <tr key={listing.id}>
          <td>{listing.title}</td>
          <td><a >Edit</a></td>
          <td><a >Delete</a></td>
          <td>{listing.create_date}</td>
          <td>${listing.price}</td>
          <td>{listing.description.slice(0,50) + "..."}</td>
        </tr>
      )
    })

    return (
      <div>
        <h2>Your Listings</h2>

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
              {starred_listings}
          </tbody>
        </table>

      </div>
    );
  }

});

module.exports = UserListingTable;
