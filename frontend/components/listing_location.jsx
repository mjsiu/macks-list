var React = require('react');
var Map = require('./map');
var NavBar = require('./navbar');

var ListingLocation = React.createClass ({

  handleMapClick: function(coords){
    this.props.history.pushState(null, "listings/new/form", coords);
  },

  render: function(){
    return (
      <div>
        <NavBar history={this.props.history}/>
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-6">
          <h2>Click Listing Location!</h2>
            <Map onMapClick={this.handleMapClick}/>
          </div>
        </div>
     </div>
    );
  }

});

module.exports = ListingLocation;
