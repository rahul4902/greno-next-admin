"use client";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { PhoneCall, ShoppingCart } from "lucide-react";
import WhatsappIcon from "svg/WhatsappIcon";
// import UploadIcon from "../../svg/UploadIcon";
import SearchForm from "./SearchForm";
// import CartIcon from "./../../svg/CartIcon";
import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown"
import Link from "next/link";
const Headernew = () => {
  const cartItems = useSelector((state) => state.cart.items);
  return (
    <div className="border-bottom bg-white">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-between py-2">
          <Link href="/" className="col-md-4">
            <Image
              width={120}
              src="/images/brand/logo/logo.png"
              alt="logo"
              className="ah_logo"
            />
          </Link>

          <div className="col-md-4">
            <div className="">
              <div>
                <div className="d-none d-md-block">
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex justify-content-md-end">
            <div className="d-flex gap-4">
              
     
              <Link aria-label="Chat on WhatsApp" target="_blank" href="https://api.whatsapp.com/send/?phone=919958747295&text=Hi&app_absent=0" className="header_call">
                <WhatsappIcon height="30px" width="30px" color="#25D366" />
              </Link>
              <Link href="/cart" className="header_call  position-relative">
              <ShoppingCart size={28} color="#12344d"/>
                {/* <CartIcon height="24px" width="24px" /> */}
                {cartItems?.length ? (
                  <span className="position-absolute bottom-0 start-100 translate-middle badge rounded bg-danger border border-light rounded-circle">
                    {cartItems?.length}
                    <span className="visually-hidden">cart items</span>
                  </span>
                ) : (
                  <></>
                )}
              </Link>
              <ProfileDropDown/>
            </div>
          </div>
        </header>
        <div className="d-md-none">
          <SearchForm />
        </div>
      </div>
    </div>
  );
};

export default Headernew;
