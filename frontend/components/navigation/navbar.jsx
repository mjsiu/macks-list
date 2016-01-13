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

          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <a className="navbar-brand" onClick={this.handleHomeClick}>mackslist</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a onClick={this.handleHomeClick}>Home</a></li>
              <button type="button" class="btn btn-info btn-lg" data-toggle="modal" data-target="#myModal">Open Modal</button>
                <div id="myModal" className="modal fade" role="dialog">
                  <div className="modal-dialog">


                    <div className="modal-content">

                        <ListingLocation/>

                    </div>

                  </div>
                </div>
              <li className="active"><a onClick={this.handleCreateClick}>Create Listing <span className="sr-only">(current)</span></a></li>
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
