import React from "react";

const About = () => {
  return (
    <>
      <section className="pb-0 section" id="about">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(/images/gallery/about-us.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              {/*/.bg-holder*/}
              <h1 className="text-center">ABOUT US</h1>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <section className="py-5">
          <div
            className="bg-holder bg-size"
            style={{
              backgroundImage: "url(/images/gallery/about-bg.png)",
              backgroundPosition: "top center",
              backgroundSize: "contain",
            }}
          ></div>
          {/*/.bg-holder*/}
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-6 order-lg-1 mb-5 mb-lg-0">
                <img
                  className="fit-cover rounded-circle w-100"
                  src="/images/gallery/health-care.png"
                  alt="..."
                />
              </div>
              <div className="col-md-6 text-center text-md-start">
                <h2 className="fw-bold mb-4">
                  We are developing a healthcare{" "}
                  <br className="d-none d-sm-block" />
                  system around you
                </h2>
                <p>
                  We think that everyone should have easy access to excellent{" "}
                  <br className="d-none d-sm-block" />
                  healthcare. Our aim is to make the procedure as simple as{" "}
                  <br className="d-none d-sm-block" />
                  possible for our patients and to offer treatment no matter
                  <br className="d-none d-sm-block" />
                  where they are — in person or at their convenience.{" "}
                </p>
                <div className="py-3">
                  <button
                    className="btn btn-lg btn-outline-primary rounded-pill"
                    type="submit"
                  >
                    Learn more{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default About;
