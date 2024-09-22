// src/components/Footer.tsx
import React from "react";

const Footer = () => (
  <section>
    <footer className="text-white footer-bg">
      <div className="footer-main">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-12">
              <h6>About</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto mt-0" />
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="javascript:;">Our Team</a>
                </li>
                <li>
                  <a href="javascript:;">Contact US</a>
                </li>
                <li>
                  <a href="javascript:;">Faq</a>
                </li>
                <li>
                  <a href="javascript:;">Careers</a>
                </li>
                <li>
                  <a href="javascript:;">Blog</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12">
              <h6>Resources</h6>
              <hr className="deep-purple accent-2 mb-4 mt-0 d-inline-block mx-auto mt-0" />
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="javascript:;">Search Doctor</a>
                </li>
                <li>
                  <a href="javascript:;">Search Hospital</a>
                </li>
                <li>
                  <a href="javascript:;">Search Clinic</a>
                </li>
                <li>
                  <a href="javascript:;">Search Fitnesscenter</a>
                </li>
                <li>
                  <a href="javascript:;">Search BloodBank</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-2 col-md-12">
              <h6>More</h6>
              <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <div className="clearfix"></div>
              <ul className="list-unstyled mb-0">
                <li>
                  <a href="javascript:;">Help</a>
                </li>
                <li>
                  <a href="javascript:;">Terms and Services</a>
                </li>
                <li>
                  <a href="javascript:;">Book Appointments</a>
                </li>
                <li>
                  <a href="javascript:;">Privacy Policy</a>
                </li>
                <li>
                  <a href="javascript:;">Subscribers</a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12">
              <h6>Contact</h6>
              <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <ul className="list-unstyled mb-0 contact-footer" style={{color:"#AFAEBC"}}>
                <li>
                  <i className="fa fa-map-marker"></i> 22 S. Rock Creek
                  StreetSan Carlos, Uniontown CA 94070, USA
                </li>
                <li>
                  <i className="fa fa-envelope "></i>info12323@example.com
                </li>
                <li>
                  <i className="fa fa-phone"></i>+ 01 234 567 88
                </li>
                <li>
                  <i className="fa fa-print"></i>+ 01 234 567 89
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-12">
              <h6>Subscribe</h6>
              <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <div className="clearfix"></div>
              <div className="input-group w-100">
                <input
                  className="form-control br-tl-3 br-bl-3"
                  placeholder="Email"
                  type="text"
                />
                <div className="input-group-append">
                  <button
                    className="btn btn-primary br-tr-3 br-br-3"
                    type="button"
                  >
                    Subscribe
                  </button>
                </div>
              </div>
              <h6 className="mt-5">Follow Us</h6>
              <hr className="deep-purple text-primary accent-2 mb-4 mt-0 d-inline-block mx-auto" />
              <ul className="list-unstyled list-inline follow-footer">
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm">
                    <i className="fa fa-google-plus"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a className="btn-floating btn-sm">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white p-0">
        <div className="container">
          <div className="row d-flex">

            <div className="col-lg-12 col-sm-12 mt-3 mb-3 text-center">
              Copyright © 2024{" "}
              <a className="fs-14 text-white-50" href="#">
                Greno Labs
              </a>
              . Designed by{" "}
                {" "}
                greno labs Pvt.Ltd              
            </div>
          </div>
        </div>
      </div>
    </footer>
  </section>
);

export default Footer;
