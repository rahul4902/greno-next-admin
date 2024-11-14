"use client";
import React, { useState } from "react";
import { Image } from "react-bootstrap";

import CallIcon from "svg/CallIcon";
import WhatsappIcon from "svg/WhatsappIcon";
import UploadIcon from "../../svg/UploadIcon";
import SearchForm from "./SearchForm";
import CartIcon from "./../../svg/CartIcon";

const Headernew = () => {
  return (
    <div className="border-bottom bg-white">
      <div className="container">
        <header className="d-flex flex-wrap align-items-center justify-content-center py-2">
          <a href="/" className="col-md-3 col-2">
            <Image
              width={120}
              src="/images/brand/logo/logo.png"
              alt="logo"
              className="ah_logo"
            />
          </a>

          <div className="col-10 col-md-9">
            <div className="d-flex justify-content-between ">
              <div>
                <div className="d-none d-md-block">
                  <SearchForm />
                </div>
              </div>
              <div className="d-flex gap-4">
                <a href="#" className="header_call">
                  <CallIcon height="30px" width="30px" color="#12344d" />{" "}
                  9876543219
                </a>
                <a href="#" className="header_call">
                  <WhatsappIcon height="30px" width="30px" color="#25D366" />
                </a>
                <a href="#" className="header_call">
                  <CartIcon height="24px" width="24px" />
                </a>
              </div>
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
