var AppDispatcher = require('../dispatcher/dispatcher');
var ListingConstants = require('../constants/listing_constants');
var UserConstants = require('../constants/user_constants');

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

  deleteListing: function(listings){
    AppDispatcher.dispatch({
      actionType: ListingConstants.LISTINGS_RECEIVED,
      listings: listings
    });
  },

  receiveAllUserListings: function(listings){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      listings: listings
    });
  },

}

module.exports = ApiActions;
