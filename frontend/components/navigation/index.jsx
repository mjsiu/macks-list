var React = require('react');

var Splash = React.createClass({

  createCities: function() {
    var city_names = ["San Francisco", "San Mateo", "Oakland", "San Jose"];

    var cities = city_names.map(function(city_name){
      return (
        <div className="index-items">
          <div className="panel panel-default">
            <div className="panel-heading">{city_name}</div>
            <div className="panel-body"><img src=""></img></div>
            <div class="panel-footer">footer</div>
          </div>
        </div>
      );
    });
    return cities;
  },

  render: function() {
    var cities = this.createCities();

    return (
      <div>

      <div className="splash-area">
        <h2>Search through popular Bay Area Cities</h2>
      </div>

      <div className="row">
        <div className="col-md-12">
            {cities}
        </div>
      </div>

     </div>
    );
  }
});

module.exports = Splash;
