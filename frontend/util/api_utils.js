var ApiActions = require('../actions/api_actions.js');
var FilterParamsStore = require('../stores/filter_params');

var ApiUtil = {

  fetchAllListings: function(){
    var filter = FilterParamsStore.params();
    $.get('api/listings', filter, function(listings){
      ApiActions.receiveAllListings(listings);
    });

  },

  fetchSingleListing: function(target_listing) {
    ApiActions.receiveAllListings([target_listing]);
  },

  createNewListing: function(listing, callback){
    $.ajax({
      url: "api/listings",
      method: "POST",
      data: { listing: listing },
      success: function (listing) {
        callback();
      },
      error: function(error) {
        ApiActions.formError(error);
      }
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
  },

  fetchStarredUserListings: function() {
    $.get('api/starred_listings', function (listings){
      ApiActions.receiveAllStarredListings(listings);
    });
  },

  starListing: function(starred_listing) {
    $.ajax({
      url: "api/starred_listings",
      method: "POST",
      data: { starred_listing: starred_listing },
      success: function (starred_listing) {
        ApiActions.receiveStarredListing(starred_listing);
      }
    });
  },

  unstarListing: function(starred_listing) {
    $.ajax({
      url: "api/starred_listings/" + starred_listing.id,
      method: "DELETE",
      data: { starred_listing: starred_listing },
      success: function (starred_listing) {
        ApiActions.receiveUnstarredListing(starred_listing);
      }
    });
  },
};

module.exports = ApiUtil;
