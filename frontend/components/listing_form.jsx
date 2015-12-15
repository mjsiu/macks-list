var React = require('react');
var ApiUtil = require('../util/api_util');
var LinkedStateMixin = require('react-addons-linked-state-mixin');

var BenchForm = React.createClass({
  mixins: [LinkedStateMixin],

  getInitialState: function(){
    return {
      title: "",
      description: "",
      price: "",
      address: "",
      author_id: "",
      city_id: "",
      category_id "",
    };
  },

  handleSubmit: function(event){
   event.preventDefault();
   var listing = {};

   ApiUtil.createBench(bench);
  },

  render: function() {
    return (
      <div>
        <h3>Create a Listing</h3>
        <form onSubmit={this.handleSubmit}>
          <label>Title</label>
            <input type="text" valueLink={this.linkState('title')}/>
            <br/>
          <label>Description</label>
            <input type="text" valueLink={this.linkState('description')}/>
            <br/>
          <label>Price</label>
            <input min='0' type="number" valueLink={this.linkState('price')}/>
            <br/>
        </form>
        <button onClick={this.handleCancel}>Cancel</button>
      </div>
    )
  }

});

module.exports = BenchForm;
