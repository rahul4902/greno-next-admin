"use client";
import React from "react";
import HomeTabs from "@/components/Front/HomeTabs";
import AlsoLookingFor from "@/components/Front/AlsoLookingFor";

import TestimonialsSlider from "../components/Front/TestimonialsSlider";
import HomePackages from "@/components/Front/HomePackages";
import HomeWhyChoose from "../components/Front/HomeWhyChoose";
import AddBanners from "@/components/Front/Home/AddBanners";

import About from "../components/Front/About";
import Testimonial from "../components/Front/Testimonial";

import LayoutWithHeaderFooter from "./../layouts/layout-with-header-footer";
import SearchForm from "@/components/Front/SearchForm";
import CategoryCarousel from "@/components/Front/CategoryCarousel";

const page = () => {
  return (
    <>
      <LayoutWithHeaderFooter>
        <SearchForm />
        <CategoryCarousel />
        <HomeTabs />
        {/* <CategoryCarousel/> */}
        <AddBanners />
        <HomePackages />
        {/* <About /> */}
        <TestimonialsSlider />

        <AlsoLookingFor />
      </LayoutWithHeaderFooter>
    </>
  );
};

export default page;
