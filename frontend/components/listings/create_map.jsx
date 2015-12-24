var React = require('react');
var ReactDOM = require('react-dom');

var ListingStore = require('../../stores/listing');
var ApiUtil = require('../../util/api_utils');

var Map = React.createClass ({

  clickMapHandler: function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    var coords = {};
    coords.lat = lat;
    coords.lng = lng;
    this.props.onMapClick(coords);
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
    return (
      <div className="create-map" ref="map"/>
    );
  }

});

module.exports = Map;
