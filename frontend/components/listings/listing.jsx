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
    var partial = "http://res.cloudinary.com/mackslist/image/upload/c_scale,w_450/";

    if (this.props.listing.images) {
      this.setState({primary_image: partial + this.props.listing.images[0].url})
    } else {
      this.setState({primary_image: partial + "v1450309841/logo_k5fymd.png"})
    }
  },

  render: function () {
    return (
      <div className="container listing">
      <br/>
      <br/>
          <div className="row">
          <div className="col-md-12">
          <div className="create-date">Created: {this.props.listing.create_date} ago</div>
          <div className="social-icons">
            Share:
            <a href="https://instagram.com" target="_blank"><i className="fa fa-instagram"></i></a>
            <a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a>
            <a href="https://www.twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a>
        </div>
      </div>
    </div>
        <br/>

        <div className="row">

          <div className="col-md-6">
            <Map listing={this.props.listing}></Map>
            <br/>
              <h1>{this.props.listing.title}</h1>
              <h3>${this.props.listing.price}</h3>
              <br/>
              {this.props.listing.description}

          </div>

        <div className="col-md-6">
          <img src={this.state.primary_image}/>
        </div>




      </div>

    </div>
    );
  }

});

module.exports = Listing;
