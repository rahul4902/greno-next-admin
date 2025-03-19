import React from "react";

const AddBanners = () => {
  return (
    <div className="container mt-5">
          <div className="row">
            <div className="col-md-6">
              <div className="banner-ad bg-danger-custom mb-3 banner-ad-1">
                <div className="banner-content p-5">
                  <div className="categories text-warning-custom fs-3 fw-bold">
                    Upto 25% Off
                  </div>
                  <h3 className="banner-title">Greno welcome</h3>
                  <p>Free Vitamin B12</p>
                  <a href="#" className="btn btn-dark text-uppercase">
                    Show Now
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="banner-ad bg-info-custom banner-ad-2">
                <div className="banner-content p-5">
                  <div className="categories text-warning-custom fs-3 fw-bold">
                    Upto 25% Off
                  </div>
                  <h3 className="banner-title"> Ayushman package</h3>
                  <p>Very tasty &amp; creamy vanilla flavour creamy muffins.</p>
                  <a href="#" className="btn btn-dark text-uppercase">
                    Show Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
  );
};

export default AddBanners;
