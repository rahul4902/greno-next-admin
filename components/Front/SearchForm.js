import React, { useState } from "react";
// import SearchIcon from "../../svg/SearchIcon";
import { useRouter } from "next/navigation";
// import UploadIcon from "../../svg/UploadIcon";
import { API_URL, Href } from "utils/constant";
import { Search, Upload } from "lucide-react";
const SearchForm = () => {
  const commonTests = [
    "Complete Blood Count (CBC)",
    "Lipid Profile",
    "Thyroid Function Test",
    "Hemoglobin A1C",
    "Liver Function Test",
    "Blood Glucose Test",
    "Vitamin D Levels",
    "Electrolyte Panel",
  ];

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
    <div
      className="container-fluid py-5 mb-5"
      style={{
        background:
          "linear-gradient(135deg, rgba(12, 82, 156, 0.15) 0%, rgba(76, 159, 210, 0.15) 100%), url('/images/background/bg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div className="container position-relative" style={{ zIndex: 1 }}>
        <div className="row justify-content-center text-center">
          <div className="col-md-10 col-lg-8">
            <div className="bg-white bg-opacity-90 rounded-4 p-3 shadow-lg">
              <form
                onSubmit={submitHandler}
                className="d-flex gap-2 align-items-stretch"
              >
                <div className="flex-grow-1 position-relative">
                  <input
                    type="text"
                    className="form-control form-control-lg border-2 border-primary-custom shadow-sm"
                    value={searchTerm}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    placeholder="Search blood tests (e.g., CBC, Lipid Profile)..."
                    style={{ borderRadius: "12px" }}
                  />

                  {isSuggestionsVisible && (
                    <div className="position-absolute w-100 mt-1">
                      <div className="list-group">
                        {suggestions?.map((suggestion) => (
                          <button
                            key={suggestion._id}
                            type="button"
                            className="list-group-item list-group-item-action text-start bg-white"
                            onClick={() => handleSuggestionClick(suggestion)}
                          >
                            <span className="text-primary fw-bold">
                              {suggestion.name}
                            </span>
                            <br />
                            <small className="text-muted">
                              {suggestion.testCode}
                            </small>
                          </button>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                <div className="d-flex gap-2">
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg px-2 px-md-4 text-white d-flex align-items-center"
                    style={{ borderRadius: "12px" }}
                  >
                    <Search size={24} className="me-md-2" />
                    <span className="d-none d-md-block">Search</span>
                  </button>

                  <label
                    className="btn btn-outline-primary btn-lg px-2 px-md-4 d-flex align-items-center"
                    style={{
                      borderRadius: "12px",
                      border: "2px solid #12344d",
                    }}
                  >
                    <Upload size={24} className="me-md-2" />                    
                    <span className="d-none d-md-block">Upload Rx</span>
                    <input type="file" hidden accept=".pdf,.jpg,.jpeg,.png" />
                  </label>
                </div>
              </form>
            </div>

            <div className="mt-4 text-white text-shadow">
              <small className="d-block mb-1">Common Blood Tests:</small>
              <div className="d-flex gap-3 justify-content-center flex-wrap">
                {commonTests.map((test) => (
                  <button
                    key={test}
                    className="badge bg-white bg-opacity-25 text-white border-0 py-2 px-3"
                    onClick={() => setSearchTerm(test)}
                  >
                    {test}
                  </button>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchForm;
