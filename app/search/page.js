"use client";
import React, { useCallback, useEffect, useState } from "react";

import axios from "axios";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchParams } from "next/navigation";
import withHeader from "../../hoc/withHeader";
import TestLoader from "../../components/Front/Test/TestLoader";
import TestItemCard from "../../components/Front/Test/TestItemCard";
import { API_URL } from "../../utils/constant";
import { ChevronDown, CircleAlert } from "lucide-react";
import CategoryComponent from "@/components/Front/category/categoryComponent";
import { toast } from "react-toastify";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const category = searchParams.get("category");
  const [search, setSearch] = useState(decodeURIComponent(query || ""));
  const [categorySearch, setCategorySearch] = useState(decodeURIComponent(category || ""));
  const [tests, setTests] = useState([]);

  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadMoreLoader, setLoadMoreLoader] = useState(false);

  const [testPage, setTestPage] = useState(1);
  const [packagePage, setPackagePage] = useState(1);
  const [hasMoreTest, setHasMoreTest] = useState(false);
  const [hasMorePackage, setHasMoreTestPackage] = useState(false);

  const fetchTests = useCallback(
    async (type) => {
      setLoading(true);
      setLoadMoreLoader(true);
      try {
        let page = 1;

        switch (type) {
          case "test":
            page = testPage;
            break;
          case "package":
            page = packagePage;
            break;
        }
        let queryParams = { query: search, page, type, limit: 4 };
        if(categorySearch){          
          queryParams.category = categorySearch;
          delete queryParams.query;
        }
        const response = await axios.get(`${API_URL}search`, {
          params: queryParams
        });
        
        if(response.data.status != 200){
          toast.error(response.data.message);
          return;
        }
        const newTests = response.data.data.data || [];

        switch (type) {
          case "test":
            setTests((prevTests) => {
              const combined = [...prevTests, ...newTests];
              const uniqueTests = combined.filter(
                (test, index, self) =>
                  index === self.findIndex((t) => t._id === test._id)
              );
              return uniqueTests;
            });
            setHasMoreTest(response.data.data.hasMore);
            break;
          case "package":
            setPackages((prevPackages) => {
              const combined = [...prevPackages, ...newTests];
              const uniquePackages = combined.filter(
                (pkg, index, self) =>
                  index === self.findIndex((p) => p._id === pkg._id)
              );
              return uniquePackages;
            });
            setHasMoreTestPackage(response.data.data.hasMore);
            break;
        }
      } catch (error) {
        console.error("Error fetching tests:", error);
      } finally {
        setLoading(false);
        setLoadMoreLoader(false);
      }
    },
    [search, testPage, packagePage,categorySearch]
  );

  useEffect(() => {
    if (search || categorySearch) {
      fetchTests("test");
      fetchTests("package");
    }
  }, [search,categorySearch, fetchTests]);

  // Fetch more tests when testPage changes
  useEffect(() => {
    if (testPage > 1) {
      fetchTests("test");
    }
  }, [testPage, fetchTests]);

  // Fetch more packages when packagePage changes
  useEffect(() => {
    if (packagePage > 1) {
      fetchTests("package");
    }
  }, [packagePage, fetchTests]);

  // Load more handler for tests
  const loadMoreTest = () => {
    setTestPage((prevPage) => prevPage + 1);
  };

  // Load more handler for packages
  const loadMorePackage = () => {
    setPackagePage((prevPage) => prevPage + 1);
  };

  return (
    <div className="container mb-5">
      {search || categorySearch ? (
        <>
          <div className="row">
            <div className="col-12 my-4">
              <h4 className="text-primary-custom">
                Showing results for &quot;{categorySearch || search}&quot; test
              </h4>
            </div>
            {tests?.length === 0 && (
              <h5 className="text-primary-custom">
                <CircleAlert /> No Test Found!
              </h5>
            )}
            {loading && <TestLoader />}
            {tests?.map((test) => (
              <div className="col-12 col-md-6 mb-3" key={test._id}>
                <TestItemCard test={test} />
              </div>
            ))}
            <div className="col-12">
              {/* Load More Button */}
              {hasMoreTest && (
                <div className="text-center my-5">
                  <button
                    onClick={loadMoreTest}
                    className="btn btn-outline-primary"
                    disabled={loadMoreLoader}
                  >
                    {loadMoreLoader ? (
                      <div
                        className="spinner-border text-secondary spinner-border-sm"
                        role="status"
                      >
                        <span className="visually-hidden">Loading...</span>
                      </div>
                    ) : (
                      <>
                        Show More Tests <ChevronDown />
                      </>
                    )}
                  </button>
                </div>
              )}
            </div>
            {/* Start Packages */}
            <div className="col-12  my-4">
              <h4 className="text-primary-custom">
                Showing results for &quot;{categorySearch || search}&quot; package
              </h4>
            </div>
            {packages.length === 0 && <h5 className="text-primary-custom"><CircleAlert /> No Package Found!</h5>}
            {packages.map((test) => (
              <div
                className="col-lg-6 col-md-12 col-xl-6 mb-4 mb-lg-0"
                key={test._id}
              >
                <TestItemCard test={test} />
              </div>
            ))}
            <div className="col-12">
              {/* Load More Button */}
              {hasMorePackage && (
                <div className="text-center my-5">
                  <button
                    onClick={loadMorePackage}
                    className="btn btn-outline-primary"
                  >
                    Show More Packages <ChevronDown />
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      ) : (
        <CategoryComponent />
      )}
    </div>
  );
};
export default withHeader(SearchPage);
// export default SearchPage;
