var React = require('react'),
    ReactRouter = require('react-router');

var ListingIndex = React.createClass({

  render: function () {
    var thumbnail = "http://res.cloudinary.com/mackslist/image/upload/";

    if (this.props.listing.images.length > 0) {
      thumbnail += "c_scale,h_175,w_250/" + this.props.listing.images[0].url;
    }

    return (
      <div className="index-items" onClick={this.props.onClick}>
        <div className="panel panel-default">
          <div className="panel-body"><img src={thumbnail}></img></div>
          <div className="panel-footer">
            {this.props.listing.title}
            <br/>
            ${this.props.listing.price}</div>
        </div>
      </div>
    );
  }
});

module.exports = ListingIndex;
