var React = require('react');

var UserListingTable = require('./user_listing_table');
var UserStarredTable = require('./user_starred_table');

var User = React.createClass ({

  render: function() {
    return (
      <div className="container">
        <br/>
        <br/>

        <div className="row">
          <div className="col-md-6">
            <UserListingTable history={this.props.history}/>
          </div>

          <div className="col-md-6">
            <UserStarredTable history={this.props.history}/>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = User;
