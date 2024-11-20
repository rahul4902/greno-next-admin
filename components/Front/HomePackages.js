import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/category.css"

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
                <div className="card shadow-sm rounded-3">
                  <div className="card-body">
                    <h4 className="pb-2">ALLERGY SCREEN</h4>
                    <ul className="ps-0">
                      <li className="d-flex align-items-center gap-2">
                        No special preparation required.
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        No special preparation required.
                      </li>
                      <li className="d-flex align-items-center gap-2">
                        No special preparation required.
                      </li>
                    </ul>
                    <div className="text-end">
                      <a
                        href="#"
                        className="text-end text-decoration-none know-more"
                      >
                        Know More
                      </a>
                    </div>
                    <div className="add-to-cart pos_rel d-flex align-items-center mt-2">
                      <div className="popularprice pricee-div">
                        <span>₹</span>1,800{" "}
                      </div>
                      <div className="cartt-div">
                        <a
                          href="#"
                          className="text-decoration-none"
                          target="_blank"
                        >
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
