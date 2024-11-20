import React from "react";
import "./HomeTabs.css";
// import CalenderIcon from "svg/CalenderIcon";
// import DownloadIcon from "svg/DownloadIcon";
// import TestIcon from "svg/TestIcon";
// import ProfileIcon from "svg/ProfileIcon";

import { Calendar,Download,TestTube,UserRoundPen } from "lucide-react";

const HomeTabs = () => {
  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
            {/* <TestIcon /> */}
            <TestTube />
            <h5>Book a Test</h5>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
          <Calendar />
            <h5>My Bookings</h5>  
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
            <Download />
            <h5>Report Download</h5>
          </a>
        </div>
        <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
          <a href="#" target="_blank" rel="noreferrer" className="h_tabs">
          <UserRoundPen />
            <h5>My Profile</h5>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomeTabs;

