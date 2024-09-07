import React from 'react';
import Header2 from 'components/Front/Header2';
import Footer from 'components/Front/Footer';
import "./../public/css/theme.css";
  

const LayoutWithHeaderFooter = ({ children }) => (
  <main className="main" id="top">
    <Header2 />
    {children}
    <Footer />
  </main>
);

export default LayoutWithHeaderFooter;
