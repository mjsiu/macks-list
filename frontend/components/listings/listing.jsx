var React = require('react');

var NavBar = require('../navigation/navbar');
var Map = require('./map');
var StarredButton = require('../user/star_button');

var Listing = React.createClass({
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

    if (this.props.listing.images[0]) {
      this.setState({primary_image: partial + this.props.listing.images[0].url})
    } else {
      this.setState({primary_image: partial + "v1450309841/logo_k5fymd.png"})
    }
  },

  render: function () {

    return (
      <div>

      <NavBar history={this.props.history}/>

    <div className="container">


      <div className="row">

        <div className="col-md-3">
          <Map listing={this.props.listing}></Map>
            <br></br>
            <br></br>


    <div className="panel-group">
      <div className="panel panel-default">
        <div className="panel-heading">
          <h4 className="panel-title">
            <a data-toggle="collapse" href="#collapse1">{this.props.listing.title}</a>
            <StarredButton listing={this.props.listing}/>
          </h4>
        </div>
        <div id="collapse1" className="panel-collapse collapse-in">
          <ul className="list-group">
            <li className="list-group-item">${this.props.listing.price}</li>
            <li className="list-group-item">{this.props.listing.address}</li>
          </ul>

        </div>
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

      <br/>
      <br/>


      </div>
    </div>
    );
  }
});

module.exports = Listing;
