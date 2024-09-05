import React from "react";
import { Image } from "react-bootstrap";

const Blog = () => {
  return (
    <>
      <section className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12 py-3">
              <div
                className="bg-holder bg-size"
                style={{
                  backgroundImage: "url(/images/gallery/blog-post.png)",
                  backgroundPosition: "top center",
                  backgroundSize: "contain",
                }}
              ></div>
              {/*/.bg-holder*/}
              <h1 className="text-center">RECENT BLOGPOSTS</h1>
            </div>
          </div>
        </div>
        {/* end of .container*/}
      </section>
      <section>
        <div
          className="bg-holder bg-size"
          style={{
            backgroundImage: "url(/images/gallery/dot-bg.png)",
            backgroundPosition: "top left",
            backgroundSize: "auto",
          }}
        ></div>
        {/*/.bg-holder*/}
        <div className="container">
          <div className="row">
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="card h-100 shadow card-span rounded-3">
                <Image
                  className="card-img-top rounded-top-3"
                  src="/images/gallery/covid-19.png"
                  alt="news"
                />
                <div className="card-body">
                  <span className="fs--1 text-primary me-3">Health</span>
                  <svg
                    className="bi bi-calendar2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                      {" "}
                    </path>
                  </svg>
                  <span className="fs--1 text-900">Nov 21, 2021</span>
                  <span className="fs--1" />
                  <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                    COVID-19: The Most Up-to-Date Information
                  </h5>
                  <a className="stretched-link" href="#!">
                    read full article
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="card h-100 shadow card-span rounded-3">
                <Image
                  className="card-img-top rounded-top-3"
                  src="/images/gallery/laboratories.png"
                  alt="news"
                />
                <div className="card-body">
                  <span className="fs--1 text-primary me-3">Lifestyle</span>
                  <svg
                    className="bi bi-calendar2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                      {" "}
                    </path>
                  </svg>
                  <span className="fs--1 text-900">Nov 25, 2021</span>
                  <span className="fs--1" />
                  <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                    Importance of Accreditation for Laboratories
                  </h5>
                  <a className="stretched-link" href="#!">
                    read full article
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="card h-100 shadow card-span rounded-3">
                <Image
                  className="card-img-top rounded-top-3"
                  src="/images/gallery/nicotine.png"
                  alt="news"
                />
                <div className="card-body">
                  <span className="fs--1 text-primary me-3">Health</span>
                  <svg
                    className="bi bi-calendar2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                      {" "}
                    </path>
                  </svg>
                  <span className="fs--1 text-900">Nov 28, 2021</span>
                  <span className="fs--1" />
                  <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                    The dangers of nicotine are addressed in depth
                  </h5>
                  <a className="stretched-link" href="#!">
                    read full article
                  </a>
                </div>
              </div>
            </div>
            <div className="col-sm-6 col-lg-3 mb-4">
              <div className="card h-100 shadow card-span rounded-3">
                <Image
                  className="card-img-top rounded-top-3"
                  src="/images/gallery/treatment.png"
                  alt="news"
                />
                <div className="card-body">
                  <span className="fs--1 text-primary me-3">Health</span>
                  <svg
                    className="bi bi-calendar2 me-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                    <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z">
                      {" "}
                    </path>
                  </svg>
                  <span className="fs--1 text-900">Nov 30, 2021</span>
                  <span className="fs--1" />
                  <h5 className="font-base fs-lg-0 fs-xl-1 my-3">
                    Treatment of patients with diabetes during COVID-19
                  </h5>
                  <a className="stretched-link" href="#!">
                    read full article
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
