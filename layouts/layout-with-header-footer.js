import React, { useEffect, useState } from "react";
import Topheader from "../components/Front/Topheader";

import CallbackForm from "@/components/Front/CallbackModal";
import FloatingActions from "@/components/Front/FloatingActions";
import Navbar from "../components/Front/Navbar";

import LoginOffCanvas from "../components/LoginOffCanvas";
import SignUpOffCanvas from "../components/SignUpOffCanvas";
import { useDispatch, useSelector } from "react-redux";
import { hasCookie } from "cookies-next";
import { logout } from "../redux/authSlice";

const LayoutWithHeaderFooter = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const [manualCallbackShow, setManualCallbackShow] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!hasCookie("auth-token")) {
      dispatch(logout());
    }
  }, [dispatch]);

  return (
    <main className="main" id="top">
      <Topheader />
      {/* <Headernew/> */}
      <Navbar />
      {/* <Header2 /> */}
      {children}
      {!isLoggedIn ? (
        <>
          <LoginOffCanvas />
          <SignUpOffCanvas />
        </>
      ) : (
        <></>
      )}

      <CallbackForm
        show={manualCallbackShow}
        handleClose={setManualCallbackShow}
      />
      <FloatingActions handleCallback={setManualCallbackShow}/>
    </main>
  );
};

export default LayoutWithHeaderFooter;
