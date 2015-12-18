var React = require('react');
var Login = require('./login');
var History = require('react-router').History;

var NavBar = React.createClass({
  mixins: [History],

  handleHomeClick: function () {
    this.props.history.pushState(null, "/", {});
  },

  handleCreateClick: function () {
    this.props.history.pushState(null, "listings/new", {});
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
            <a className="navbar-brand" onClick={this.handleHomeClick}>MacksList</a>
          </div>

          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li><a onClick={this.handleHomeClick}>Home</a></li>
              <li className="active"><a onClick={this.handleCreateClick}>Create Listing <span className="sr-only">(current)</span></a></li>
              <li className="dropdown">
                <a className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Search <span className="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a href="#">City</a></li>
                  <li><a href="#">Advanced Search</a></li>
                </ul>
              </li>
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
