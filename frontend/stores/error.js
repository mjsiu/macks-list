var Store = require('flux/utils').Store;
var ErrorConstants = require('../constants/error_constants.js');
var AppDispatcher = require('../dispatcher/dispatcher');
var ErrorStore = new Store(AppDispatcher);

var _errors = [];

ErrorStore.errors = function () {
  return _errors;
};

ErrorStore.resetErrors = function() {
_errors = false;
};

function handleErrors (data) {
_errors = true;
  ErrorStore.__emitChange();
};

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.ERROR_ERROR:
      handleErrors(payload.error);
      break;
  }
};

module.exports = ErrorStore;
