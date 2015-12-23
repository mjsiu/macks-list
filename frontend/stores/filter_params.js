var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var ListingStore = new Store(AppDispatcher);

var _params = {city_id: 1, category_id: 1};

FilterParamsStore.params = function () {
  return Object.assign({}, _params);
};

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_CITY_ID:
      _params.city_id = payload.city_id;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_CATEGORY_ID:
      _params.category_id = payload.category_id;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_FILTERS:
      _params.filters = payload.filters;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
