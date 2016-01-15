var React = require('react'),
    CreateMap = require('../create_map');

var ListingLocation = React.createClass ({

  handleMapClick: function(coords){
    this.props.history.pushState(null, "listings/new/form", coords);
  },

  render: function(){
    return (
      <div className="container">
        <div className="row">

          <div className="page-header">
            <h1>Click Listing Location</h1>
          </div>

          <div className="col-md-12">
            <CreateMap onMapClick={this.handleMapClick}/>
          </div>

        </div>
      </div>
    );
  }

});

module.exports = ListingLocation;
// <div className="container">
//   <div className="row">
//
//     <div className="page-header">
//       <h1>PICK LISTING LOCATION</h1>
//     </div>
//
//     <div className="col-md-12">
//       <CreateMap onMapClick={this.handleMapClick}/>
//     </div>
//
//   </div>
// </div>
