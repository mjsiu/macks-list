var React = require('react');
var ReactDOM = require('react-dom');
var ListingStore = require('./stores/listing.js');
var ApiUtil = require('./util/api_utils.js');
var Index = require('./components/index.jsx');

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Index/>,
    document.getElementById('root')
  );
});
