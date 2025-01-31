import { PhoneCall } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";
import WhatsappIcon from "svg/WhatsappIcon";

const Topheader = () => {
  return (
    <div>
      <div className="top_hdr">
        <nav>
          <div className="container d-flex flex-wrap">
            <ul className="nav">
              <li className="nav-item d-flex gap-3 align-items-center">
                <Link href="tel:9958747295" className="text-white d-flex gap-2 align-items-center">
                  <PhoneCall size={18} /> +91 9958747295
                </Link>
                {/* <Link href="tel:9958747295" className="text-white ms-1">
                   9716164902
                </Link> */}
                <Link aria-label="Chat on WhatsApp" color="#fff" target="_blank" href="https://api.whatsapp.com/send/?phone=919958747295&text=Hi&app_absent=0" className="text-white d-flex gap-1 align-items-center">
                <WhatsappIcon height="22px" width="22px" color="#fff" />9716164902
              </Link>
              </li>
            </ul>

            {/* Uncomment this section if dropdown is needed */}
            {/* <div className="dropdown">
              <a className="link-light btn-sm dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                English
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </div> */}

            <ul className="nav d-none d-sm-flex ms-auto">
              <li className="nav-item">
                <Link href={""} className="text-white">Privacy policy | </Link>
               
              </li>
              <li className="nav-item">
              <Link href={""} className="text-white ps-1">Disclaimer | </Link>
              </li>
              <li className="nav-item">
              <Link href={""} className="text-white ps-1">Contact</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Topheader;
