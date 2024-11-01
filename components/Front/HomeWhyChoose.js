import React, { useEffect, useState } from 'react';
import './HomeWhyChoose.css';

const HomeWhyChoose = () => {
  const [counters, setCounters] = useState({
    hospitals: 0,
    clinics: 0,
    diagnostics: 0,
    pharmacies: 0,
    pincodes: 0,
    doctors: 0,
    beds: 0,
  });

  useEffect(() => {
    const targetCounters = {
      hospitals: 73,
      clinics: 700,
      diagnostics: 2300,
      pharmacies: 6000,
      pincodes: 10000,
      doctors: 11000,
      beds: 10000,
    };

    const updateCounters = () => {
      Object.keys(targetCounters).forEach(key => {
        let startValue = 0;
        const endValue = targetCounters[key];
        const duration = 1000; // 1 second

        let incrementValue = endValue / (duration / 10);

        const interval = setInterval(() => {
          startValue += incrementValue;
          if (startValue >= endValue) {
            startValue = endValue;
            clearInterval(interval);
          }
          setCounters(prevState => ({
            ...prevState,
            [key]: Math.floor(startValue),
          }));
        }, 10);
      });
    };

    updateCounters();
  }, []);

  return (
    <div>
      <section className="why_ah_sec mt-5">
        <div className="container">
          <div className="row g-lg-5 g-3">
            <div className="col-md-7">
              <h2>Why Choose Greno Healthcare?</h2>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde vel rem culpa dolorum beatae ipsum officiis possimus consectetur amet vero eius repudiandae dicta voluptates, blanditiis, ab eos totam, eveniet dignissimos.
              </p>
              <div className="row g-xl-3 g-2 pt-lg-1 pt-2 pb-lg-0">
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img 
                          src="/images/gallery/01-Counters-Hospitals-1.svg" 
                          alt="" 
                          className="point_icon" 
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4><span className="counter-holder">{counters.hospitals}</span>+</h4>
                        <div>Largest private healthcare network of hospitals</div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img 
                          src="/images/gallery/01-Counters-Hospitals-1.svg" 
                          alt="" 
                          className="point_icon" 
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4><span className="counter-holder">{counters.clinics}</span>+</h4>
                        <div>Largest private network of clinics across India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img 
                          src="/images/gallery/01-Counters-Hospitals-1.svg" 
                          alt="" 
                          className="point_icon" 
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4><span className="counter-holder">{counters.diagnostics}</span>+</h4>
                        <div>Diagnostic centres across India</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="d-flex gap-3">
                    <div className="d-flex gap-4 py-2 pt-3 why_point">
                      <div className="flex-shrink-0">
                        <img 
                          src="/images/gallery/01-Counters-Hospitals-1.svg" 
                          alt="" 
                          className="point_icon" 
                        />
                      </div>
                      <div className="flex-grow-1 why_ah_points">
                        <h4><span className="counter-holder">{counters.pharmacies}</span>+</h4>
                        <div>Pharmacies</div>
                      </div>
                    </div>
                  </div>
                </div>


              </div>
            </div>
            <div className="col-md-5">
              <div className="card border-0 who-card">
                <img 
                  src="/images/gallery/eye-care.png" 
                  className="card-img" 
                  alt="Apollo Healthcare" 
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeWhyChoose;
