var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {
  fetchAllListings: function(){
    $.get('api/listings', function(listings){
      ApiActions.receiveAllListings(listings);
    });
  },

  createNewListing: function(listing){
    $.ajax({
      url: "api/listings",
      method: "POST",
      data: { listing: listing }
    });
  },

  fetchAllUserListings: function() {
    $.get('api/listings', function (listings){
      var userListings = [];
      listings.forEach(function(listing){
        if (listing.id === parseInt(window.user.user_id)){
          userListings.push(listing);
        }
      });
      ApiActions.receiveAllUserListings(userListings);
    });
  }
};

module.exports = ApiUtil;
