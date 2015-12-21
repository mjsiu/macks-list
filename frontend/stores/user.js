var Store = require('flux/utils').Store;
var UserConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);

var _user_listings = [];

var resetUserListings = function(user_listings) {
  _user_listings = user_listings;
};

var removeListing = function(listing){
  var idx = _user_listings.indexOf(listing)

  _user_listings.splice(idx);
}

UserStore.all = function(user_listings) {
  return _user_listings.slice(0);
};

UserStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case UserConstants.USERS_RECEIVED:
      resetUserListings(payload.user_listings);
      UserStore.__emitChange();
      break;
    case UserConstants.USER_DELETE_LISTING:
         removeListing(payload.listing);
         UserStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
