var React = require('react'),
    History = require('react-router').History,
    Map = require('./map'),
    StarredButton = require('../user/star_button');

var Listing = React.createClass({
  mixins: [History],

  getInitialState: function() {
    return {
      primary_image: ''
    }
  },

  componentDidMount: function() {
    this.imageCheck();
  },

  imageCheck: function() {
    var partial = "http://res.cloudinary.com/mackslist/image/upload/c_scale,h_450/";

    if (this.props.listing.images) {
      this.setState({primary_image: partial + this.props.listing.images[0].url})
    } else {
      this.setState({primary_image: partial + "v1450309841/logo_k5fymd.png"})
    }
  },

  render: function () {
    return (
      <div>
      <br/>
      <br/>

      <div className="container">
        <div className="row">
          <span>Create date:</span>
        </div>
      </div>
    </div>
    );
  }

});

module.exports = Listing;
