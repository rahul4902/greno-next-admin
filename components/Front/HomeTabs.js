import React from "react";
import "./HomeTabs.css";
import CalenderIcon from "svg/CalenderIcon";
import DownloadIcon from "svg/DownloadIcon";
import TestIcon from "svg/TestIcon";
import ProfileIcon from "svg/ProfileIcon";

const HomeTabs = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
            <TestIcon />
            <h5>Book a Test</h5>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
            <CalenderIcon />
            <h5>My Bookings</h5>  
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
            <DownloadIcon />
            <h5>Report Download</h5>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
            <ProfileIcon />
            <h5>My Profile</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;

