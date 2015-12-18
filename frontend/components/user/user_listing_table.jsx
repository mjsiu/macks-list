var React = require('react');
var UserStore = require('../../stores/user')
var ApiUtil = require('../../util/api_utils')

var UserListingTable = React.createClass({
  getInitialState: function() {
    return {
      listings: UserStore.all()
    }
  },

  componentDidMount: function() {
    this.userListener = UserStore.addListener(this.onChange);
    ApiUtil.fetchAllUserListings();
  },

  componentWillUnmount: function () {
    this.userListener.remove();
  },

  render: function() {
    debugger
    var listings = this.state.listings.map(function(listing, idx) {
        return <li key={listing.id}>{listing.title}</li>
      });
    return (
      <div>
      {listings}
    </div>
    )

    // return (
    //   <div>
    //     <h2>Your Listings</h2>
    //
    //     <table className="table table-hover">
    //       <thead>
    //         <tr>
    //           <th>Title</th>
    //           <th>Description</th>
    //           <th>Price</th>
    //           <th>Post Date</th>
    //           <th>Edit</th>
    //           <th>Delete</th>
    //           <th>Link</th>
    //         </tr>
    //       </thead>
    //       <tbody>
    //         <tr>
    //           <td>John</td>
    //           <td>Doe</td>
    //           <td>john@example.com</td>
    //         </tr>
    //         <tr>
    //           <td>Mary</td>
    //           <td>Moe</td>
    //           <td>mary@example.com</td>
    //         </tr>
    //         <tr>
    //           <td>July</td>
    //           <td>Dooley</td>
    //           <td>july@example.com</td>
    //         </tr>
    //       </tbody>
    //     </table>
    //
    //   </div>
    // );
  }

});

module.exports = UserListingTable;
