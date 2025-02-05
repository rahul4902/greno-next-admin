"use client";
import React from "react";
import Carousel from "../components/Front/Carousel";
import HomeTabs from "../components/Front/HomeTabs";
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
        <Carousel />
        <SearchForm />
        <HomeTabs />
        {/* <CategoryCarousel/> */}
        <AddBanners/>
        <HomePackages />
        
        <section className="py-5">
          <div className="container"> 
            <h2 className="my-5">People are also looking for</h2>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Blue diamon almonds</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Angie’s Boomchickapop Corn</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Salty kettle Corn</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Chobani Greek Yogurt</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Sweet Vanilla Yogurt</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Foster Farms Takeout Crispy wings</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Warrior Blend Organic</a>
            <a href="#" className="badge rounded-pill text-bg-light py-3 px-4 fw-semibold fs-5 me-2 mb-2" style={{ color:'#12344d' }}>Chao Cheese Creamy</a>
          </div>
        </section>
        <HomeWhyChoose />
        <section className="py-5">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="bg-light rounded p-2 mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M21.5 15a3 3 0 0 0-1.9-2.78l1.87-7a1 1 0 0 0-.18-.87A1 1 0 0 0 20.5 4H6.8l-.33-1.26A1 1 0 0 0 5.5 2h-2v2h1.23l2.48 9.26a1 1 0 0 0 1 .74H18.5a1 1 0 0 1 0 2h-13a1 1 0 0 0 0 2h1.18a3 3 0 1 0 5.64 0h2.36a3 3 0 1 0 5.82 1a2.94 2.94 0 0 0-.4-1.47A3 3 0 0 0 21.5 15Zm-3.91-3H9L7.34 6H19.2ZM9.5 20a1 1 0 1 1 1-1a1 1 0 0 1-1 1Zm8 0a1 1 0 1 1 1-1a1 1 0 0 1-1 1Z"></path></svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>Free delivery</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="col">
                <div className="bg-light rounded p-2 mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M19.63 3.65a1 1 0 0 0-.84-.2a8 8 0 0 1-6.22-1.27a1 1 0 0 0-1.14 0a8 8 0 0 1-6.22 1.27a1 1 0 0 0-.84.2a1 1 0 0 0-.37.78v7.45a9 9 0 0 0 3.77 7.33l3.65 2.6a1 1 0 0 0 1.16 0l3.65-2.6A9 9 0 0 0 20 11.88V4.43a1 1 0 0 0-.37-.78ZM18 11.88a7 7 0 0 1-2.93 5.7L12 19.77l-3.07-2.19A7 7 0 0 1 6 11.88v-6.3a10 10 0 0 0 6-1.39a10 10 0 0 0 6 1.39Zm-4.46-2.29l-2.69 2.7l-.89-.9a1 1 0 0 0-1.42 1.42l1.6 1.6a1 1 0 0 0 1.42 0L15 11a1 1 0 0 0-1.42-1.42Z"></path></svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>100% secure payment</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="col">
                <div className="bg-light rounded p-2 mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M22 5H2a1 1 0 0 0-1 1v4a3 3 0 0 0 2 2.82V22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9.18A3 3 0 0 0 23 10V6a1 1 0 0 0-1-1Zm-7 2h2v3a1 1 0 0 1-2 0Zm-4 0h2v3a1 1 0 0 1-2 0ZM7 7h2v3a1 1 0 0 1-2 0Zm-3 4a1 1 0 0 1-1-1V7h2v3a1 1 0 0 1-1 1Zm10 10h-4v-2a2 2 0 0 1 4 0Zm5 0h-3v-2a4 4 0 0 0-8 0v2H5v-8.18a3.17 3.17 0 0 0 1-.6a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3 3 0 0 0 4 0a3.17 3.17 0 0 0 1 .6Zm2-11a1 1 0 0 1-2 0V7h2ZM4.3 3H20a1 1 0 0 0 0-2H4.3a1 1 0 0 0 0 2Z"></path></svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>Quality guarantee</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
              <div className="col">
                <div className="bg-light rounded p-2 mb-3 border-0">
                  <div className="row">
                    <div className="col-md-2 text-dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="M12 8.35a3.07 3.07 0 0 0-3.54.53a3 3 0 0 0 0 4.24L11.29 16a1 1 0 0 0 1.42 0l2.83-2.83a3 3 0 0 0 0-4.24A3.07 3.07 0 0 0 12 8.35Zm2.12 3.36L12 13.83l-2.12-2.12a1 1 0 0 1 0-1.42a1 1 0 0 1 1.41 0a1 1 0 0 0 1.42 0a1 1 0 0 1 1.41 0a1 1 0 0 1 0 1.42ZM12 2A10 10 0 0 0 2 12a9.89 9.89 0 0 0 2.26 6.33l-2 2a1 1 0 0 0-.21 1.09A1 1 0 0 0 3 22h9a10 10 0 0 0 0-20Zm0 18H5.41l.93-.93a1 1 0 0 0 0-1.41A8 8 0 1 1 12 20Z"></path></svg>
                    </div>
                    <div className="col-md-10">
                      <div className="card-body p-0">
                        <h5>guaranteed savings</h5>
                        <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipi elit.</p>
                      </div>
                    </div>
                  </div>
                  </div>
              </div>
             
            </div>
          </div>
        </section>
        
        

        {/* <Hero />
        <Departments />
        <Budget />
        <About />
        <OurDoctor />
        <Testimonial />
        <Appointment />
        <Blog /> */}
      </LayoutWithHeaderFooter>
    </>
  );
};

export default page;
