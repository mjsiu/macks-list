var React = require('react');

var Login = React.createClass({

  render: function() {
    var login;
    var signup;
    if (window.user) {
      login = (
        <li className="dropdown">
            <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">{window.user.username}<span className="caret"></span></a>
            <ul className="dropdown-menu">
              <li><a href="#">User Profile</a></li>
              <li><a href="http://localhost:3000/session/delete">Log Out</a></li>
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
        {login}
        {signup}
      </ul>
    );
  }
});

module.exports = Login;
