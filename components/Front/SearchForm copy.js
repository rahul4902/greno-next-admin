import React, { useState } from "react";
// import SearchIcon from "../../svg/SearchIcon";
import { useRouter } from "next/navigation";
// import UploadIcon from "../../svg/UploadIcon";
import { API_URL, Href } from "utils/constant";
import { Search, Upload } from "lucide-react";
const SearchForm = () => {
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
      setSuggestions(data?.data?.data || []); // Assuming data.data contains the array of suggestions
      setIsSuggestionsVisible(true);
    } catch (error) {
      console.error("Error fetching suggestions:", error);
      setSuggestions([]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name); // Use the 'name' or any other property as needed
    setIsSuggestionsVisible(false);
    router.push(`/search?q=${encodeURIComponent(suggestion.name)}`);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (searchTerm) {
      const formattedSearchTerm = encodeURIComponent(searchTerm).replace(
        /%20/g,
        "+"
      );
      router.push(`/search?q=${formattedSearchTerm}`);
    }
  };

  return (
    <div className="row d-flex justify-content-md-center">
      <div className="col-md-7">
        <div
          className="card p-5 rounded-4"
          style={{ marginTop: "0%", backgroundColor: "#ffffff4d" }}
        >
          <form className="hdr-srch d-flx itm-cntr" onSubmit={submitHandler}>
            <div className="position-relative">
              <div>
                <input
                  type="text"
                  className="form-control"
                  value={searchTerm}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  placeholder="Search..."
                  aria-label="Search"
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
              <div className="hdr_srch_icon">
                <button type="submit" className="btn btn-primary btn-sm  me-1">
                  <Search color="#FFF" size={22} />
                </button>
                <label htmlFor="fileInput" className="btn btn-sm btn-primary">
                  <Upload color="#FFF" size={22} />
                </label>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  accept=".pdf,.jpg,.jpeg,.png"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
