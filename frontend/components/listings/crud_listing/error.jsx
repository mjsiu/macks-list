var React = require('react'),
    ErrorStore = require('../../../stores/error');

var Error = React.createClass({
  getInitialState: function() {
    return ({ error: "" });
  },

  onErrorChange: function () {
    if (ErrorStore.errors()) {
      this.setState({ error: "All fields are required. Please fill out all fields."});
    }
  },

  componentDidMount: function() {
    this.errorListener = ErrorStore.addListener(this.onErrorChange);
  },

  componentWillUnmount: function() {
    this.errorListener.remove();
    ErrorStore.resetErrors();
  },

  render: function() {
    return (
      <div className="form-error">
        {this.state.error}
      </div>
    );
  }
});

module.exports = Error;
