var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var FilterCity = React.createClass({
  cityIdChanged: function(e){
    FilterActions.updateMaxSeating(e.target.value);
  },

  render: function(){
    return (
      <div>
        <label>Filter City</label>
        <input type="text"/>


         <br/>
      </div>
    );
  }
});

module.exports = FilterCity;
