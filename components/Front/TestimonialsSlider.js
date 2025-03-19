import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  CircleChevronLeft,
  CircleChevronRight,
  Quote,
  Building2,
  MapPin,
} from "lucide-react";
import { useRef } from "react";
import Image from "next/image";

export default function TestimonialSlider() {
  const sliderRef = useRef(null);
  const testimonials = [
    {
      quote:
        "Greno Labs provides top-notch diagnostic services with a highly skilled and compassionate team.",
      name: "Dr. Rajesh Verma",
      specialization: "Cardiologist",
      location: "Mumbai",
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      quote:
        "Their commitment to accuracy and patient care makes Greno Labs a trusted choice for diagnostics.",
      name: "Dr. Aisha Khan",
      specialization: "Pathologist",
      location: "Hyderabad",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      quote:
        "Exceptional service and precise diagnostics make Greno Labs a leader in the field.",
      name: "Dr. Suresh Nair",
      specialization: "Endocrinologist",
      location: "Chennai",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
    {
      quote:
        "With cutting-edge technology and expert staff, Greno Labs ensures reliable results.",
      name: "Dr. Meena Iyer",
      specialization: "Pediatrician",
      location: "Pune",
      avatar: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      quote:
        "Greno Labs stands out for its dedication to excellence and timely diagnostic reports.",
      name: "Dr. Vikram Desai",
      specialization: "Neurologist",
      location: "New Delhi",
      avatar: "https://randomuser.me/api/portraits/men/5.jpg",
    },
  ];

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
    <section className="py-5 bg-light position-relative">
      <div className="container position-relative">
        {/* Header Section */}
        <div className="row mb-4">
          <div className="d-flex justify-content-between align-items-center">
            <h2>What Doctors Are Saying</h2>
            <div className="d-none d-md-flex gap-2">
              <button
                className="slick-arrow prev-arrow"
                onClick={() => sliderRef.current.slickPrev()}
              >
                <CircleChevronLeft size={24} />
              </button>
              <button
                className="slick-arrow prev-arrow"
                onClick={() => sliderRef.current.slickNext()}
              >
                <CircleChevronRight size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* Slider */}
        <Slider ref={sliderRef} {...settings}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="px-3">
              <div className="card h-100 border-0 ">
                <div className="card-body position-relative">
                  {/* Avatar */}
                  <div className="d-flex justify-content-center">
                    <div className="border border-3 border-white rounded-circle shadow">
                      <Image
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-circle object-fit-cover"
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="text-center mt-2">
                    <Quote size={32} className="text-primary-custom opacity-25 mb-3" />
                    <p className="text-dark mb-4 px-3 lh-base">
                      {testimonial.quote}
                    </p>

                    {/* Doctor Info */}
                    <div className="bg-secondary bg-opacity-10 rounded p-3">
                      <h5 className="mb-2 fw-bold text-dark">
                        {testimonial.name}
                      </h5>
                      <div className="d-flex flex-wrap justify-content-center gap-2">
                        <span className="badge bg-primary-custom text-white d-flex align-items-center">
                          <Building2 size={16} className="me-2" />
                          {testimonial.specialization}
                        </span>
                        <span className="badge bg-secondary d-flex align-items-center">
                          <MapPin size={16} className="me-2" />
                          {testimonial.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
