var React = require('react');
var Footer = require('./footer.jsx');

var Splash = React.createClass({
  createCityElements: function() {
    var city_list = [
      {"name": "San Francisco", "url": "v1450936881/sanfrancisco_qpvztc.png"},
      {"name": "Oakland", "url": "v1450936881/oakland_zock1c.png"},
      {"name": "San Mateo", "url": "v1450936881/sanmateo_kemz9s.png"},
      {"name": "San Jose", "url": "v1450936881/sanjose_rnyemn.png"},
      {"name": "Marin County", "url": "v1450940342/marin_t2kc8q.png"}
    ];

    var cities = city_list.map(function(city, idx){
      var partial_url = "http://res.cloudinary.com/mackslist/image/upload/c_scale,w_235/";
      return (
        <div key={idx} className="col-centered city-items">
          <div className="panel panel-default">
            <div className="panel-heading">{city["name"]}</div>
            <div className="panel-body" onClick={this.handleSearchClick}><img src={partial_url + city["url"] }></img></div>
          </div>
        </div>
      );
    }.bind(this));
    return cities;
  },


  handleCreateClick: function () {
    this.props.history.pushState(null, "listings/new");
  },

  handleSearchClick: function() {
    this.props.history.pushState(null, "listings/search");
  },

  render: function() {
    var cities = this.createCityElements();

    return (
      <div className="row-centered">


        <div className="splash-area1">
          <div className="splash-area1-content">
            <div id="cf3">
              <img className="bottom" src="http://res.cloudinary.com/mackslist/image/upload/c_scale,h_1050,w_1663/v1451340441/Golden-Gate-Wallpaper-L_15MBP_wowf6t.jpg" />
              <img className="top" src="http://res.cloudinary.com/mackslist/image/upload/c_scale,h_1050,w_1663/v1450937916/sf_cxayxy.jpg" />
            </div>
            <h1>MACKSLIST</h1>
          </div>
        </div>

        <div className="splash-area2">
          <div className="splash-area2-content">
            <h1>About</h1>
            <p>
              ｢ MacksList is a place for people in the bay area to sell their
              used goods. With a varied list of supported cities and categories,
              you can search through your area for exactly what you are looking for.
              MacksList is dedicated to helping bay area locals connect and sell their
              goods in the easiest way possible.
              <br/>
              <br/>
              Start browsing, creating, or favoriting listings today. ｣
            </p>
          </div>
        </div>

        <div className="splash-area3"/>

        <div className="splash-area4">
            <div className="col-md-12">
                {cities}
            </div>

        </div>
        <Footer/>
      </div>
    );
  }

});

module.exports = Splash;

// <div className="footer">
//   <div className="container">
//     <br/>
//     <br/>
//     <br/>

//   </div>
// </div>
