var React = require('react');

var Footer = React.createClass({

    render: function() {

      return (

        <footer className="footer-distributed">

          <div className="footer-left">

            <h3>MacksList</h3>

            <p className="footer-company-name">MacksList &copy; 2015</p>
          </div>

          <div className="footer-center">

            <div>
              <i className="fa fa-map-marker"></i>
              <p><span>817 Hawthorne Way</span> Millbrae, CA</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1-650-438-9141</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">msiu23@gmail.com</a></p>
            </div>

          </div>

          <div className="footer-right">

            <p className="footer-company-about">
              <span>About the future</span>
              MacksList is always looking to expand and continue growing. Expect new features in the future!
            </p>

            <div className="footer-icons">

              <a href="http://mjsiu.github.io/" target="_blank"><i className="fa fa-user"></i></a>
              <a href="https://www.linkedin.com/profile/preview?locale=en_US&trk=prof-0-sb-preview-primary-button" target="_blank"><i className="fa fa-linkedin"></i></a>
              <a href="https://www.github.com/mjsiu" target="_blank"><i className="fa fa-github"></i></a>
              <a href="https://www.facebook.com/mack.siu" target="_blank"><i className="fa fa-facebook"></i></a>

            </div>

          </div>

        </footer>
      )
    }
});


module.exports = Footer;
