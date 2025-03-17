import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/category.css";
import Image from "next/image";
import { AlarmClockCheck, BadgePercent, CircleChevronLeft, CircleChevronRight, User, UtensilsCrossed } from "lucide-react";

const HomePackages = () => {
  const settings = {
    dots: false, // Enable dots navigation
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
    { icon: "", value: "", label: "" },
    { icon: "", value: "", label: "" },
    { icon: "", value: "", label: "" },
    { icon: "", value: "", label: "" },
    { icon: "", value: "", label: "" },
    { icon: "", value: "", label: "" },
    { icon: "", value: "", label: "" },
  ];

  return (
    <div className="container mt-4">
      <div className="row position-relative">
        <div className="col-md-12">
          <h2>Popular Tests / Packages</h2>
        </div>
        <div className="col-md-12">
          <Slider {...settings}>
            {points.map((point, index) => (
              <div key={index} className="slider-card  mt-4">
                <div className="card shadow-sm rounded-3 ms-3">
                  <div className="card-body p-0 pt-3">
                    <div className="d-flex align-items-center justify-content-between card-content px-3">
                      <h4 className="pb-2 fs-5" style={{ fontWeight:'600' }}>
                        Healthians Winter Wellness Package - Female
                      </h4>
                      <div className="test_included">
                        {" "}
                        <h3 className="d-flex flex-column align-items-center p-2">
                          <span className="bigcount">103</span>
                          <span> Tests </span>
                        </h3>{" "}
                      </div>
                    </div>
                    <div className="tests_sec minhgt80 px-3">
                      {" "}
                      <b style={{ color: "#12344d",fontSize:'14px' }}>Tests Included:</b>{" "}
                      <span>
                        {" "}
                        RA Test Rheumatoid Arthritis Factor, Quantitative ,
                        Amylase Enzymatic, Serum , CA-125, Serum , CEA Carcino
                        Embryonic Antigen Serum...
                      </span>{" "}
                    </div>
                    <div className=" px-3 text-end mb-2">
                      <a href="#" className="text-decoration-none know-more d-flex align-items-center justify-content-end" style={{ color:'#12344d', fontSize:'14px', fontWeight:'600' }}>
                      <CircleChevronLeft strokeWidth={3} height="14" width="14" className="me-1"/>Know More
                      </a>
                    </div>
                    <div className="include_centre d-flex align-items-center justify-content-between py-1 px-3">
                      {" "}
                      <div className="exact__pay d-flex flex-column">
                        {" "}
                        <div className="">
                        <span className="fnl_price">₹2000</span>{" "}
                        <span className="mrp_price">₹4762</span>{" "}
                        </div>
                        <div className="d-flex gap-2 align-items-center">                      
                        <BadgePercent color="green" size={14} />
                        <span className="off_term"> UPTO 58% OFF </span>{" "}
                        </div>
                      </div>{" "}
                      <div className="city_book_now_btn">
                        {" "}
                        <a
                          href="#"
                          className="btn btn-sm btn-primary"
                        >
                          {" "}
                          Book Now <span> </span>{" "}
                        </a>{" "}
                      </div>{" "}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default HomePackages;
