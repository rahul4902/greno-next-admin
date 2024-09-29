import React from 'react';

const Footer = () => (
  <footer>
    <div className="container">
      <div className="row gx-5">
        <div className="col-md-3">
          <img 
            src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v2/images/logo.svg" 
            alt="" 
          />
          <p></p>
          <p className="small link-danger pt-2 pb-0 mb-0 ftcol">Get A Lot Of Information About Us</p>
          <h4 className="dp-col4 fs-5 mb-3">Subscribe Our Newsletter</h4>
          <div className="mb-3">
            <div className="response-n"></div>
            <p></p>
          </div>
          <form id="form-subscribe-news-letter">
            <div className="mb-3">
              <input 
                type="email" 
                className="form-control" 
                id="userEmail" 
                name="email" 
                placeholder="Enter your email id" 
              />
              <textarea 
                id="pageURL" 
                style={{ display: 'none' }} 
                name="page"
              >
                https://www.apollohospitals.com
              </textarea>
            </div>
            <p>
              <button 
                type="submit" 
                className="btn btn-primary w-100 ft-btn" 
                id="btn-subscribe-newsletter"
              >
                Submit
              </button>
            </p>
          </form>
          <div className="row mt-3 mt-lg-5 helplineno row-cols-3">
            {/** Repeating phone info structure */}
            {[ 
              { title: "Emergency", number: "1066" },
              { title: "Apollo Lifeline International", number: "+91 4043441066" },
              { title: "Health Help Line", number: "1860-500-1066" }
            ].map(({ title, number }) => (
              <div className="col-sm-12" key={title}>
                <div className="d-flex">
                  <p className="mb-1 ftcol pe-3"><i className="fa-solid fa-phone"></i></p>
                  <div>
                    <h6>{title}</h6>
                    <p><a href={`tel:${number}`}>{number}</a></p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-md-9">
          <div className="row row-cols-lg-5 row-cols-2">
            {/** Section for Patient Care and other links */}
            {/** You can refactor this section similarly to keep it DRY */}
            <div className="col">
              <h5>Patient Care</h5>
              <ul className="list-unstyled ft-links">
                <li><a href="https://www.askapollo.com/" target="_blank" rel="noopener noreferrer">Find A Doctor</a></li>
                <li><a href="/patient-care/service-excellence/">Medical Services</a></li>
                <li><a href="/departments/heart/testimonial-videos/">Patient Testimonials</a></li>
                <li><a href="/patient-care/value-added-services/">Value Added Services</a></li>
                <li><a href="https://pay.apollohospitals.com/" target="_blank" rel="noopener noreferrer">Pay Online</a></li>
                <li><a href="/apollo-surgery/">Apollo Surgery</a></li>
              </ul>
            </div>
            {/* Additional sections can be added similarly */}
          </div>
        </div>
      </div>
      <div className="row justify-content-center py-0">
        <div className="col-md-10">
          <div className="ftr_addtln_inof">
            <div className="row">
              <div className="col-md-4">
                <p>Our stents pricing <a href="/departments/heart/stent-prices-disclosure/" title="Know More About Our Stents Pricing">click here</a></p>
                <p><a href="/corporate/careers/recruitment-disclaimer/" title="Recruitment Disclaimer">Recruitment disclaimer</a></p>
              </div>
              <div className="col-md-5">
                <p>Total knee replacement implants pricing <a href="/departments/orthopedic/our-implant-pricing/" title="Know More About Knee Replacement Pricing">click here</a></p>
                <p><a href="/covid-19-rt-pcr-test/" title="Covid-19 RT-PCR Test">Covid-19 RT-PCR Test</a></p>
              </div>
              <div className="col-md-3">
                <p><a href="/departments/transplantation/transplant-disclaimer/" title="Transplant Disclaimer">Transplant Disclaimer</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-center py-0">
        <div className="col-md-10">
          <div className="ftr_addtln_inof appstore">
            <div className="row">
              <div className="col-sm-6">
                <h2>Apollo’s Healthcare @ your Fingertips</h2>
                <h3>Download the app</h3>
              </div>
              <div className="col-sm-6">
                <div className="d-flex gap-3">
                  <div>
                    <a href="https://apps.apple.com/in/app/apollo-247-health-medicine/id1496740273" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/appstore-icon.png" 
                        alt="Apple Store" 
                        className="img-fluid" 
                      />
                    </a>
                  </div>
                  <div>
                    <a href="https://play.google.com/store/apps/details?id=com.apollo.patientapp" target="_blank" rel="noopener noreferrer">
                      <img 
                        src="https://www.apollohospitals.com/wp-content/themes/apollohospitals/assets-v3/images/playstore-icon.png" 
                        alt="Play Store" 
                        className="img-fluid" 
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
