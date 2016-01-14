var React = require('react');
var Login = require('./login');
var ListingLocation = require('../listings/crud_listing/listing_location.jsx');

var NavBar = React.createClass({

  handleHomeClick: function () {
    this.props.history.pushState(null, "/");
  },

  handleCreateClick: function () {
    this.props.history.pushState(null, "listings/new");
  },

  handleSearchClick: function() {
    this.props.history.pushState(null, "listings/search");
  },

  render: function() {

    return (
      <div>
      <nav className="navbar navbar-default">
        <div className="container-fluid">

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li className="active"><a onClick={this.handleHomeClick}>MacksList</a></li>
              <li><a onClick={this.handleCreateClick}>Create Listing <span className="sr-only">(current)</span></a></li>
              <li><a onClick={this.handleSearchClick}>Search</a></li>
            </ul>
            <Login history={this.props.history}/>

          </div>
        </div>
      </nav>
      </div>
    );
  }
});

module.exports =  NavBar;
