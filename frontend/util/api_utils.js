var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchListings: function(){
    $.get('api/listings', function(listings){
      ApiActions.receiveAll(listings);
    });
  },
}

module.exports = ApiUtil;
