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
      setSuggestions([
        {
          package_tests: [],
          _id: "66cf1ec91fc9d79773032d92",
          package_or_test: "test",
          code: "lkj",
          name: "kft122",
          slug: "kft122",
          amount: 23,
          lab_cost: 23,
          offer_price: 3,
          min_age: 323,
          details: "detailsss",
          description: "description 2",
          max_age: 323,
          parameter: ["kft", "kft2"],
          tat_time: "323",
          tat_time_duration: ";kl",
          recommended_age: ";lj",
          status: true,
          category: "66c443c4545b7bd98be950dc",
          recommended_gender: "both",
          discount: 20,
          fasting_time: ";lkj",
          package_price: 0,
          smart_report_available: true,
          sample_types: [
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f157",
          ],
          sample_1h_interval_3times: true,
          sample_1h_interval_2times: true,
          sample_2h_interval_1time: true,
          sample_20m_interval_3times: true,
          test_criteria: [
            "66cf1ec91fc9d79773032d94",
            "66cf1ec91fc9d79773032d95",
          ],
          home_collection: true,
          meta_keyword: "meta keyworkd111",
          related_tests: [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9",
          ],
          also_known_as: "kft,asdf",
          qna: [],
          sample_report: null,
          sample_report_pdf: null,
          is_hiv_form: false,
          tags: ["test", "kft"],
          type: null,
          content: "",
          package_alias: [],
          isDeleted: false,
          deletedAt: null,
          __v: 1,
        },
        {
          package_tests: [],
          _id: "66cf214784d650f74b737728",
          package_or_test: "test",
          code: "lkj",
          name: "kft1222",
          slug: "kft1222",
          amount: 23,
          lab_cost: 23,
          offer_price: 3,
          min_age: 323,
          details: "detailsss",
          description: "description 2",
          max_age: 323,
          parameter: ["kft", "kft2"],
          tat_time: "323",
          tat_time_duration: ";kl",
          recommended_age: ";lj",
          status: true,
          category: "66c443c4545b7bd98be950dc",
          recommended_gender: "both",
          discount: 20,
          fasting_time: ";lkj",
          package_price: 0,
          smart_report_available: true,
          sample_types: [
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f157",
          ],
          sample_1h_interval_3times: true,
          sample_1h_interval_2times: true,
          sample_2h_interval_1time: true,
          sample_20m_interval_3times: true,
          test_criteria: [
            "66cf214784d650f74b73772a",
            "66cf214784d650f74b73772b",
          ],
          home_collection: true,
          meta_keyword: "meta keyworkd111",
          related_tests: [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9",
          ],
          also_known_as: "kft,asdf",
          qna: [],
          sample_report: null,
          sample_report_pdf: null,
          is_hiv_form: false,
          tags: ["test", "kft"],
          type: null,
          content: "",
          package_alias: [],
          isDeleted: false,
          deletedAt: null,
          __v: 1,
        },
      ]);
    }
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion.name); // Use the 'name' or any other property as needed
    setIsSuggestionsVisible(false);
    router.push(`/search?q=${encodeURIComponent(suggestion.name)}`);
  };

  return (
    <div>
      <form
        className="hdr-srch d-flx itm-cntr"
        onSubmit={() => {
          console.log("submit");
        }}
      >
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
            <button type="submit" className="btn btn-sm btn-primary me-1">
              {/* <SearchIcon height="18px" width="22px" /> */}
              <Search color="#FFF" size={22}/>
            </button>
            <label htmlFor="fileInput" className="btn btn-sm btn-primary">
              <Upload color="#FFF" size={22}/>
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
  );
};

export default SearchForm;
