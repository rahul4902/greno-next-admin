"use client";
import { useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";
import AutocompleteSearch from "./AutocompleteSearch";
import { API_URL } from "utils/constant";

const SearchBanner = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);

  const fetchSuggestions = async (searchTerm) => {
    try {
      // Replace 'YOUR_API_ENDPOINT' with the actual endpoint of your API
      const response = await fetch(
        `${API_URL}search?query=${encodeURIComponent(searchTerm).replace(/%20/g, '+')}`
      );
      const data = await response.json();
      setSuggestions(data); // Assuming the API returns an array of suggestions
    } catch (error) {
      console.error("Error fetching suggestions:", error);
    }
  };

  useEffect(() => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
    } else {
      fetchSuggestions(searchTerm);
    }
  }, [searchTerm]);

  const handleOnSearch = (string) => {
    setSearchTerm(string);
    console.log(string);
  };

  const handleOnSelect = (item) => {
    console.log("Selected:", item);
    router.push("/search?=" + encodeURIComponent(searchTerm).replace(/%20/g, '+'));
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (searchTerm) {
      const formattedSearchTerm = encodeURIComponent(searchTerm).replace(/%20/g, '+');
      router.push(`/search?q=${formattedSearchTerm}`);
    }
  };

  const handleOnHover = (item) => {
    console.log("Hovered:", item);
  };

  const handleOnFocus = () => {
    console.log("The search input is focused");
  };

  const handleOnClear = () => {
    console.log("The search input is cleared");
    setSuggestions([]);
  };

  const formatResult = (item) => {
    console.log(item);
    return (
      <div className="result-wrapper">
        <span className="result-span">{item.name}</span>
      </div>
    );
  };
  return (
    <section>
      <div
        className="banner-2 cover-image sptb-2 sptb-tab bg-background1 banner-section"
        data-image-src="../assets/images/banners/banner1.jpg"
      >
        <div className="header-text mb-0">
          <div className="container">
            <div className="text-center text-white mb-6">
              <h1 className="mb-1">We Care about Your Health</h1>
              <p>
                It is a long established fact that a reader will be distracted
                by the when looking at its layout.
              </p>
            </div>
            <div className="row">
              <div className="col-xl-9 col-lg-12 col-md-12 d-block mx-auto">
                <div className="search-background bg-transparent">
                  <form onSubmit={submitHandler}>
                    <div className="form row no-gutters ">
                      <div className="form-group  col-xl-10 col-lg-10 col-md-12" style={{marginBottom:"48px"}}>
                        <div className="search-bar-container">
                          <AutocompleteSearch/>
                          {/* <ReactSearchAutocomplete
                            items={suggestions}
                            onSearch={handleOnSearch}
                            onHover={handleOnHover}
                            onSelect={handleOnSelect}
                            onFocus={handleOnFocus}
                            onClear={handleOnClear}
                            styling={{ zIndex: 1 }}
                            formatResult={formatResult}
                            autoFocus
                          /> */}
                        </div>
                        {/* <span>
                        <i className="fa fa-crosshairs  location-gps mr-1"></i>{" "}
                      </span> */}
                      </div>
                      {/* <div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-white">
                    <select
                      className="form-control select2-show-search border-bottom-0 w-100"
                      data-placeholder="Select"
                    >
                      <optgroup label="Categories">
                        <option>Select Category</option>
                        <option value="1">Hospitals</option>
                        <option value="2">Doctors</option>
                        <option value="3">Fitness Centers</option>
                        <option value="4">Pharmacies</option>
                        <option value="5">Clinics</option>
                        <option value="6">Blood Banks</option>
                      </optgroup>
                    </select>
                  </div>
                  <div className="form-group col-xl-3 col-lg-3 col-md-12 select2-lg  mb-0 bg-white">
                    <select
                      className="form-control select2-show-search border-bottom-0 w-100"
                      data-placeholder="Select"
                    >
                      <optgroup label="Categories">
                        <option>Distance</option>
                        <option value="1">3km</option>
                        <option value="2">6km</option>
                        <option value="3">9km</option>
                        <option value="4">10km</option>
                        <option value="5">20km</option>
                      </optgroup>
                    </select>
                  </div> */}
                      <div className="col-xl-2 col-lg-2 col-md-12 mb-0">
                        <button
                          type="submit"
                          className="btn btn-lg btn-block btn-dark br-tl-md-0 br-bl-md-0"
                        >
                          Search Here
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* <div id="particles-js"></div> */}
        </div>
      </div>
    </section>
  );
};

export default SearchBanner;
