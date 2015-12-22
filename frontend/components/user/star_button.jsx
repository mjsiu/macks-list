var React = require('react');

var StarredStore = require('../../stores/starred');
var ApiUtil = require('../../util/api_utils');

var StarButton = React.createClass({
  getInitialState: function() {
    return {
      starred: "false"
    };
  },

  onChange: function() {
    this.setState({starred: StarredStore.checkStarred(this.props.listing).toString()});
    debugger
  },

  componentDidMount: function() {
    this.starredListener = StarredStore.addListener(this.onChange);
  },

  componentWillUnmount: function() {
    this.starredListener.remove();
  },

  handleStarredClick: function() {
    ApiUtil.starListing(this.props.listing);
  },

  handleUnstarClick: function() {
    ApiUtil.unstarListing(this.props.listing);
  },

  render: function() {
    debugger
    return (
      <div>
        <button onClick={this.handleStarredClick} type="button" className="btn btn-default">{this.state.starred}</button>
      </div>
    )
  }
});

module.exports = StarButton;
