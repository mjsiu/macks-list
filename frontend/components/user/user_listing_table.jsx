var React = require('react');
var UserStore = require('../../stores/user')
var ApiUtil = require('../../util/api_utils')

var UserListingTable = React.createClass({
  getInitialState: function() {
    return {
      user_listings: UserStore.all()
    }
  },

  onChange: function () {
    this.setState({user_listings: UserStore.all()})
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchAllUserListings();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  render: function() {
    var user_listings = this.state.user_listings.map(function(listing, idx) {
      return (
      <tr>
        <td>{listing.title}</td>
        <td></td>
        <td></td>
        <td>{listing.create_date}</td>
        <td>${listing.price}</td>
        <td>{listing.description.slice(0,50) + "..."}</td>
      </tr>
      )
    }.bind(this));

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
          </tbody>
        </table>

      </div>
    );
  }

});

module.exports = UserListingTable;
