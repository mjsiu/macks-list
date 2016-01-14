var React = require('react');

var Footer = React.createClass({

    render: function() {

      return (

        <footer className="footer-distributed">

          <div className="footer-left">

            <h3>MacksList</h3>

            <p className="footer-links">
              <a href="#">Home </a>
              ·
              <a href="#">About </a>
              ·
              <a href="#">Faq </a>
              ·
              <a href="#">Contact</a>
            </p>

            <p className="footer-company-name">MacksList &copy; 2015</p>
          </div>

          <div className="footer-center">

            <div>
              <i className="fa fa-map-marker"></i>
              <p><span>123 Rainbow Road</span> San Francisco, CA</p>
            </div>

            <div>
              <i className="fa fa-phone"></i>
              <p>+1-650-438-9141</p>
            </div>

            <div>
              <i className="fa fa-envelope"></i>
              <p><a href="mailto:support@company.com">mackslist@company.com</a></p>
            </div>

          </div>

          <div className="footer-right">

            <p className="footer-company-about">
              <span>About the future</span>
              MacksList is always looking to expand and continue growing. Expect new features in the future!
            </p>

            <div className="footer-icons">

              <a href="#"><i className="fa fa-facebook"></i></a>
              <a href="#"><i className="fa fa-twitter"></i></a>
              <a href="#"><i className="fa fa-linkedin"></i></a>
              <a href="#"><i className="fa fa-github"></i></a>

            </div>

          </div>

        </footer>
      )
    }
});


module.exports = Footer;
