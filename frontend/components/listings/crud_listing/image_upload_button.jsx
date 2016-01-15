var React = require("react");

var ImageUploadButton = React.createClass({
  uploadImage: function (event) {
    event.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY, function(error, result){
      if (!error) {
        this.props.storeListingImages(result);
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div className="upload-form">
        <button className="btn btn-default"onClick={this.uploadImage}>Add Image</button>
      </div>
    );
  }
});

module.exports = ImageUploadButton;
