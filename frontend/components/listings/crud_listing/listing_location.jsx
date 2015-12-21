var React = require('react');

var Map = require('../map');
var NavBar = require('../../navigation/navbar');

var ListingLocation = React.createClass ({

  handleMapClick: function(coords){
    this.props.history.pushState(null, "listings/new/form", coords);
    debugger
  },

  render: function(){
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="row">
          <div className="col-md-3"></div>
          <div className="col-md-5">
          <div className="location-map">
          <h2>Click Listing Location!</h2>
            <Map onMapClick={this.handleMapClick}/>
          </div>
          </div>
          <div className="col-md-3"></div>
        </div>
     </div>
    );
  }

});

module.exports = ListingLocation;
