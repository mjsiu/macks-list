var React = require('react');
var ReactDOM = require('react-dom');

var ListingStore = require('../../stores/listing');
var ApiUtil = require('../../util/api_utils');

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
    marker.setIcon('http://res.cloudinary.com/mackslist/image/upload/c_scale,h_40,w_40/v1450309841/logo_k5fymd.png')

    marker.addListener('click', function() {
      infowindow.open(map, marker);
    });
    }
  },

  componentDidMount: function(){
     var mapDOMNode = this.refs.map;
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 13
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
