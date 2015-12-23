var React = require('react');
var FilterActions = require('../../actions/filter_actions');

var Filters = React.createClass({

  cityChanged: function(e){
    debugger
    FilterActions.updateCity(e.target.id);
  },

  categoryChanged: function (e) {
    FilterActions.updateCategory(e.target.id);
  },

  updateFilters: function (city, category) {
    FilterActions.updateParams({
      filters: {city: city, category: category}
    });
  },

  render: function(){
    return (
      <div className="container">
        <div className="row">
        <div className="col-md-3">
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse1">City</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse-in">
              <ul className="list-group">
                <li className="list-group-item">
                  <a onClick={this.cityChanged} id={0}>All Cities</a>
                  <span className="badge"># of listings</span>
                </li>
                <li className="list-group-item">
                  <a onClick={this.cityChanged} id={1}>San Francisco</a>
                  <span className="badge"># of listings</span>
                </li>
                <li className="list-group-item">
                  <a onClick={this.cityChanged} id={2}>Oakland</a>
                  <span className="badge"># of listings</span>
                </li>
                <li className="list-group-item">
                  <a onClick={this.cityChanged} id={3}>Berkeley</a>
                  <span className="badge"># of listings</span>
                </li>
                <li className="list-group-item">
                  <a onClick={this.cityChanged} id={4}>San Mateo</a>
                  <span className="badge"># of listings</span>
                </li>
                <li className="list-group-item">
                  <a onClick={this.cityChanged} id={5}>San Jose</a>
                  <span className="badge"># of listings</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </div>

        <div className="row">
        <div className="col-md-3">
        <div className="panel-group">
          <div className="panel panel-default">
            <div className="panel-heading">
              <h4 className="panel-title">
                <a data-toggle="collapse" href="#collapse1">Category</a>
              </h4>
            </div>
            <div id="collapse1" className="panel-collapse collapse-in">
              <ul className="list-group">
                <li className="list-group-item">
                  <a onClick={this.categoryChanged} id={0}>All Categories</a>
                </li>
                <li className="list-group-item">
                  <a onClick={this.categoryChanged} id={1}>Electronics</a>
                </li>
                <li className="list-group-item">
                  <a onClick={this.categoryChanged} id={2}>Clothing</a>
                </li>
                <li className="list-group-item">
                  <a onClick={this.categoryChanged} id={3}>Home</a>
                </li>
                <li className="list-group-item">
                  <a onClick={this.categoryChanged} id={4}>Sports</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        </div>

        </div>
      </div>
    );
  }
});

module.exports = Filters;
