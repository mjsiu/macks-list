var React = require("react");

var ImageUploadButton = React.createClass({

  uploadImage: function (e) {
    e.preventDefault();
    cloudinary.openUploadWidget(CLOUDINARY, function(error, result){
      if (!error) {
        this.props.postImage(result[0]);
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div className="upload-form">
        <button onClick={this.uploadImage}>Add Image</button>
      </div>
    );
  }
});

module.exports = ImageUploadButton;
