import React from "react";
import { Image } from "react-bootstrap";

const Budget = () => {
  return (
    <section className="bg-secondary">
      <div
        className="bg-holder"
        style={{
          backgroundImage: "url(/images/gallery/bg-eye-care.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      ></div>
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-5 col-xxl-6">
            <Image
              className="img-fluid"
              src="/images/gallery/eye-care.png"
              alt="..."
            />
          </div>
          <div className="col-md-7 col-xxl-6 text-center text-md-start">
            <h2 className="fw-bold text-light mb-4 mt-4 mt-lg-0">
              Eye Care with Top Professionals
              <br className="d-none d-sm-block" />
              and In Budget.
            </h2>
            <p className="text-light">
              Weve built a healthcare system that puts your needs first.
              <br className="d-none d-sm-block" />
              For us, there is nothing more important than the health of{" "}
              <br className="d-none d-sm-block" />
              you and your loved ones.{" "}
            </p>
            <div className="py-3">
              <a
                className="btn btn-lg btn-light rounded-pill"
                href="#!"
                role="button"
              >
                Learn more{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Budget;
