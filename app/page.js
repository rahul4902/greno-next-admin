"use client";
import React from "react";
import HomeTabs from "../components/Front/HomeTabs";

import TestimonialsSlider from "../components/Front/TestimonialsSlider";
import HomePackages from "../components/Front/HomePackages";
import HomeWhyChoose from "../components/Front/HomeWhyChoose";
import AddBanners from "../components/Front/Home/AddBanners";
import CategoryCarousel from "../components/Front/CategoryCarousel";

import About from "../components/Front/About";
import Testimonial from "../components/Front/Testimonial";

import LayoutWithHeaderFooter from "./../layouts/layout-with-header-footer";
import SearchForm from "../components/Front/SearchForm";

const page = () => {
  return (
    <>
      <LayoutWithHeaderFooter>
        
        <SearchForm />
        <HomeTabs />
        {/* <CategoryCarousel/> */}
        <AddBanners />
        <HomePackages />
        {/* <About /> */}
        <TestimonialsSlider />

        <section className="">
          <div className="container">
            <h2 className="">People are also looking for</h2>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Complete Blood Count (CBC)
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Blood Glucose Test
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Lipid Profile Test
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Liver Function Test (LFT)
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Kidney Function Test (KFT)
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Thyroid Function Test (TFT)
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Hemoglobin Test
            </a>
            <a
              href="#"
              className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2"
              style={{ color: "#12344d" }}
            >
              Vitamin D Test
            </a>
          </div>
        </section>

        
      </LayoutWithHeaderFooter>
    </>
  );
};

export default page;
