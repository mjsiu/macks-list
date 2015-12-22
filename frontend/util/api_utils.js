var ApiActions = require('../actions/api_actions.js');

var ApiUtil = {

  fetchAllListings: function(){
    $.get('api/listings', function(listings){
      ApiActions.receiveAllListings(listings);
    });
  },

  fetchSingleListing: function(target_listing) {
    ApiActions.receiveAllListings([target_listing]);
  },

  createNewListing: function(listing){
    $.ajax({
      url: "api/listings",
      method: "POST",
      data: { listing: listing }
    });
  },

  deleteListing: function (listing) {
    $.ajax({
      url: "api/listings/" + listing.id,
      method: "DELETE",
      data: { listing: listing },
      success: function (listing) {
        ApiActions.receiveDeletedListing(listing);
      }
    });
  },

  editListing: function (listing) {
    $.ajax({
      url: "api/listings/" + listing.id,
      method: "PATCH",
      data: { listing: listing }
    });
  },

  fetchAllUserListings: function() {
    $.get('api/users', function (listings){
      ApiActions.receiveAllUserListings(listings);
    });
  }
};

module.exports = ApiUtil;
