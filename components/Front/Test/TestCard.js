import React from "react";
import ClockIcon from "./../../../svg/ClockIcon";
const TestCard = ({ test }) => {
  return (
    <article className="gui-card gui-card--block test-card-container p-0 w-100">
      <div className="text-cards px-3 pt-4">
        <div className="test-header">
          <div className="header-item d-flex justify-content-betweeen align-items-center gap-4">
            <a href="/lab-test-bangalore/kidney-function-test">
              <h3 className="gui-ty  gui-ty--size-14 gui-ty-w600 gui-ty--line-height-18  gui-tgrey100">
                {test.name}
                <span className="gui-ty  gui-ty-w600 "></span>
              </h3>
            </a>
            <button className="btn btn-outline-danger" type="button">
              <label className="gui-button--secondary-label gui-button--label"></label>
              <label className="gui-button--label mb-0">
                <span className="gui-ty   gui-ty--size-14 gui-ty-w600 gui-ty--line-height-18 ">
                  + Add
                </span>
              </label>
            </button>
          </div>
          <div className="header-item d-flex justify-content-between gap-0">
            <div className="tat-info">
              {/* <ClockIcon height="13" width="14" fill="#878787" />
              <span className="gui-ty  report-tat-container  gui-ty--size-12 gui-ty-w600 gui-ty--line-height-16 ">
                &nbsp;Reports within {" "} 6 hours
              </span> */}
            </div>
            <p className="price d-flex justify-content-between w-100 mb-0">
              <p>
                <b className="eleven-tests">11 tests</b>
              </p>
              <p>
                <span className="gui-ty  strike-price  gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 gui-ty--decoration-line-through">
                  <span>₹</span>943
                </span>
                <span className="gui-ty  real-price  gui-ty--size-16 gui-ty-w600 gui-ty--line-height-20 ">
                  <span className="gui-ty   gui-ty--size-14 gui-ty--line-height-18 ">
                    ₹
                  </span>
                  700
                </span>
              </p>
            </p>
          </div>
        </div>
        <div className="test-alias-container">
          <span className="gui-ty  also-known-as  gui-ty--size-12 gui-ty-w600 gui-ty--line-height-16 ">
            Also Known as &nbsp;
          </span>

          <span className="gui-ty  test-aliases  gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 ">
            {test.also_known_as}
          </span>
        </div>
        <section className="tests-info-container with-test-aliases">
          <div className="tests-summary-container d-flex gap-1 pt-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="13"
              fill="none"
            >
              <path fill="#fff" d="M0 .634h12v12H0z"></path>
              <path
                fill="url(#test-icon-new-gradient_svg__a)"
                fillRule="evenodd"
                d="M8.302 1.63a1.503 1.503 0 0 0-2.137 0l-.214.214-.101.113c-.285.35-.395.811-.313 1.25l.023.097-4.32 4.347a2.34 2.34 0 0 0-.69 1.666c0 .63.244 1.22.69 1.667l.409.41a2.33 2.33 0 0 0 1.664.69c.629 0 1.219-.244 1.664-.69L6.97 9.398 9.34 7.07l.016.005a1.55 1.55 0 0 0 1.434-.402l.213-.213a1.485 1.485 0 0 0-.003-2.126zM2.168 8.58 6.37 4.368l1.935 1.938-.513.514-.79-.79a.635.635 0 0 0-.91 0l-.068.08a.635.635 0 0 0 .069.83l.789.79-.335.336-.611-.612a.635.635 0 0 0-.91 0l-.07.08a.635.635 0 0 0 .07.83l.611.613-.335.336-.788-.79a.635.635 0 0 0-.91 0l-.07.08a.635.635 0 0 0 .07.83l.789.792-.292.293c-.415.387-1.125.383-1.525-.018l-.41-.41a1.086 1.086 0 0 1 0-1.512M7.093 2.54a.2.2 0 0 1 .15-.057.28.28 0 0 1 .168.075l2.683 2.69a.214.214 0 0 1 0 .3l-.213.214a.21.21 0 0 1-.299 0L6.879 3.055a.214.214 0 0 1 0-.3z"
                clipRule="evenodd"
              ></path>
              <path
                fill="url(#test-icon-new-gradient_svg__b)"
                d="M11.31 9.39a.776.776 0 1 1-1.55 0c0-.43.775-1.512.775-1.512s.775 1.062.775 1.512"
              ></path>
              <defs>
                <linearGradient
                  id="test-icon-new-gradient_svg__a"
                  x1="0.55"
                  x2="11.45"
                  y1="12.59"
                  y2="12.59"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A6A6A6"></stop>
                  <stop offset="1" stopColor="#6B6B6B"></stop>
                </linearGradient>
                <linearGradient
                  id="test-icon-new-gradient_svg__b"
                  x1="9.76"
                  x2="11.31"
                  y1="10.273"
                  y2="10.273"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#A6A6A6"></stop>
                  <stop offset="1" stopColor="#6B6B6B"></stop>
                </linearGradient>
              </defs>
            </svg>
            <div className="tests-summary">
              <p className="gui-ty   gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 mb-0">
                <b>11 tests: </b>
                <span>
                  <span className="gui-ty   gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 ">
                    Urea
                    <span className="gui-ty   gui-ty-w600  gui-tgrey100"></span>
                  </span>
                </span>
                <span>
                  <span className="gui-ty   gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 ">
                    ,&nbsp;
                  </span>
                  <span className="gui-ty   gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 ">
                    Blood Urea Nitrogen (BUN)
                    <span className="gui-ty   gui-ty-w600  gui-tgrey100"></span>
                  </span>
                </span>
                <span>
                  <span className="gui-ty   gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 ">
                    ,&nbsp;
                  </span>
                  <span className="gui-ty   gui-ty--size-12 gui-ty--weight-500 gui-ty--line-height-16 ">
                    Creatinine
                    <span className="gui-ty   gui-ty-w600  gui-tgrey100"></span>
                  </span>
                </span>{" "}
                &amp; 8 other tests
              </p>
            </div>
          </div>
        </section>
      </div>
      <div className="card-footer p-0">
        <div className="item-card9-footer btn-appointment">
          <div className="btn-group w-100 d-flex justify-content-between">
            <a
              href="#"
              className="btn btn-outline-light w-40 p-2 border-top-0  border-bottom-0"
            >
              <i className="fe fe-help-circle mr-1"></i>
              <ClockIcon height="13" width="14" fill="#878787" /> Reports in{" "}
              <b>{test.tat_time}</b>
            </a>
            {/* <a
              href="#"
              className="btn btn-outline-light w-33 p-2 border-top-0  border-bottom-0"
            >
              <i className="fe fe-eye  mr-1"></i>
              <b>11</b> tests
            </a> */}
            <a
              href="/lab-test-bangalore/kidney-function-test"
              className="d-flex align-items-center justify-content-center view-details btn btn-outline-light w-34 p-2 border-top-0 border-right-0  border-bottom-0"
            >
              <div className="gui-ty  view-details  gui-ty--size-14 gui-ty-w600 gui-ty--line-height-18  d-flex align-items-center gap-1">
                View Details
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  preserveAspectRatio="xMidYMid meet"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className=""
                  height="10"
                  width="10"
                  stroke="currentColor"
                  fill="currentColor"
                  strokeWidth="0.25"
                  viewBox="-4 0 17 18"
                >
                  <path d="M1.6 17.262a1.03 1.03 0 0 1-.728-1.757l6.073-6.073L.872 3.36a1.03 1.03 0 0 1 1.455-1.455l6.8 6.8a1.03 1.03 0 0 1 0 1.456l-6.8 6.8a1.025 1.025 0 0 1-.727.302z"></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default TestCard;
