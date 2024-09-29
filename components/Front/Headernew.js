"use client";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { API_URL, Href } from "utils/constant";
import { useRouter } from "next/navigation";

const Headernew = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Using 'any' type for the suggestions
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const router = useRouter();
  const handleInputChange = (event) => {
    const term = event.target.value.trim();
    setSearchTerm(term);
    if (term.length > 1) {
      fetchSuggestions(term);
    } else {
      setIsSuggestionsVisible(false);
    }
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsSuggestionsVisible(false);
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  const fetchSuggestions = async (term) => {
    try {
      const response = await fetch(
        `${API_URL}search?query=${encodeURIComponent(term).replace(
          /%20/g,
          "+"
        )}`
      );
      const data = await response.json();
      setSuggestions(data.data); // Assuming data.data contains the array of suggestions
      setIsSuggestionsVisible(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name); // Use the 'name' or any other property as needed
    setIsSuggestionsVisible(false);
    router.push(`/search?q=${encodeURIComponent(suggestion.name)}`);
  };

  return (
    <div>
      <div className="border-bottom header-new py-2">
        <div className="container">
          <header className="d-flex flex-wrap row align-items-center justify-content-center justify-content-md-between py-1">
            <a
              href="#"
              className="d-flex align-items-center col-md-3 col-2  mb-md-0 text-dark text-decoration-none"
            >
              <Image
                src="/images/gallery/logo.png"
                width={118}
                alt="logo"
                className="ah_logo"
              />
            </a>

            <div className="col-12 col-md-5 mb-2 d-none d-sm-block justify-content-center mb-md-0">
              <form className="hdr-srch d-flx itm-cntr" id="" action="">
                <div className="position-relative">
                  {/* <input
                    type="text"
                    className="form-control  srch_frm auto-complete-search-desk"
                    placeholder="Search..."
                    aria-label="Search"
                    style={{ backgroundColor: "#f0f4f9" }}
                    defaultValue=""
                  /> */}
                  <div className="position-relative">
                    <input
                      type="text"
                      className="form-control srch_frm auto-complete-search-desk"
                      value={searchTerm}
                      onChange={handleInputChange}
                      onKeyDown={handleKeyDown}
                      placeholder="Search..."
                      aria-label="Search"
                      style={{ height: "46px", backgroundColor: "#f0f4f9" }}
                    />
                    {isSuggestionsVisible && (
                      <ul
                        className="list-group position-absolute w-100"
                        style={{ zIndex: 1000 }}
                      >
                        {suggestions?.map((suggestion) => (
                          <li
                            key={suggestion._id}
                            className="list-group-item list-group-item-action"
                            onClick={() => handleSuggestionClick(suggestion)}
                            style={{ cursor: "pointer" }}
                          >
                            {suggestion.name}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                  {/* <input
                    id="search"
                    type="text"
                    className="form-control srch_frm auto-complete-search-desk"
                    name="s"
                    autoComplete="off"
                    placeholder="Search Doctor or Hospital"
                  /> */}
                  <button
                    id=""
                    type="submit"
                    className="btn btn-primary hdr_srch_icon d-flex align-items-center"
                    title="Search"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      fill="white"
                      viewBox="0 0 512 512"
                    >
                      <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                    </svg>
                  </button>
                  <ul
                    className="ajax-search-result"
                    id="ajax-search-result"
                  ></ul>
                </div>
              </form>
            </div>

            <div className="col-md-4 col-10 text-end d-flex justify-content-end">
              <div className="container upload-prescription-btn d-flex justify-content-end p-0 ">
                <div className="d-flex gap-1 gap-md-3">
                  <label htmlFor="fileInput" className="button mb-0">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="17 8 12 3 7 8" />
                      <line x1={12} y1={3} x2={12} y2={15} />
                    </svg>
                    Upload Prescription
                  </label>
                  <input
                    type="file"
                    id="fileInput"
                    style={{ display: "none" }}
                    accept=".pdf,.jpg,.jpeg,.png"
                  />
                  <a
                    href="#"
                    className="button"
                    onclick="alert('Download functionality not implemented in this HTML-only version.')"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={14}
                      height={14}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                      <polyline points="7 10 12 15 17 10" />
                      <line x1={12} y1={15} x2={12} y2={3} />
                    </svg>
                    Download Report
                  </a>
                </div>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div className="container d-block d-md-none my-2">
        <form className="hdr-srch d-flx itm-cntr" id="" action="">
          <div className="position-relative">
            <input
              type="text"
              className="form-control  srch_frm auto-complete-search-desk"
              placeholder="Search..."
              aria-label="Search"
              style={{ backgroundColor: "#f0f4f9" }}
              defaultValue=""
            />
            <button
              id=""
              type="submit"
              className="btn btn-primary hdr_srch_icon d-flex align-items-center"
              title="Search"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={14}
                height={14}
                fill="white"
                viewBox="0 0 512 512"
              >
                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
              </svg>
            </button>
            <ul className="ajax-search-result" id="ajax-search-result"></ul>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Headernew;
