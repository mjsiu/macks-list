var React = require('react');
var ReactRouter = require('react-router');

var Listing = React.createClass({
  mixins: [ReactRouter.history],

  render: function () {
    return (
      <div className="rows"onClick={this.props.onClick}>
          <div className="col">
          <img src={this.props.listing.image_url}/>

          <br/>
          <b>{this.props.listing.title} - ${this.props.listing.price}</b>
          <br/>
          {this.props.listing.description}
          <br/>
          <br/>
          </div>
      </div>
    );
  }
});

module.exports = Listing;
