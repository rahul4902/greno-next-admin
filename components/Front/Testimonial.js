import React from "react";
import { Image } from "react-bootstrap";

const Testimonial = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(/images/gallery/people.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              {/*/.bg-holder*/}
              <h1 className="text-center">PEOPLE WHO LOVE US</h1>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <section className="py-8">
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage: "url(/images/gallery/people-bg-1.png)",
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row align-items-center offset-sm-1">
            <div
              className="carousel slide"
              id="carouselPeople"
              data-bs-ride="carousel"
            >
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval={10000}>
                  <div className="row h-100">
                    <div className="col-sm-3 text-center">
                      <Image
                        src="/images/gallery/people-who-loves.png"
                        width={100}
                        alt=""
                      />
                      <h5 className="mt-3 fw-medium text-secondary">
                        Edward Newgate
                      </h5>
                      <p className="fw-normal mb-0">Founder Circle</p>
                    </div>
                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div className="my-2">
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star-half-alt me-2" />
                        <i className="far fa-star" />
                      </div>
                      <p>
                        This medical and health care facility distinguishes
                        itself from the competition by providing technologically
                        advanced medical and health care. A mobile app and a
                        website are available via which you can easily schedule
                        appointments, get online consultations, and see
                        physicians, who will assist you through the whole
                        procedure. And all of the prescriptions, medications,
                        and other services they offer are 100% genuine,
                        medically verified, and proved. I believe that the
                        Livedoc staff is doing an outstanding job. Highly
                        recommended their health care services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval={2000}>
                  <div className="row h-100">
                    <div className="col-sm-3 text-center">
                      <Image
                        src="/images/gallery/people-who-loves.png"
                        width={100}
                        alt=""
                      />
                      <h5 className="mt-3 fw-medium text-secondary">
                        Jhon Doe
                      </h5>
                      <p className="fw-normal mb-0">UI/UX Designer</p>
                    </div>
                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div className="my-2">
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star-half-alt me-2" />
                        <i className="far fa-star" />
                      </div>
                      <p>
                        This medical and health care facility distinguishes
                        itself from the competition by providing technologically
                        advanced medical and health care. A mobile app and a
                        website are available via which you can easily schedule
                        appointments, get online consultations, and see
                        physicians, who will assist you through the whole
                        procedure. And all of the prescriptions, medications,
                        and other services they offer are 100% genuine,
                        medically verified, and proved. I believe that the
                        Livedoc staff is doing an outstanding job. Highly
                        recommended their health care services.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div className="row h-100">
                    <div className="col-sm-3 text-center">
                      <Image
                        src="/images/gallery/people-who-loves.png"
                        width={100}
                        alt=""
                      />
                      <h5 className="mt-3 fw-medium text-secondary">
                        Jeny Doe
                      </h5>
                      <p className="fw-normal mb-0">Web Designer</p>
                    </div>
                    <div className="col-sm-9 text-center text-sm-start pt-3 pt-sm-0">
                      <h2>Fantastic Response!</h2>
                      <div className="my-2">
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star me-2" />
                        <i className="fas fa-star-half-alt me-2" />
                        <i className="far fa-star" />
                      </div>
                      <p>
                        This medical and health care facility distinguishes
                        itself from the competition by providing technologically
                        advanced medical and health care. A mobile app and a
                        website are available via which you can easily schedule
                        appointments, get online consultations, and see
                        physicians, who will assist you through the whole
                        procedure. And all of the prescriptions, medications,
                        and other services they offer are 100% genuine,
                        medically verified, and proved. I believe that the
                        Livedoc staff is doing an outstanding job. Highly
                        recommended their health care services.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="position-relative z-index-2 mt-5">
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-bs-target="#carouselPeople"
                      data-bs-slide-to={0}
                    />
                    <li data-bs-target="#carouselPeople" data-bs-slide-to={1} />
                    <li data-bs-target="#carouselPeople" data-bs-slide-to={2}>
                      {" "}
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
