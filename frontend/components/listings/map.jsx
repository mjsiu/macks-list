var React = require('react'),
    ReactDOM = require('react-dom'),
    ListingStore = require('../../stores/listing'),
    ApiUtil = require('../../util/api_utils');

var Map = React.createClass ({
  setMap: function () {
    if (this.props.listing) {
    var map = this.map
    var listing = this.props.listing;
    var infowindow = new google.maps.InfoWindow({
      content: listing.address
    });

    var myLatLng = {
      lat: listing.latitude,
      lng: listing.longitude
    };

    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: listing.title
    });
    marker.setMap(map);
    marker.setIcon('http://res.cloudinary.com/mackslist/image/upload/c_scale,h_35,w_35/v1450309841/logo_k5fymd.png')

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });

    }
    // map.setCenter(new google.maps.LatLng(listing.latitude, listing.longitude))
  },

  componentDidMount: function(){
     var mapDOMNode = this.refs.map;
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 12
     };
     this.map = new google.maps.Map(mapDOMNode, mapOptions);
     this.mapClickListener = google.maps.event.addListener(this.map, "dblclick", this.clickMapHandler);
   },

  render: function () {
    this.setMap();
    return (
      <div className="map" ref="map"/>
    );
  }

});

module.exports = Map;
