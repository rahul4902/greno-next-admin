import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Image } from "react-bootstrap";
import { API_URL, Href } from "utils/constant";
import UploadIcon from "../../svg/UploadIcon";
import SearchIcon from "../../svg/Search";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]); // Using 'any' type for the suggestions
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false);
  const router = useRouter();

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

  const handleInputChange = (event) => {
    const term = event.target.value.trim();
    setSearchTerm(term);
    if (term.length > 1) {
      fetchSuggestions(term);
    } else {
      setIsSuggestionsVisible(false);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name); // Use the 'name' or any other property as needed
    setIsSuggestionsVisible(false);
    router.push(`/search?q=${encodeURIComponent(suggestion.name)}`);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      event.preventDefault();
      setIsSuggestionsVisible(false);
      router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <section className="py-xxl-10 pb-0 section" id="home">
      <div
        className="bg-holder bg-size"
        style={{
          backgroundImage: "url(/images/gallery/hero-bg.png)",
          backgroundPosition: "top center",
          backgroundSize: "cover",
        }}
      ></div>
      {/*/.bg-holder*/}
      <div className="container">
        <div className="row min-vh-xl-100 min-vh-xxl-25">
          <div className="col-md-5 col-xl-5 order-0 order-md-1 text-end">
            <Image
              className="pt-7 pt-md-0 w-100"
              src="/images/gallery/hero.png"
              alt="hero-header"
            />
          </div>
          <div className="col-md-7 col-xl-7 text-md-start text-center py-6">
            {/* <h1 className="fw-light font-base fs-6 fs-xxl-7">
              Were <strong>determined </strong>for
              <br />
              your&nbsp;<strong>better life.</strong>
            </h1> */}
            <div className="d-flex justify-content-start align-items-center gap-2 mb-2">
              <h1 className="fw-light font-base fs-4 fs-xxl-7 text-nowrap mb-0">
                <b>Greno Path Lab : </b>
              </h1>
              <div class="typewriter">
                <h1 className="fw-light font-base fs-3 fs-xxl-7 mb-0">
                  Your trusted partner...
                </h1>
              </div>
            </div>

            {/* <p className="fs-1 mb-5">
              You can get the care you need 24/7 – be it online or in <br />
              person. You will be treated by caring specialist doctors.{" "}
            </p> */}
            <div className="position-relative">
              <input
                type="text"
                className="form-control"
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
            <div className="mt-3 row two-btn">
              <div className="col-12 d-flex gap-3">
                <a
                  className="btn btn-primary rounded-pill"
                  href="#!"
                  role="button"
                >
                  <SearchIcon fill="#FFF" /> Search
                </a>
                <a
                  className="btn btn-primary rounded-pill"
                  href={Href}
                  role="button"
                >
                  <UploadIcon fill="#FFF" /> Upload
                </a>
              </div>
              {/* <div className="col-6">
                <a
                  className="btn btn-primary rounded-pill w-100 "
                  href={Href}
                  role="button"
                >
                  <UploadIcon fill="#FFF"/> Upload
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
