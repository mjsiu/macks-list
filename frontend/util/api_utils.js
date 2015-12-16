var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchAllListings: function(){
    $.get('api/listings', function(listings){
      ApiActions.receiveAllListings(listings);
    });
  },
}

module.exports = ApiUtil;
