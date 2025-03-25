import React, { useEffect, useRef, useState } from "react";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
import Slider from "react-slick";

import apiService from "@/services/apiService";
import Link from "next/link";
import Image from "next/image";

const CategoryCarousel = () => {
  const sliderRef = useRef(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const query = "?allActive=true";
      const response = await apiService.fetchCategories("", query);
      setCategories(response);
    };
    fetchCategory();
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 3,
    autoplay: false,
    autoplaySpeed: 3000,
    arrows: false,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToScroll: 3,
          variableWidth: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToScroll: 2,
          dots: false,
          arrows: false,
          variableWidth: true,
        },
      },
    ],
  };

  return (
    <div className="container my-5">
      <div className="row position-relative">
        <div className="col-md-12 mb-3">
          <div className="d-flex justify-content-between align-items-center">
            <h2>Tests By Category</h2>
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
            {categories?.map((_v, _x) => {
              return (
                <>
                  <div key={_x} className="slider-item">
                    <Link
                      href={`/search?category=${(_v?.name).replace(/ /g, "+")}`}
                      className="h_tabs h_tabs_2 position-relative"
                    >
                      <div className="d-flex align-items-center gap-3">
                        <Image
                          src={_v?.icon_url}
                          alt={_v?.name}
                          width={60} // ✅ Adjusted for responsiveness
                          height={60} // ✅ Keeps aspect ratio
                          className="slider-image"
                          loading="lazy"
                        />
                        <h5 className="slider-text">{_v?.name}</h5>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};
export default CategoryCarousel;
