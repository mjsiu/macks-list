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

  receiveAllUserListings: function(users_listings){
    AppDispatcher.dispatch({
      actionType: UserConstants.USERS_RECEIVED,
      user_listings: users_listings
    });
  },

}

module.exports = ApiActions;
