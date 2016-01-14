var React = require('react'),
    LinkedStateMixin = require('react-addons-linked-state-mixin'),
    ApiUtil = require('../../../util/api_utils'),
    ImageUploadButton = require('./image_upload_button'),
    Error = require('./error');

var ListingForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      id: "",
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

  componentWillMount: function() {
    this.findIntialAttributes();
  },

  componentDidMount: function () {
    this.setLatLng();
  },

  setLatLng: function (){
    if (this.props.location) {
      this.state.latitude = this.props.location.query.lat;
      this.state.longitude = this.props.location.query.lng;
    }
  },

  findIntialAttributes: function () {
    if (this.props.location.query) {
      Object.keys(this.state).forEach(function(key) {
        { this.state[key] = this.props.location.query[key] }
    }.bind(this));
    }
  },

  handleClickCreate: function(event){
    event.preventDefault();

    var listing = {};
    Object.keys(this.state).forEach(function (key) {
      { listing[key] = this.state[key]; }
    }.bind(this));
    ApiUtil.createNewListing(listing, this.returnToProfile);
    // this.returnToProfile();
  },

  handleEditClick: function(event) {
    event.preventDefault();

    var listing = {};
    Object.keys(this.state).forEach(function (key) {
      { listing[key] = this.state[key]; }
    }.bind(this));
    ApiUtil.editListing(listing);
    this.returnToProfile();
  },

  returnToProfile: function(){
    this.props.history.pushState(null, "/user");
  },

  createCategoryElements: function() {
    var category_list = [
      {"category": "Appliances", "id": 1},
      {"category": "Automotive", "id": 2},
      {"category": "Clothing", "id": 3},
      {"category": "Electronics", "id": 4},
      {"category": "Farm and Garden", "id": 5},
      {"category": "Health and Beauty", "id": 6},
      {"category": "Home", "id": 7},
      {"category": "Jewelry", "id": 8},
      {"category": "Misc", "id": 9},
      {"category": "Musical Instruments", "id": 10},
      {"category": "Pets", "id": 11},
      {"category": "Sports", "id": 12}
    ];

    var categories = category_list.map(function(category, idx){
      return (
        <option key={idx} value={category.id}>{category.category}</option>
      )
    });
    return categories;
  },

  render: function() {
    var handleSubmit;
    if (this.props.type === "New Listing") {
      handleSubmit = this.handleClickCreate;
    } else {
      handleSubmit = this.handleEditClick;
    }

    var categories = this.createCategoryElements();

    return (

      <div className="container">
        <div className="row">
        <div className="well bs-component">
        <div className="form-horizontal">
        <fieldset>
        <div className="col-md-6 col-md-offset-3">
          <h2>{this.props.type}</h2>
          <form className="form-group" onSubmit={handleSubmit}>
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
                     {categories}
              </select>
            <br/>
              <ImageUploadButton storeListingImages={this.storeListingImages}/>
            <br/>
              <input type="submit" className="btn btn-default" value={this.props.type}/>
              <br/>
              <br/>
              <Error/>
          </form>
        </div>
        </fieldset>
      </div>
      </div>
      </div>
      </div>

    )
  }
});

module.exports = ListingForm;
