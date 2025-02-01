import React, { useEffect } from 'react';
import "./../public/css/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topheader from '../components/Front/Topheader'
import Headernew from '../components/Front/Headernew'
import Navbar from '../components/Front/Navbar'
import Footernew from '../components/Front/Footernew';
import LoginOffCanvas from '../components/LoginOffCanvas';
import SignUpOffCanvas from '../components/SignUpOffCanvas';
import { useDispatch, useSelector } from 'react-redux';
import { hasCookie } from 'cookies-next';
import { logout } from '../redux/authSlice';

  

const LayoutWithHeaderFooter = ({ children }) => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if(!hasCookie('auth-token')){
      dispatch(logout());
    }
  }, [dispatch])
  
  return (  
  <main className="main" id="top">
    <Topheader />
    {/* <Headernew/> */}
    <Navbar/>
    {/* <Header2 /> */}
    {children}
    <Footernew/>
    {!isLoggedIn ? <><LoginOffCanvas /><SignUpOffCanvas /></>:<></>}
    {/* <Footer /> */}
  </main>
)}

export default LayoutWithHeaderFooter;
