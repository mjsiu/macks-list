var React = require('react');

var Splash = React.createClass({

  render: function() {
    return (
      <div className="splash-area">
      <span className="splash-content">
        Search
        Category: <input type="text"/>
        City: <input type="text"/>  <button className="btn btn-default" type="button">Search</button>
      </span>

      </div>
    );
  }
});

module.exports = Splash;
