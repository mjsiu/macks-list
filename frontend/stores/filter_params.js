var Store = require('flux/utils').Store;
var FilterConstants = require('../constants/filter_constants');
var AppDispatcher = require('../dispatcher/dispatcher');
var FilterParamsStore = new Store(AppDispatcher);

var _params = {};

FilterParamsStore.params = function () {
  return Object.assign({}, _params);
};

FilterParamsStore.reset = function() {
  _params = {};
}

FilterParamsStore.__onDispatch = function (payload) {
  switch(payload.actionType){
    case FilterConstants.UPDATE_CITY:
      _params.city = payload.city;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_CATEGORY:
      _params.category = payload.category;
      FilterParamsStore.__emitChange();
      break;
    case FilterConstants.UPDATE_FILTERS:
      _params.filters = payload.filters;
      FilterParamsStore.__emitChange();
      break;
  }
};

module.exports = FilterParamsStore;
