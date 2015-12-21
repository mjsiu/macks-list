var React = require('react');

var Login = React.createClass({

  handleSignOutClick: function() {
    $.ajax({
      url: "/session",
      method: "DELETE",
      success: function() {
        window.location='session/new'
      }
    });
  },

  handleProfileClick: function () {
    this.props.history.pushState(null, "/user", {});
  },

  render: function() {
    var login;
    var signup;
    if (window.user.username) {
      login = (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{window.user.username}<span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a onClick={this.handleProfileClick}>User Profile</a></li>
              <li onClick={this.handleSignOutClick}><a>Log Out</a></li>
            </ul>
          </li>);
    } else {
      login = (
        <li><a href="http://localhost:3000/session/new">Login</a></li>
      )
      signup = (
        <li><a href="http://localhost:3000/users/new">Sign Up</a></li>
      )
    }
    return (
      <ul className="nav navbar-nav navbar-right">
        {signup}
        {login}
      </ul>
    );
  }
});

module.exports = Login;
