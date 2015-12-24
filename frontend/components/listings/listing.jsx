var React = require('react');
var History = require('react-router').History

var Map = require('./map');
var StarredButton = require('../user/star_button');

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
          <div className="col-md-3">
            <Map listing={this.props.listing}></Map>
            <br></br>
            <br></br>

            <div className="panel-group">
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" href="#collapse1">{this.props.listing.title}</a>
                      <span class="badge"><StarredButton listing={this.props.listing}/></span>
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
      </div>
    </div>
    );
  }

});

module.exports = Listing;
