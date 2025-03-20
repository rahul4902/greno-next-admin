import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import "./styles/category.css";
import { CircleChevronLeft, CircleChevronRight } from "lucide-react";
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
                  <div className="col-6 col-md-3 col-lg-2 col-xl-2 mt-3">
                    <Link
                      href={`/search?category=${(_v?.name).replace(/ /g, "+")}`}
                      className="h_tabs position-relative"
                    >
                      <Image
                        src={_v?.icon_url}
                        alt={_v?.name}
                        width={100} // Adjust as needed
                        height={0} // Not required when using layout="intrinsic"
                        layout="intrinsic"
                        loading="lazy"
                      />
                      <h5>{_v?.name}</h5>
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
