"use client";
import React, { useEffect, useState } from "react";
import "./search.scss";
import axios from "axios";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchParams } from "next/navigation";
import withHeader from "../../hoc/withHeader";
import TestLoader from "../../components/Front/Test/TestLoader";
import TestCard from "../../components/Front/Test/TestCard";
import TestItemCard from "../../components/Front/Test/TestItemCard";
import { API_URL } from "../../utils/constant";
const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const searchQuery = decodeURIComponent(query || "");

  const [tests, setTests] = useState([]);

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(1); // Start with page 1
  const [hasMore, setHasMore] = useState(true); // Track if more data is available

  // useEffect(() => {
  //   const fetchTests = async (type = "test") => {
  //     setLoading(true);
  //     try {
  //       const response = await axios.get(`${API_URL}search`, {
  //         params: { query: searchQuery, page, type: type },
  //       });
  //       if (type == "test") {
  //         setTests((prevTests) => [...prevTests, ...response.data.data]);
  //       } else if (type == "package") {
  //         setHasMore(response.data.hasMore);
  //       }
  //     } catch (error) {
  //       console.error("Error fetching tests:", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   if (searchQuery) {
  //     fetchTests();
  //     fetchTests("package");
  //   }
  // }, [searchQuery, page]);

  // const loadMore = () => {
  //   setPage((prevPage) => prevPage + 1);
  // };

  useEffect(() => {
    const fetchTests = async (type = "test") => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}search`, {
          params: { query: searchQuery, page, type, limit: 3 }, // Ensure limit is 4
        });

        const newTests = Array.isArray(response.data.data.data)
          ? response.data.data.data
          : [];

        if (type === "test") {
          setTests((prevTests) => {
            const combined = [...prevTests, ...newTests];
            // Deduplicate by unique _id
            const uniqueTests = combined.filter(
              (test, index, self) =>
                index === self.findIndex((t) => t._id === test._id)
            );
            return uniqueTests;
          });
        } else if (type === "package") {
          setPackages((prevPackages) => {
            const combined = [...prevPackages, ...newTests];
            // Deduplicate by unique _id
            const uniquePackages = combined.filter(
              (pkg, index, self) =>
                index === self.findIndex((p) => p._id === pkg._id)
            );
            return uniquePackages;
          });
          console.log('has',response.data.data.hasMore);
          
          setHasMore(response.data.data.hasMore); // Use `hasMore` for the load more button
        }
      } catch (error) {
        console.error("Error fetching tests:", error);
      } finally {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchTests("test"); // Fetch test results
      fetchTests("package"); // Fetch package results
    }
  }, [searchQuery, page]);

  // Load more handler
  const loadMore = () => {
    setPage((prevPage) => prevPage + 1); // Increment the page number to load more
  };

  return (
    <>
      <section className="sptb pb-0 mt-5">
        <div className="container">
          <h2 className="my-4">
            Showing results for &quot;{searchQuery}&quot; test
          </h2>

          <div className="row mb-4 gy-5">
            {tests.map((test) => (
              <div
                className="col-lg-6 col-md-12 col-xl-16 mb-16 mb-lg-16"
                key={test._id}
              >
                <TestItemCard test={test} />
              </div>
            ))}
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="col-lg-6 col-md-12 col-xl-4 mb-4 mb-lg-0"
                  key={index}
                >
                  <TestLoader />
                </div>
              ))}
            {tests.length === 0 && <h5>No Test Found!</h5>}
          </div>

          <h2>Showing results for &quot;{searchQuery}&quot; package</h2>
          <div className="row mb-4">
            {packages.map((test) => (
              <div
                className="col-lg-6 col-md-12 col-xl-6 mb-4 mb-lg-0"
                key={test._id}
              >
                <TestItemCard test={test} />
              </div>
            ))}
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="col-lg-6 col-md-12 col-xl-6 mb-4 mb-lg-0"
                  key={index}
                >
                  {/* Add skeleton loaders */}
                </div>
              ))}
            {packages.length === 0 && <h5>No Package Found!</h5>}
          </div>

          {/* Load More Button */}
          {hasMore && (
            <div className="text-center">
              <button onClick={loadMore} className="btn btn-primary">
                Load More
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};
export default withHeader(SearchPage);
// export default SearchPage;
