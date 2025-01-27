import React from "react";
import { Image } from "react-bootstrap";
import Slider from "react-slick";

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} custom-prev-arrow`}
      onClick={onClick}
      aria-label="Previous slide"
    >
      ❮
    </button>
  );
};

// Custom Next Arrow
const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <button
      className={`${className} custom-next-arrow`}
      onClick={onClick}
      aria-label="Next slide"
    >
      ❯
    </button>
  );
};

const BrandCarousel = () => {
  // Slick slider settings without custom arrows
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false, // Disable arrows here
  };

  return (
    <section className="py-5 overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-header d-flex justify-content-between align-items-center mb-5">
              <h2 className="section-title">Newly Arrived Brands</h2>
              <div className="d-flex align-items-center">
                <a href="#" className="btn-link text-decoration-none">
                  View All Categories →
                </a>
                {/* Place arrows inside the same div */}
                <PrevArrow className="slick-prev ms-3" onClick={() => {}} />
                <NextArrow className="slick-next ms-3" onClick={() => {}} />
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-md-12">
            <Slider {...settings}>
              {/* Carousel Items */}
              {[1, 2, 3, 4, 5,6,7,8].map((_v, _x) => {
                return (
                  <div
                    key={_x}
                    className="card mb-3 p-3 rounded-4 shadow border-0"
                  >
                    <div className="row g-0">
                      <div className="col-md-4">
                        <Image
                          src="https://themewagon.github.io/FoodMart/images/product-thumb-11.jpg"
                          className="img-fluid rounded"
                          alt="Brand 1"
                        />
                      </div>
                      <div className="col-md-8">
                        <div className="card-body py-0">
                          <p className="text-muted mb-0">Amber Jar</p>
                          <h5 className="card-title">
                            Honey best nectar you wish to get
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
              {/* Add more carousel items as needed */}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandCarousel;
