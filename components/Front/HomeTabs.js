import React from 'react';
import './HomeTabs.css';

const HomeTabs = () => {
  return (
    <div>
      <section className="top-widgets my-4">
        <div className="widget-mr">
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-md-11">
                <div className="row row-cols-3 row-cols-lg-6 g-2 g-lg-4">
                  <div className="col">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tp_widget" 
                      id="btn-cta-bb-book-appointment"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="Book Appointment Icon" 
                        width="64" 
                      />
                      <h5>Book Appointment</h5>
                    </a>
                  </div>
                  <div className="col d-none d-sm-block">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tp_widget" 
                      id="btn-cta-bb-book-prohealth"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="Book Health Check-Up Icon" 
                      />
                      <h5>Book Health Check-Up</h5>
                    </a>
                  </div>
                  <div className="col d-sm-none d-block">
                    <a 
                      href="#" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tp_widget" 
                      id="btn-cta-bb-book-prohealth"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="" 
                      />
                      <h5>Book Health Check-Up</h5>
                    </a>
                  </div>
                  <div className="col">
                    <a 
                      href="#" 
                      id="btn-cta-bb-consult-online" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tp_widget"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="Consult Online Icon" 
                      />
                      <h5>Consult Online</h5>
                    </a>
                  </div>
                  <div className="col">
                    <a 
                      href="#" 
                      id="btn-cta-bb-buy-medicine" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="tp_widget"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="Buy Medicine Icon" 
                      />
                      <h5>Buy Medicine</h5>
                    </a>
                  </div>
                  <div className="col">
                    <a 
                      href="#" 
                      id="btn-cta-bb-find-hospital" 
                      className="tp_widget"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="Find Hospital Icon" 
                      />
                      <h5>Find Hospital</h5>
                    </a>
                  </div>
                  <div className="col">
                    <a 
                      href="" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      id="btn-cta-bb-view-health-record" 
                      className="tp_widget"
                    >
                      <img 
                        src="/images/gallery/book_appointment.svg" 
                        alt="" 
                      />
                      <h5>View Health Record</h5>
                    </a>
                  </div>
                </div>
              </div>
              {/* Uncomment if you want to use the navigation arrows */}
              {/* <div className="widget-arrow">
                <a className="prev" href="#!">
                  <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/wt-left.svg" alt="Previous" />
                </a>
                <a className="next" href="#!">
                  <img src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/wt-right.svg" alt="Next" />
                </a>
              </div> */}
            </div>
          </div>
        </div>
        <div className="clear-fix"></div>
      </section>
    </div>
  );
};

export default HomeTabs;
