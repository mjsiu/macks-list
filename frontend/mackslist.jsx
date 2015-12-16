var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var ListingStore = require('./stores/listing.js');
var ApiUtil = require('./util/api_utils.js');
var Index = require('./components/index.jsx');
var ListingForm = require('./components/listing_form.jsx');
var ListingShow = require('./components/listing_show.jsx');

var App = React.createClass({
  render: function(){
    return (
        <div>
          {this.props.children}
        </div>
    );
  }
});

var routes = (
    <Route path="/" component={App}>
      <IndexRoute component={Index}/>
      <Route path="listings/new" component={ListingForm}/>
      <Route path="listings/:listingId" component={ListingShow}/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
