"use client";
import React from "react";

import HomeTabs from "@/components/Front/HomeTabs";
import AlsoLookingFor from "@/components/Front/AlsoLookingFor";
import Footer from "@/components/Front/Footer";

import TestimonialsSlider from "../components/Front/TestimonialsSlider";
import HomePackages from "@/components/Front/HomePackages";
import AddBanners from "@/components/Front/Home/AddBanners";


import LayoutWithHeaderFooter from "./../layouts/layout-with-header-footer";
import SearchForm from "@/components/Front/SearchForm";
import CategoryCarousel from "@/components/Front/CategoryCarousel";
import BloodTestPackages from "@/components/Front/BloodTestPackages";
// import HomeWhyChoose from "../components/Front/HomeWhyChoose";
// import About from "../components/Front/About";
// import Testimonial from "../components/Front/Testimonial";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const page = () => {
  return (
    <>
      <LayoutWithHeaderFooter>
        <SearchForm />
        <CategoryCarousel />
        <BloodTestPackages/>
        <HomeTabs />
        {/* <CategoryCarousel/> */}
        <AddBanners />
        <HomePackages />
        {/* <About /> */}
        <TestimonialsSlider />

        <AlsoLookingFor />
        <Footer />
      </LayoutWithHeaderFooter>
    </>
  );
};

export default page;
