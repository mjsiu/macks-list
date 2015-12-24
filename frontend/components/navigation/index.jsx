var React = require('react');

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

  render: function() {
    var cities = this.createCities();

    return (
      <div className="row-centered">


        <div className="splash-area1">
        </div>

        <div className="splash-area2">
          <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1>ABOUT</h1>
          <text>"In this article, I’d like to reacquaint you with the humble workhorse of communication that is the paragraph. Paragraphs are everywhere. In fact, at the high risk of stating the obvious, you are reading one now. Despite their ubiquity, we frequently neglect their presentation. This is a mistake. Here, we’ll refer to some time-honored typesetting conventions, with an emphasis on readability, and offer guidance on adapting them effectively for devices and screens. We’ll see that the ability to embed fonts with @font-face is not by itself a solution to all of our typographic challenges."</text>
          </div>
        </div>

        <div className="splash-area3">
        </div>

        <div className="splash-area4">
          <div className="container">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          <h1>SUPPORT</h1>
          <h4>For major bay area cities</h4>
          <div >
              {cities}
          </div>
        </div>
      </div>

    </div>
    );
  }
});

module.exports = Splash;
