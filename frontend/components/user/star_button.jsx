var React = require('react');

var StarredStore = require('../../stores/starred');
var ApiUtil = require('../../util/api_utils');
var LinkedStateMixin = require('react-addons-linked-state-mixin');


var StarButton = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function() {
    return {
      starred: StarredStore.checkStarred(this.props.listing)
    };
  },

  onChange: function() {
    this.setState({starred: StarredStore.checkStarred(this.props.listing)});
  },

  componentDidMount: function() {
    this.starredListener = StarredStore.addListener(this.onChange);
    ApiUtil.fetchStarredUserListings();
  },

  componentWillUnmount: function() {
    this.starredListener.remove();
  },

  handleStarredClick: function() {
    ApiUtil.starListing(this.props.listing);
    ApiUtil.fetchStarredUserListings();
  },

  handleUnstarClick: function() {
    ApiUtil.unstarListing(this.props.listing);
  },

  render: function() {
    var button;
    if (this.state.starred) {
      button =
      <button
        onClick={this.handleUnstarClick}
        type="button"
        className="btn btn-primary btn-xs">
        Unstar
      </button>
    } else {
      button =
      <button
        onClick={this.handleStarredClick}
        type="button"
        className="btn btn-default btn-xs"
        valueLink={this.linkState('starred')}>
        Star
      </button>
    }

    return (
      <div>
        {button}
      </div>
    )
  }
});

module.exports = StarButton;
