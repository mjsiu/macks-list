var React = require('react');
var Footer = require('./footer');

var Splash = React.createClass({

  createCities: function() {
    var city_list = [
      {"name": "San Francisco", "url": "v1450936881/sanfrancisco_qpvztc.png"},
      {"name": "Oakland", "url": "v1450936881/oakland_zock1c.png"},
      {"name": "San Mateo", "url": "v1450936881/sanmateo_kemz9s.png"},
      {"name": "San Jose", "url": "v1450936881/sanjose_rnyemn.png"},
      {"name": "Marin County", "url": "v1450940342/marin_t2kc8q.png"},
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

  createCategories: function() {
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
      {"category": "Sports", "url": "v1450982232/soccer19_fn5icv.png"},
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
  render: function() {
    var cities = this.createCities();
    var categories = this.createCategories();

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
            <p>"In this article, I’d like to reacquaint you with the humble workhorse of communication that is the paragraph. Paragraphs are everywhere. In fact, at the high risk of stating the obvious, you are reading one now. Despite their ubiquity, we frequently neglect their presentation. This is a mistake. Here, we’ll refer to some time-honored typesetting conventions, with an emphasis on readability, and offer guidance on adapting them effectively for devices and screens. We’ll see that the ability to embed fonts with @font-face is not by itself a solution to all of our typographic challenges."</p>

          </div>
        </div>

        <div className="splash-area3">
        </div>

        <div className="splash-area4">
          <div className="container">
          <br></br>
          <h1>SEARCH</h1>
          <h4>MAJOR BAY AREA CITIES</h4>
          <div >
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

      <div className="col-md-12">
        <div className="footer">
          
        </div>

      </div>

    </div>
    );
  }
});

module.exports = Splash;
