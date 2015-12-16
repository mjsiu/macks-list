var React = require('react');
var ReactDOM = require('react-dom');
var ListingStore = require('../stores/listing');
var ApiUtil = require('../util/api_utils');

var Map = React.createClass ({
  getInitialState: function() {
    return {
    listings: ListingStore.all()
    }
  },

  clickMapHandler: function (e) {
    var lat = e.latLng.lat();
    var lng = e.latLng.lng();
    var coords = {};
    coords.lat = lat;
    coords.lng = lng;
    this.props.clickMapHandler(coords);
  },

  onChange: function () {
    this.setState({listings: ListingStore.all() });
  },

  componentDidMount: function(){
     var mapDOMNode = this.refs.map;
     var mapOptions = {
       center: {lat: 37.7758, lng: -122.435},
       zoom: 13
     };
     this.map = new google.maps.Map(mapDOMNode, mapOptions);
   },

  render: function () {
    debugger
    return (
      <div className="map" ref="map">
      </div>
    );
  }

});

module.exports = Map;
