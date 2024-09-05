import React from "react";
import { Image } from "react-bootstrap";

const Departments = () => {
  return (
    <>
      <section className="py-5" id="departments">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(/images/gallery/bg-departments.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              {/*/.bg-holder*/}
              <h1 className="text-center">OUR DEPARTMENTS</h1>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <section className="py-0">
        <div className="container">
          <div className="row py-5 align-items-center justify-content-center justify-content-lg-evenly">
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <Image
                      className="mb-3 deparment-icon"
                      src="/images/icons/neurology.png"
                      alt="..."
                    />
                    <Image
                      className="mb-3 deparment-icon-hover"
                      src="/images/icons/neurology.svg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Neurology</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <Image
                      className="mb-3 deparment-icon"
                      src="/images/icons/eye-care.png"
                      alt="..."
                    />
                    <Image
                      className="mb-3 deparment-icon-hover"
                      src="/images/icons/eye-care.svg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Eye care</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <Image
                      className="mb-3 deparment-icon"
                      src="/images/icons/cardiac.png"
                      alt="..."
                    />
                    <Image
                      className="mb-3 deparment-icon-hover"
                      src="/images/icons/cardiac.svg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Cardiac care</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <Image
                      className="mb-3 deparment-icon"
                      src="/images/icons/heart.png"
                      alt="..."
                    />
                    <Image
                      className="mb-3 deparment-icon-hover"
                      src="/images/icons/heart.svg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Heart care</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <Image
                      className="mb-3 deparment-icon"
                      src="/images/icons/osteoporosis.png"
                      alt="..."
                    />
                    <Image
                      className="mb-3 deparment-icon-hover"
                      src="/images/icons/osteoporosis.svg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">Osteoporosis</p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-auto col-md-4 col-lg-auto text-xl-start">
              <div className="d-flex flex-column align-items-center">
                <div className="icon-box text-center">
                  <a className="text-decoration-none" href="#!">
                    <Image
                      className="mb-3 deparment-icon"
                      src="/images/icons/ent.png"
                      alt="..."
                    />
                    <Image
                      className="mb-3 deparment-icon-hover"
                      src="/images/icons/ent.svg"
                      alt="..."
                    />
                    <p className="fs-1 fs-xxl-2 text-center">ENT</p>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
    </>
  );
};

export default Departments;
