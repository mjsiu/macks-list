var React = require('react');
var ReactRouter = require('react-router');

var ListingIndex = React.createClass({

  render: function () {
    var thumbnail = "http://res.cloudinary.com/mackslist/image/upload/";

    if (this.props.listing.images.length > 0) {
      thumbnail += "c_scale,h_175,w_250/" + this.props.listing.images[0].url;
    }

    return (
      <div className="index-items" onClick={this.props.onClick}>
        <div>
          {this.props.listing.title}
        </div>
        <div>
          <img src={thumbnail}></img>
        </div>
        <div>
          {this.props.listing.description}
        </div>

      </div>
    );
  }
});

module.exports = ListingIndex;
