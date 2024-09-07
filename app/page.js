"use client";
import React from "react";
import { Image } from "react-bootstrap";
import Departments from "components/Front/Departments";
import Budget from "components/Front/Budget";
import About from "components/Front/About";
import OurDoctor from "components/Front/OurDoctor";
import Testimonial from "components/Front/Testimonial";
import Appointment from "components/Front/Appointment";
import Blog from "components/Front/Blog";
import Hero from "components/Front/Hero";
import LayoutWithHeaderFooter from "layouts/layout-with-header-footer";

const page = () => {
  return (
    <>
      <LayoutWithHeaderFooter>
        <Hero />
        <Departments />
        <Budget />
        <About />
        <OurDoctor />
        <Testimonial />
        <Appointment />
        <Blog />
      </LayoutWithHeaderFooter>
    </>
  );
};

export default page;
