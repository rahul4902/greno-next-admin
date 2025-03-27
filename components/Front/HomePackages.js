import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styles/category.css";
import {
  AlarmClockCheck,
  BadgePercent,
  CircleChevronLeft,
  CircleChevronRight,
  User,
  UtensilsCrossed,
} from "lucide-react";

const HomePackages = () => {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false, // Disable default arrows
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
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
    <div className="container my-5">
      <div className="row position-relative">
        <div className="col-md-12 mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h3 className="font-bold">Popular Tests / Packages</h3>
            <div className="arrow-container">
              <button
                className="slick-arrow prev-arrow"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <CircleChevronLeft size={24} />
              </button>
              <button
                className="slick-arrow next-arrow"
                onClick={() => sliderRef.current.slickNext()}
              >
                <CircleChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>
        <div className="col-md-12">
          <Slider ref={sliderRef} {...settings}>
            {points.map((point, index) => (
              <div key={index} className="slider-card">
                <div className="card shadow-sm rounded-3 mx-1">
                  <div className="card-body p-0 pt-3">
                    <div className="d-flex align-items-center justify-content-between card-content ps-3 pe-5">
                      <h5 className="fw-semibold">
                        Greno Winter Wellness Package Female
                      </h5>
                      <div className="test_included">
                        {" "}
                        <h3 className="d-flex flex-column align-items-center p-2">
                          <span className="bigcount">103</span>
                          <span> Tests </span>
                        </h3>{" "}
                      </div>
                    </div>
                    <div className="minhgt80 px-3">
                      {" "}
                      <b className="text-primary-custom">
                        Tests Included:
                      </b>{" "}
                      <span>
                        {" "}
                        RA Test Rheumatoid Arthritis Factor, Quantitative ,
                        Amylase Enzymatic, Serum , CA-125, Serum , CEA Carcino
                        Embryonic Antigen Serum...
                      </span>{" "}
                    </div>
                    <div className=" px-3 text-end mb-2">
                      <a
                        href="#"
                        className="text-decoration-none know-more d-flex align-items-center justify-content-end"
                        style={{
                          color: "#12344d",
                          fontSize: "14px",
                          fontWeight: "600",
                        }}
                      >
                        Know More
                        <CircleChevronRight
                          strokeWidth={3}
                          height="14"
                          width="14"
                          className="ms-1"
                        />
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
                      </div>
                      <div className="city_book_now_btn">
                        <a href="#" className="btn btn-primary">
                          Book Now
                        </a>
                      </div>
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
