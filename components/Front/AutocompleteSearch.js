import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { API_URL } from "utils/constant";

const AutocompleteSearch = () => {
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
    <div className="position-relative">
      <input
        type="text"
        className="form-control"
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        placeholder="Search..."
        aria-label="Search"
        style={{ height: "46px" }}
      />
      {isSuggestionsVisible && (
        <ul
          className="list-group position-absolute w-100"
          style={{ zIndex: 1000 }}
        >
          {suggestions.map((suggestion) => (
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
  );
};

export default AutocompleteSearch;
