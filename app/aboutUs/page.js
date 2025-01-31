"use client"

import Image from "next/image";
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../../greno-next-admin/public/css/theme.css"
import withHeader from "../../hoc/withHeader";
import { ClipboardList, Cpu, HandHeart } from "lucide-react";

const AboutSection = () => {
  return (
    <section className="section_all" id="about">
      <div className="container">
        {/* Welcome Section */}
        <div className="row">
          <div className="col-lg-12">
            <div className="section_title_all text-center">
              <h1 className="font-weight-bold">
                Welcome To <span className="text-custom">Greno Labs</span>
              </h1>
              <p className="section_subtitle mx-auto text-muted">
              Greno Labs is at the forefront of innovative diagnostic solutions, delivering accurate and <br/>rapid results to enhance healthcare outcomes.
              </p>
              <div className="">
                <i className=""></i>
              </div>
            </div>
          </div>
        </div>

        {/* Lab Overview */}
        <div className="row vertical_content_manage mt-5">
          <div className="col-lg-6">
            <div className="about_header_main mt-3">
              <h4 className="about_heading text-capitalize font-weight-bold mt-4 fs-1">
              About Us
              </h4>
              <p className="text-muted mt-3">
                Greno Labs is at the forefront of scientific research and technological innovation. From developing new materials to advancing healthcare, we are committed to solving real-world problems through cutting-edge science.
              </p>

              <p className="text-muted mt-3">
                Our interdisciplinary teams work across fields like biotechnology, environmental science, and artificial intelligence to create sustainable, impactful solutions.
              </p>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="img_about mt-3">
              <Image
                src="/images/gallery/about_us.jpg"
                alt="About Us"
                className="img-fluid mx-auto d-block rounded-lg"
                width={500} // Specify width
                height={300} // Specify height
              />
            </div>
          </div>
        </div>

        {/* Lab Services */}
        <div className="row mt-3">
          <div className="col-lg-4">
            <div className="about_content_box_all mt-3">
              <div className="about_detail text-center">
                <div className="about_icon">
                <Cpu size={34} />
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold">Advanced Technology</h5>
                <p className="edu_desc mt-3 mb-0 text-muted">
                Cutting-edge equipment for high-precision results.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about_content_box_all mt-3">
              <div className="about_detail text-center">
                <div className="about_icon">
                <ClipboardList size={34} />
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold"> Fast & Reliable Reports</h5>
                <p className="edu_desc mb-0 mt-3 text-muted">
                Timely delivery of accurate test reports.
                </p>
              </div>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="about_content_box_all mt-3">
              <div className="about_detail text-center">
                <div className="about_icon">
                <HandHeart size={34} />
                </div>
                <h5 className="text-dark text-capitalize mt-3 font-weight-bold"> Customer-Centric Approach </h5>
                <p className="edu_desc mb-0 mt-3 text-muted">
                Hassle-free sample collection and result access.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default withHeader(AboutSection);
