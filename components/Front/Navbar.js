import React, { useState } from "react";
import Link from "next/link";
import "../Front/navbar.css";
import { Image } from "react-bootstrap";
import { Menu, ShoppingCart } from "lucide-react";
import { useSelector } from "react-redux";
import ProfileDropDown from "./ProfileDropDown"
// import { Image } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const cartItems = useSelector((state) => state.cart.items);

  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <Link href="/" className="col-md-4">
          <Image
            width={120}
            src="/images/brand/logo/logo.png"
            alt="logo"
            className="ah_logo"
          />
        </Link>

        <button className="menu-toggle" onClick={() => setIsOpen(!isOpen)}>
        <Menu/>
        </button>

        <ul className={`nav-links ${isOpen ? "active" : ""} d-flex align-items-center mb-0`}>
          
          <li>
            <Link href="/">Reports</Link>
          </li>
          <li>
            <Link href="/gallery">Gallery</Link>
          </li>
          <li>
            <Link href="/search">Test/Package</Link>
          </li>
          <li>
            <Link href="/aboutUs">About</Link>
          </li>
          <li>
            <Link href="/contactUs">Contact</Link>
          </li>
          <li className="d-flex gap-3">
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
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
