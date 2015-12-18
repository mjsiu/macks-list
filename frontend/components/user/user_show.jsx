var React = require('react');

var NavBar = require('../navigation/navbar');
var UserListingTable = require('./user_listing_table');
var UserStarredTable = require('./user_starred_table');

var User = React.createClass ({

  render: function() {
    return (
      <div>
        <NavBar history={this.props.history}/>
        <UserListingTable/>
        <UserStarredTable/>
      </div>

    );
  }
});

module.exports = User;
