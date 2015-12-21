var React = require('react');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ApiUtil = require('../../../util/api_utils');
var ImageUploadButton = require('./image_upload_button');

var ListingForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      title: "",
      description: "",
      price: "",
      address: "",
      city_id: "",
      category_id: "",
      latitude: "",
      longitude: "",
      images_attributes: []
    };
  },

  storeListingImages: function (images_attributes) {
    var temp_imgs = [];
    images_attributes.forEach(function(image){
      temp_imgs.push({url: image.url.slice(61)});
    });
    this.state.images_attributes = temp_imgs;
  },

  componentDidMount: function () {
    this.setLatLng();
    this.findIntialAttributes();
  },

  setLatLng: function (){
    if (this.props.location) {
      this.state.latitude = this.props.location.query.lat;
      this.state.longitude = this.props.location.query.lng;
    }
  },

  findIntialAttributes: function () {
    if (this.props.listing) {
      Object.keys(this.state).forEach(function(key) {
        { this.state[key] = this.props.listing[key] }
    }.bind(this));
    }
  },

  handleClickCreate: function(event){
    event.preventDefault();

    var listing = {};
    Object.keys(this.state).forEach(function (key) {
      { listing[key] = this.state[key]; }
    }.bind(this));

    ApiUtil.createNewListing(listing);
    this.returnToProfile();
  },

  handleEditClick: function(event) {
    debugger
    event.preventDefault();

    var listing = {};
    Object.keys(this.state).forEach(function (key) {
      { listing[key] = this.state[key]; }
    }.bind(this));

    ApiUtil.editListing(listing);
    this.returnToProfile();
  },

  returnToProfile: function(){
    this.props.history.pushState(null, "/user", {});
  },

  render: function() {
    var handleSubmit;
    if (this.props.type === "New Listing") {
      handleSubmit = this.handleClickCreate;
    } else {
      handleSubmit = this.handleEditClick;
    }

    return (
      <div>
      <div className="row">
        <div className="col-md-4"/>
        <div className="col-md-4">
          <h2>{this.props.type}</h2>
          <form onSubmit={ handleSubmit}>
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
              <input type="submit" className="btn btn-default" value={this.props.type}/>
          </form>
        </div>
      </div>
    </div>
    )
  }
});

module.exports = ListingForm;
