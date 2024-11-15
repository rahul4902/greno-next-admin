import React from 'react';
import "./../public/css/theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Topheader from '../components/Front/Topheader'
import Headernew from '../components/Front/Headernew'
import Footernew from '../components/Front/Footernew';

  

const LayoutWithHeaderFooter = ({ children }) => (
  <main className="main" id="top">
    <Topheader />
    <Headernew/>
    {/* <Header2 /> */}
    {children}
    <Footernew/>
    {/* <Footer /> */}
  </main>
);

export default LayoutWithHeaderFooter;
