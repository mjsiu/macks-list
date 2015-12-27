var React = require('react');

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
      var partial_url = "http://res.cloudinary.com/mackslist/image/upload/c_scale,w_350/";
      return (
        <div key={idx} className="col-centered">
          <div className="panel panel-default">
            <div className="panel-heading">{city["name"]}</div>
            <div className="panel-body"><img src={partial_url + city["url"] }></img></div>
          </div>
        </div>
      );
    });
    return cities;
  },

  createCategoryElements: function() {
    var category_list = [
      {"category": "Appliances", "url": "v1450981839/fridge3_1_nnofvd.png"},
      {"category": "Automotive", "url": "v1450982231/car80_leqiqv.png"},
      {"category": "Clothing", "url": "v1450982232/winter-clothes_hs6lj4.png"},
      {"category": "Electronics", "url": "v1450982231/computer197_wjk3dj.png"},
      {"category": "Farm and Garden", "url": "v1450982231/flowers12_eo6eal.png"},
      {"category": "Health and Beauty", "url": "v1450982232/heart8_tnjrlb.png"},
      {"category": "Home", "url": "v1450982232/home168_aqifxo.png"},
      {"category": "Jewelry", "url": "v1450982231/diamond4_xqeqwg.png"},
      {"category": "Misc", "url": "v1450982231/bald_qhpjiv.png"},
      {"category": "Musical Instruments", "url": "v1450982232/guitars_t5zlgf.png"},
      {"category": "Pets", "url": "v1450982231/dog50_g8mrlb.png"},
      {"category": "Sports", "url": "v1450982232/soccer19_fn5icv.png"}
    ];

    var categories = category_list.map(function(category, idx){
      var partial_url = "http://res.cloudinary.com/mackslist/image/upload/";
      return (
        <div key={idx} className="col-centered">
          <div className="panel panel-default">

            <div className="panel-body"><img src={partial_url + category["url"] }></img></div>
          </div>
        </div>
      );
    });
    return categories;
  },

  handleCreateClick: function () {
    this.props.history.pushState(null, "listings/new");
  },

  handleSearchClick: function() {
    this.props.history.pushState(null, "listings/search");
  },

  render: function() {
    var cities = this.createCityElements();
    var categories = this.createCategoryElements();

    return (
      <div className="row-centered">

        <div className="splash-area1">
          <div className="splash-area1-content">
            <h1>MACKSLIST</h1>
          </div>
        </div>

        <div className="splash-area2">
          <div className="splash-area2-content">
            <h1>ABOUT</h1>
            <p>
              MacksList is a place for people in the bay area to sell their
              used goods. With a varied list of supported cities and categories,
              you can search through your area for exactly what you are looking for.
              MacksList is dedicated to helping bay area locals connect and sell their
              goods in the easiest way possible.
              <br/>
              <br/>
              Start browsing, creating, or favoriting listings today.
            </p>
          </div>
        </div>

        <div className="splash-area3"/>

        <div className="splash-area4">
          <div className="container">
          <h1>SEARCH</h1>
          <br/>
          <p>Major bay area cities</p>
          <br/>
            <div>
                {cities}
            </div>
          </div>
        </div>

        <div className="splash-area5">
            <div className="container">
            <h1>CATEGORIES</h1>
            <div className="col-md-11">
                {categories}
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="container">
            <br/>
            <br/>
            <br/>
            <h1>GET STARTED</h1>
            <br/>
            <button onClick={this.handleCreateClick} type="button" className="btn btn-primary">Create Listings</button>  <button onClick={this.handleSearchClick} type="button" className="btn btn-primary">Search Listings</button>
          </div>
        </div>
      </div>
    );
  }

});

module.exports = Splash;
