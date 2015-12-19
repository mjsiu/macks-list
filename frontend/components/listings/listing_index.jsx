var React = require('react');
var ReactRouter = require('react-router');

var ListingIndex = React.createClass({
  mixins: [ReactRouter.history],

  render: function () {
    var thumbnail = "http://res.cloudinary.com/mackslist/image/upload/";

    if (this.props.listing.images.length > 0) {
      thumbnail += "c_scale,h_175,w_250/" + this.props.listing.images[0].url;
    }

    return (
      <div className="index-items" onClick={this.props.onClick}>
          <div className="col">
          <b>{this.props.listing.title} - ${this.props.listing.price}</b>
          <br/>
          <img src={thumbnail}/>
          <br/>
          </div>
      </div>
    );
  }
});

module.exports = ListingIndex;
