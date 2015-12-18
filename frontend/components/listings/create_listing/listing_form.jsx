var React = require('react');
var History = require('react-router').History;
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ApiUtil = require('../../../util/api_utils');
var NavBar = require('../../navigation/navbar');
var ImageUploadButton = require('./image_upload_button');

var ListingForm = React.createClass({
  mixins: [LinkedStateMixin, History],

  getInitialState: function(){
    return {
      title: "",
      description: "",
      price: "",
      address: "",
      city_id: "",
      category_id: "",
      latitude: this.props.location.query.lat,
      longitude: this.props.location.query.lng,
      image_array: []
    };
  },

  storeListingImages: function (image_array) {
    var temp_imgs = [];
    image_array.forEach(function(image){
      temp_imgs.push(image.url.slice(61));
    });
    this.state.image_array = temp_imgs;
  },

  handleSubmit: function(event){
    event.preventDefault();
    var listing = {};
    Object.keys(this.state).forEach(function (key) {
      { listing[key] = this.state[key]; }
    }.bind(this));
    ApiUtil.createNewListing(listing);
    this.returnToHome();
  },

  returnToHome: function(){
    this.props.history.pushState(null, "/");
  },

  render: function() {
    return (
      <div>
      <NavBar history={this.props.history}/>
      <div className="row">
        <div className="col-md-4"/>
        <div className="col-md-4">
          <h3>Create a Listing</h3>
          <form onSubmit={this.handleSubmit}>
            <label>Title</label>
              <input className="form-control"
                     type="text"
                    valueLink={this.linkState('title')}/>
            <br/>
            <label>Description</label>
              <textarea className="form-control"
                     type="text"
                     valueLink={this.linkState('description')}></textarea>
            <br/>
            <label>Price</label>
              <input className="form-control"
                     min='0'
                     type="number"
                     valueLink={this.linkState('price')}/>
            <br/>
            <label>Address</label>
              <input className="form-control"
                     type="text"
                     valueLink={this.linkState('address')}/>
            <br/>
            <label>City</label>
              <select className="form-control"
                     type="text"
                     valueLink={this.linkState('city_id')}>
                     <option></option>
                     <option value={1}>San Francisco</option>
                     <option value={2}>Oakland</option>
                     <option value={3}>Berkeley</option>
                     <option value={4}>San Mateo</option>
                     <option value={5}>San Jose</option>
              </select>
            <br/>
            <label>Category</label>
              <select className="form-control"
                     type="text"
                     valueLink={this.linkState('category_id')}>
                     <option></option>
                     <option value={1}>Electronics</option>
                     <option value={2}>Clothing</option>
                     <option value={3}>Home</option>
                     <option value={4}>Sports</option>
              </select>
            <br/>
              <ImageUploadButton storeListingImages={this.storeListingImages}/>
            <br/>
              <input type="submit" className="btn btn-default" value="Create Listing"/>
          </form>
        </div>
      </div>
    </div>
    )
  }

});

module.exports = ListingForm;
