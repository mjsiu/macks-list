var React = require('react');
var Map = require('./Map');

var ListingLocation = React.createClass ({

  handleMapClick: function(coords){
    this.props.history.pushState(null, "listings/new", coords);
  },

  render: function(){
    return(
      <div>
        <h2>Click Listing Location!</h2>
          <Map onMapClick={this.handleMapClick}/>
      </div>

    );
  }

});

module.exports = ListingLocation;
