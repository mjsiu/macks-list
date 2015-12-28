var AppDispatcher = require('../dispatcher/dispatcher');

var ListingConstants = require('../constants/listing_constants');
var UserConstants = require('../constants/user_constants');
var StarredConstants = require('../constants/starred_constants');

ApiActions = {
  receiveAllListings: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  },

  receiveSingleListings: function(listing){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listing
    });
  },

  receiveDeletedListing: function(listing){
    AppDispatcher.dispatch({
      actionType: UserConstants.USER_DELETE_LISTING,
      listing: listing
    });
  },

  receiveAllUserListings: function(users_listings){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      user_listings: users_listings
    });
  },

  receiveAllStarredListings: function(starred_listings){
    AppDispatcher.dispatch({
      actionType: StarredConstants.STARRED_RECEIVE,
      starred_listings: starred_listings
    });
  },

  receiveStarredListing: function(starred_listing){
    AppDispatcher.dispatch({
      actionType: StarredConstants.STARRED_DELETE_LISTING,
      starred_listing: starred_listing
    });
  },

  receiveUnstarredListing: function(starred_listing){
    AppDispatcher.dispatch({
      actionType: StarredConstants.STARRED_DELETE_LISTING,
      starred_listing: starred_listing
    });
  },

  formError: function(error) {
    AppDispatcher.dispatch({
      actionType:ErrorConstants.ERROR_ERROR,
      error: error
    });
  }

}

module.exports = ApiActions;
