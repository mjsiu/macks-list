var Store = require('flux/utils').Store;
var StarredConstants = require('../constants/user_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var UserStore = new Store(AppDispatcher);

var _starred_listings = [];

var resetStarredListings = function(starred_listings) {
  _starred_listings = starred_listings;
};

var removeListing = function(target_listing){
  _starred_listings.forEach(function(listing, idx){
    if (listing.id === target_listing.id){
      _starred_listings.splice(idx,1);
    }
  });
}

StarredStore.all = function() {
  return _starred_listings.slice(0);
};

StaredStore.__onDispatch = function (payload) {
  switch(payload.actionType) {
    case StarredConstants.STARRED_RECEIVE:
      resetUserListings(payload.user_listings);
      StarredStore.__emitChange();
      break;
    case StarredConstants.STARRED_DELETE_LISTING:
      removeListing(payload.listing);
      StarredStore.__emitChange();
      break;
  }
};

module.exports = UserStore;
