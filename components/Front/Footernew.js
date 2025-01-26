import { Facebook, Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const Footernew = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <img 
               src="/images/brand/logo/logo_footer.png"
                alt="logo"
                className='img-fluid'
                width={180} 
              />
              <p className=" pt-2 pb-0 mb-0" style={{ color:'lightgrey' }}>
              Your health, our priority –<br></br><b> Greno Diagnous Labs,</b> where precision meets care!
              </p>
          
         
            </div>
            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4">
                  <h5>Patient Care</h5>
                  <ul className="list-unstyled ft-links">
                    <li><Link href="#" target="_blank" rel="noopener noreferrer">Find A Doctor</Link></li>
                  </ul>
                 
                </div>
                <div className="col-md-4">
                  <h5>Quick Links</h5>
                  <ul className="list-unstyled">
                    <li><Link href="" target="_blank" rel="noopener noreferrer">About US</Link></li>
                    <li><Link href="" target="_blank" rel="noopener noreferrer">Contact US</Link></li>
                    <li><Link href="" target="_blank" rel="noopener noreferrer">Privacy Policy</Link></li>
                  </ul>
                </div>
                <div className="col-md-4">
                  <h5>Follow us on</h5>
                  <ul className="list-unstyled d-flex gap-2">
                    <li><Link href="" target="_blank" rel="noopener noreferrer"><Facebook strokeWidth={1} color='#fff' fontSize={10} /></Link></li>
                    <li><Link href="" target="_blank" rel="noopener noreferrer"><Instagram strokeWidth={1} color='#fff' fontSize={10} /></Link></li>
                    <li><Link href="" target="_blank" rel="noopener noreferrer"><Linkedin strokeWidth={1} color='#fff' fontSize={10} /></Link></li>
                   
                  </ul>
                </div>
          
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* bottom-bar */}
      {/* <section className="cprght_ftr">
        <div className="container">
            <div className="row">
                <div className="col-md-5">
                    <div className="pt-md-2">© Copyright 2024. All Rights Reserved.</div>
                </div>
                <div className="col-md-3">
                    <ul className="nav nav-social">
                        <li className="nav-item"><a href="#" rel="nofollow" target="_blank" className="nav-link link-dark px-2" title="Follow Us On Facebook">  <svg xmlns="http://www.w3.org/2000/svg"  width={14} height={14} fill='white' viewBox="0 0 320 512"><path d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z"/></svg>
                        </a></li>
                        <li className="nav-item"><a href="#" rel="nofollow" target="_blank" className="nav-link link-dark px-2" title="Follow Us On Instagram"> <svg xmlns="http://www.w3.org/2000/svg"  width={14} height={14} fill='white' viewBox="0 0 448 512"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg></a></li>
                        <li className="nav-item"><a href="#" rel="nofollow" target="_blank" className="nav-link link-dark px-2" title="Follow Us On Twitter">  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill='white' viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg></a></li>
                        <li className="nav-item"><a href="#" rel="nofollow" target="_blank" className="nav-link link-dark px-2" title="Follow Us On Linkedin">  <svg xmlns="http://www.w3.org/2000/svg" width={14} height={14} fill='white' viewBox="0 0 448 512"><path d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z"/></svg></a></li>
                    </ul>
                </div>
                <div className="col-md-4">
                    <ul className="nav ms-auto">

                 
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Privacy policy</a> </li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2">Disclaimer</a></li>
                        <li className="nav-item"><a href="#" className="nav-link link-dark px-2 border-0">Contact</a></li>
                        
                    </ul>
                </div>
            </div>
        </div>
    </section> */}
    </div>
  );
}

export default Footernew;
