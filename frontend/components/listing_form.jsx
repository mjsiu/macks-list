var React = require('react');
var ApiUtil = require('../util/api_utils');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var ListingForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      title: "",
      description: "",
      price: "",
      address: "",
      author_id: "",
      city_id: "",
      category_id: "",
      image_url: ""
    };
  },

  handleSubmit: function(event){
   event.preventDefault();
   var listing = {};
   Object.keys(this.state).forEach(function (key) {
     { listing[key] = this.state[key]; }
   }.bind(this));
   debugger
   ApiUtil.createNewListing(listing);
  },

  render: function() {
    return (
      <div className="row">
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
            <label>Author</label>
              <input className="form-control"
                     type="text"
                     valueLink={this.linkState('author_id')}/>
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
            <label>Img-Url</label>
              <input className="form-control"
                     type="text"
                     valueLink={this.linkState('image_url')}/>
            <br/>
            <button>Create</button>
          </form>

        </div>
      </div>
    )
  }

});

module.exports = ListingForm;
