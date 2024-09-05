import React from "react";

const DownloadApps = () => {
  return (
    <section className="sptb">
      <div className="container">
        <div className="section-title center-block text-center">
          <h2>Download Apps</h2>
          <p>
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="text-center text-wrap">
              <div className="btn-list">
                <a href="#" className="btn btn-primary btn-lg mb-sm-0">
                  <i className="fa fa-apple fa-1x mr-2"></i>
                  App Store
                </a>
                <a href="#" className="btn btn-secondary btn-lg mb-sm-0">
                  <i className="fa fa-android fa-1x mr-2"></i> Google Play
                </a>
                <a href="#" className="btn btn-info btn-lg mb-0">
                  <i className="fa fa-windows fa-1x mr-2"></i>
                  Windows
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApps;
