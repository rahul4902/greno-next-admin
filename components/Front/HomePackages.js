import React from 'react';
import "./HomePackages.css"
import Slider from 'react-slick';
import './HomeWhyChoose.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HomePackages = () => {
    const settings = {
        dots: true, // Enable dots navigation
        infinite: true, // Enable infinite looping
        speed: 500, // Transition speed
        slidesToShow: 3, // Show 3 items at a time on larger screens
        slidesToScroll: 1, // Scroll 1 item at a time
        autoplay: true, // Enable autoplay
        autoplaySpeed: 3000, // Time delay for autoplay
        arrows: true, // Enable arrows
        responsive: [
          {
            breakpoint: 1024, // Medium devices
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: true,
              dots: true,
            },
          },
          {
            breakpoint: 768, // Small devices
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              dots: true,
              arrows: false, // Disable arrows on mobile
            },
          },
        ],
      };
    
      const points = [
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/01-Counters-Hospitals-1.svg', value: '', label: '' },
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/02-Counters-Clinics-2.svg', value: '', label: '' },
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/03-Diagnostic-centres-2.svg', value: '', label: '' },
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/04-Pharmacies-2.svg', value: '', label: '' },
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/05-Pin-codes-Served-2.svg', value: '', label: '' },
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/06-Doctors-2.svg', value: '', label: '' },
        { icon: 'https://cdn.apollohospitals.com/apollohospitals-live/wca/hospital-bed.svg', value: '', label: '' },
      ];
    
      return (
        <div>
          <section className="packages px-3 px-md-0">
            <div className="container bg-white shadow">
              <div className="row g-lg-5 g-3 px-2 pt-4 pb-4">
                <div className="col-md-7 mt-0">
                  <h2>Popular Tests / Packages</h2>
                </div>
                <div className="col-md-12 mt-0 mt-md-2">
                  <Slider {...settings}>
                    {points.map((point, index) => (
                      <div key={index} className="slider-card">
                        <div className="card shadow-sm rounded-3 ms-md-0">
                          <div className="card-body">
                            <h4 className='pb-2'>ALLERGY SCREEN</h4>
                            <ul className='ps-0'>
                                <li className='d-flex align-items-center gap-2'>
                                    <span><img src="/images/gallery/info-icon.png" alt="" /></span>No special preparation required.
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <span><img src="/images/gallery/info-icon.png" alt="" /></span>No special preparation required.
                                </li>
                                <li className='d-flex align-items-center gap-2'>
                                    <span><img src="/images/gallery/info-icon.png" alt="" /></span>No special preparation required.
                                </li>
                            </ul>
                            <div className="text-end">
                            <a href="#" className='text-end text-decoration-none know-more'>Know More</a>
                            </div>  
                            <div  class="add-to-cart pos_rel d-flex align-items-center mt-2">
                            <div class="popularprice pricee-div"><span>₹</span>1,800 </div>
                            <div class="cartt-div"><a  href="#" className='text-decoration-none' target="_blank">Book Now</a></div>
                            </div>

                            {/* <img
                              src={point.icon}
                              alt={point.label}
                              className="point_icon mb-3"
                              style={{ width: '50px', height: '50px' }}
                            /> */}
                            {/* <h4 className="card-title">{point.value}</h4>
                            <p className="card-text">{point.label}</p> */}
                          </div>
                        </div>
                      </div>
                    ))}
                  </Slider>
                </div>
                <div className='text-end mt-2 view-all'><a href="#" className='text-decoration-none'>View All</a></div>
              </div>
            </div>
          </section>
        </div>
      );
    };
export default HomePackages;
