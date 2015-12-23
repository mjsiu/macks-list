var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Index = require('./components/navigation/index');
var ListingNew = require('./components/listings/crud_listing/listing_new');
var ListingEdit = require('./components/listings/crud_listing/listing_edit');
var ListingShow = require('./components/listings/listing_show');
var ListingLocation = require('./components/listings/crud_listing/listing_location');
var UserShow = require('./components/user/user_show');

// TODO refactor the routes

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
      <Route path="listings/new" component={ListingLocation}/>
      <Route path="listings/new/form" component={ListingNew}/>
      <Route path="listings/:listingId" component={ListingShow}/>
      <Route path="listings/edit/:listingId" component={ListingEdit}/>
      <Route path="user" component={UserShow}/>
    </Route>
);

document.addEventListener("DOMContentLoaded", function () {
  ReactDOM.render(
    <Router>{routes}</Router>,
    document.getElementById('root')
  );
});
