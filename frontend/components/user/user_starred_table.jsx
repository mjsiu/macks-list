var React = require('react');

var UserStarredTable = React.createClass({

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
