import React from "react";

const Header = () => {
  return (
    <div className="header-main">
      <div className="top-bar">
        <div className="container">
          <div className="row">
            <div className="col-xl-8 col-lg-8 col-sm-4 col-7">
              <div className="top-bar-left d-flex">
                <div className="clearfix">
                  {/* <ul className="socials">
                    <li>
                      <a className="social-icon text-dark" href="#">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a className="social-icon text-dark" href="#">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a className="social-icon text-dark" href="#">
                        <i className="fa fa-linkedin"></i>
                      </a>
                    </li>
                    <li>
                      <a className="social-icon text-dark" href="#">
                        <i className="fa fa-google"></i>
                      </a>
                    </li>
                  </ul> */}
                </div>
                <div className="clearfix">
                  <ul className="contact">
                    <li className="d-lg-none">
                      <a className="callnumber text-dark" href="#">
                        <span>
                          <i className="fa fa-phone mr-1"></i>: +111 345 8765
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-4 col-sm-8 col-5">
              <div className="top-bar-right">
                <ul className="custom">
                  <li>
                    <a className="text-dark" href="register.html">
                      <i className="fa fa-user mr-1"></i>
                      <span>Register</span>
                    </a>
                  </li>
                  <li>
                    <a className="text-dark" href="login.html">
                      <i className="fa fa-sign-in mr-1"></i>
                      <span>Login</span>
                    </a>
                  </li>                
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <header className="header-search border-bottom p-2 bg-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-12">
              <div className="header-search-logo d-none d-lg-block">
                <a
                  className="header-logo header-brand-img"
                  href="index.html"
                ></a>
              </div>
            </div>
            <div className="col-lg-9 col-md-12 header-support">
              <ul className="hor-support float-right">
                <li className="support-header">
                  <a href="#">
                    <i className="fa fa-phone"></i>
                    <div className="support-text">
                      <h6>+68 000-627-9735</h6>
                      <p>24/7 available services </p>
                    </div>
                  </a>
                </li>
                <li className="support-header">
                  <a href="#">
                    <i className="fa fa-envelope"></i>
                    <div className="support-text">
                      <h6>support@yourdomain.com</h6>
                      <p>Ask For any questions</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>

      <div className="horizontal-header clearfix">
        <div className="container">          
          <a className="smllogo mobile-logo" href="index.html"></a>
          <a className="callusbtn" href="tel:245-6325-3256">
            <i aria-hidden="true" className="fa fa-phone"></i>
          </a>
        </div>
      </div>

    </div>
  );
};

export default Header;
