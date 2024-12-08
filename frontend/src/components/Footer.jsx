import React from "react";

const Footer = () => {
  return (
    <div>
      <footer id="footer" className="footer dark-background">
        <div className="container">
          <div className="row gy-3">
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-geo-alt icon" />
              <div className="address">
                <h4>Address</h4>
                <p>A108 Adam Street</p>
                <p>New York, NY 535022</p>
                <p />
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-telephone icon" />
              <div>
                <h4>Contact</h4>
                <p>
                  <strong>Phone:</strong> <span>+1 5589 55488 55</span>
                  <br />
                  <strong>Email:</strong> <span>info@example.com</span>
                  <br />
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 d-flex">
              <i className="bi bi-clock icon" />
              <div>
                <h4>Opening Hours</h4>
                <p>
                  <strong>Mon-Sat:</strong> <span>11AM - 23PM</span>
                  <br />
                  <strong>Sunday</strong>: <span>Closed</span>
                </p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h4>Follow Us</h4>
              <div className="social-links d-flex">
                <a href="#" className="twitter">
                  <i className="bi bi-twitter-x" />
                </a>
                <a href="#" className="facebook">
                  <i className="bi bi-facebook" />
                </a>
                <a href="#" className="instagram">
                  <i className="bi bi-instagram" />
                </a>
                <a href="#" className="linkedin">
                  <i className="bi bi-linkedin" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="container copyright text-center mt-4">
          <p>
            © <span>Copyright</span>{" "}
            <strong className="px-1 sitename">Yummy</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
