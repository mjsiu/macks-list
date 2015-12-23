var AppDispatcher = require('../dispatcher/dispatcher');
var FilterConstants = require('../constants/filter_constants');

var FilterActions = {
  updateFilters: function (filters) {
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_FILTERS,
      bounds: bounds
    });
  },
  updateCityId: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_CITY_ID,
      city_id: value,
    });
  },
  updateCategoryId: function (value){
    AppDispatcher.dispatch({
      actionType: FilterConstants.UPDATE_CATEGORY_ID,
      category_id: value,
    });
  }
};

module.exports = FilterActions;
