var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateFilters: function (filters) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FILTERS,
      bounds: bounds
    });
  },
  updateCity: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_CITY,
      city: value,
    });
  },
  updateCategory: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_CATEGORY,
      category: value,
    });
  }
};

module.exports = FilterActions;
