var React = require('react');

var UserStarredTable = React.createClass({
  getInitialState: function() {
    return {
      starred_listings: StarredStore.all()
    }
  },

  onChange: function() {
    this.setState({starred_listings: StarredStore.all()});
  },



  render: function() {
    return (
      <div>
        <h2>Starred Listings</h2>

        <table className="table table-hover">
          <thead>
            <tr>
              <th>Link</th>
              <th>Description</th>
              <th>Price</th>
              <th>Post Date</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>

      </div>
    );
  }

});

module.exports = UserStarredTable;
1
