var React = require('react');

var NavBar = require('./navbar');
var Footer = require('./footer');

var App = React.createClass({

  render: function() {
    return (
      <div>
        <NavBar history={this.props.history}/>

        {this.props.children}

    </div>
    );
  }
});

module.exports = App;
