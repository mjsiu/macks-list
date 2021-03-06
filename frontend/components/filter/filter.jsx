var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var Filters = React.createClass({
  getInitialState: function() {
    return {
      city: 0,
      category: 0
    }
  },

  cityChanged: function(city){
    FilterActions.updateCity(city.id);
    this.setState({city: city.id})
  },

  categoryChanged: function (category) {
    FilterActions.updateCategory(category.id);
    this.setState({category: category.id})
  },

  updateFilters: function (city, category) {
    FilterActions.updateParams({
      filters: {city: city, category: category}
    });
  },

  createCityElements: function() {
    var cities_list = [
      {"name": "All Cities", "id": 0},
      {"name": "San Francisco", "id": 1},
      {"name": "Oakland", "id": 2},
      {"name": "Berkeley", "id": 3},
      {"name": "San Mateo", "id": 4},
      {"name": "San Jose", "id": 5}
    ];

    var handleCityChanged = this.cityChanged;
    var cities = cities_list.map(function(city, idx){
      var boundCityChanged = handleCityChanged.bind(null,city);
      var selectedState = "list-group-item"

      if (city.id === this.state.city) {
        selectedState = "list-group-item active"
      }

      return (
         <li key={city.id} className={selectedState}>
          <a
            onClick={boundCityChanged}
            id={city.id}>{city.name}
          </a>
        </li>
      );
    }.bind(this));
    return cities;
  },

  createCategoryElements: function() {
    var category_list = [
      {"category": "All Categories", "id": 0},
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

    var handleCategoryChanged = this.categoryChanged;
    var categories = category_list.map(function(category, idx){
      var boundCategoryChanged = handleCategoryChanged.bind(null,category);
      var selectedState = "list-group-item"

      if (category.id === this.state.category) {
        selectedState = "list-group-item active"
      }

      return (
         <li key={category.id} className={selectedState}>
          <a
            onClick={boundCategoryChanged}
            id={category.id}>{category.category}
          </a>
        </li>
      );
    }.bind(this));
    return categories;
  },

  render: function(){
    var cities = this.createCityElements();
    var categories = this.createCategoryElements();

    return (
      <div className="container">
        <div className="row search-buttons">

        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Cities
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            {cities}
          </ul>
        </div>

        <div className="dropdown">
          <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown">Categories
          <span className="caret"></span></button>
          <ul className="dropdown-menu">
            {categories}
          </ul>
        </div>

        </div>
      </div>
    );
  }
});

module.exports = Filters;
