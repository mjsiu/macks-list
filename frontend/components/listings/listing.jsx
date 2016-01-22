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

      <div className="container index">
        <div className="row">
          <div className="col-md-3 col-sm-offset-1">
            <Map listing={this.props.listing}></Map>
            <br/>
            <StarredButton id="star-button" listing={this.props.listing}/>
            <br/>
            <div>
                <div id="collapse1">
                  <ul className="list-group">
                    <li className="list-group-item"></li>
                    <li className="list-group-item">${this.props.listing.price}</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
                </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="listing-image">
              <img src={this.state.primary_image}/>
            </div>
            <br></br>
            <br></br>

            <div>
              {this.props.listing.description}
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }

});

module.exports = Listing;
