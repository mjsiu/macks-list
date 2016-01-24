<div>
<br/>
<br/>

<div className="container index">
  <div className="row">
    <div className="col-md-3 col-sm-offset-1">
      <Map listing={this.props.listing}></Map>
      <br/>
      <StarredButton id="star-button" listing={this.props.listing}/>
      <br/>
      <div>
          <div id="collapse1">
            <ul className="list-group">
              <li className="list-group-item">{this.props.listing.user}</li>
              <li className="list-group-item">{this.props.listing.title}</li>
              <li className="list-group-item">${this.props.listing.price}</li>
              <li className="list-group-item">{this.props.listing.address}</li>
            </ul>
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
