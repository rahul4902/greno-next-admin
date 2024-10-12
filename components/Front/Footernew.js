import React from 'react';

const Footernew = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row gx-5">
            <div className="col-md-3">
              <img 
               src="/images/gallery/logo.png"
                alt="logo" 
              />
              <p className="small link-danger pt-2 pb-0 mb-0 ftcol">
                Get A Lot Of Information About Us
              </p>
              <h4 className="dp-col4 fs-5 mb-3">Subscribe Our Newsletter</h4>
              <div className="mb-3">
                <div className="response-n"></div>
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
                   
                  </textarea>
                </div>
                <p>
                  <button type="submit" className="w-100 ft-btn rounded" id="btn-subscribe-newsletter">
                    Submit
                  </button>
                </p>
              </form>
         
            </div>
            <div className="col-md-9">
              <div className="row row-cols-lg-5 row-cols-2">
                <div className="col">
                  <h5>Patient Care</h5>
                  <ul className="list-unstyled ft-links">
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Find A Doctor</a></li>
                    <li><a href="#">Medical Services</a></li>
                    <li><a href="#">Patient Testimonials</a></li>
                    <li><a href="#">Value Added Services</a></li>
                    <li><a href="#" target="_blank" rel="noopener noreferrer">Pay Online</a></li>
                    <li><a href="#">Apollo Surgery</a></li>
                  </ul>
                 
                </div>
                <div className="col">
                  <h5>Centres Of Excellence</h5>
                  <ul className="list-unstyled">
                    <li><a href="">Orthopaedics</a></li>
                    <li><a href="">Nephrology & Urology</a></li>
                    <li><a href="">Bariatric Surgery</a></li>
                    <li><a href="">Cardiology</a></li>
                    <li><a href="">Pulmonology</a></li>
                    <li><a href="">Gastroenterology</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Medical Procedures</h5>
                  <ul className="list-unstyled">
                    <li><a href="" target="_blank" rel="noopener noreferrer">Proton Therapy For Cancer Treatment</a></li>
                    <li><a href="">Cosmetic And Plastic Surgery</a></li>
                    <li><a href="">Bone Marrow Transplant</a></li>
                    <li><a href="">Oral & Maxillofacial Surgery</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Corporate</h5>
                  <ul className="list-unstyled">
                    <li><a href="">Company Overview</a></li>
                    <li><a href="">Our Doctors Achieve</a></li>
                    <li><a href="">The Apollo Ethos</a></li>
                    <li><a href="">The Apollo Story</a></li>
                    <li><a href="">Management</a></li>
                    <li><a href="">Investor Relations</a></li>
                  </ul>
                </div>
                <div className="col">
                  <h5>Academics & Research</h5>
                  <ul className="list-unstyled">
                    <li><a href="">Courses</a></li>
                    <li><a href="">Academics</a></li>
                    <li><a href="">Clinical Research</a></li>
                    <li><a href="">Honors List</a></li>
                    <li><a href="">Apollo Torch: Alumni Network</a></li>
                  </ul>                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* bottom-bar */}
      <section class="cprght_ftr">
        <div class="container">
            <div class="row">
                <div class="col-md-5">
                    <div class="pt-md-2">© Copyright 2024. All Rights Reserved.</div>
                </div>
                <div class="col-md-3">
                    <ul class="nav nav-social">
                        <li class="nav-item"><a href="#" rel="nofollow" target="_blank" class="nav-link link-dark px-2" title="Follow Us On Facebook">  <svg xmlns="http://www.w3.org/2000/svg"  width={14} height={14} fill='white' viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </a></li>
                        <li class="nav-item"><a href="#" rel="nofollow" target="_blank" class="nav-link link-dark px-2" title="Follow Us On Instagram"> <svg xmlns="http://www.w3.org/2000/svg"  width={14} height={14} fill='white' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
                        <li class="nav-item"><a href="#" rel="nofollow" target="_blank" class="nav-link link-dark px-2" title="Follow Us On Twitter">  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill='white' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>
                        <li class="nav-item"><a href="#" rel="nofollow" target="_blank" class="nav-link link-dark px-2" title="Follow Us On Linkedin">  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill='white' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a></li>
                    </ul>
                </div>
                <div class="col-md-4">
                    <ul class="nav ms-auto">

                 
                        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Privacy policy</a> </li>
                        <li class="nav-item"><a href="#" class="nav-link link-dark px-2">Disclaimer</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-dark px-2 border-0">Contact</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </section>
    </div>
  );
}

export default Footernew;
