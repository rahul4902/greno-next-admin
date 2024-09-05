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
import {API_URL} from "../../utils/constant"
const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const searchQuery = decodeURIComponent(query || "");

  const [tests, setTests] = useState([]);
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  
  useEffect(() => {
    const fetchTests = async (type = "test") => {
      setLoading(true);
      try {
        const response = await axios.get(`${API_URL}search`, {
          params: { query: searchQuery, page, type: type },
        });
        if (type == "test") {
          setTests((prevTests) => [...prevTests, ...response.data.data]);
        } else if (type == "package") {
          setHasMore(response.data.hasMore);
        }
      } catch (error) {
        console.error("Error fetching tests:", error);
      } finally {
        setLoading(false);
      }
    };
    if (searchQuery) {
      fetchTests();
      fetchTests("package");
    }
  }, [searchQuery, page]);

  const loadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <>
      <section className="sptb">
        <div className="container">
          <h5>Showing results for &quot;{searchQuery}&quot; test</h5>

          <div className="row mb-4">
            {tests.map((test) => (
              <div
                className="col-lg-6 col-md-12 col-xl-4 mb-4 mb-lg-0"
                key={test._id}
              >
                <TestCard test={test} />
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
            {tests.length == 0 ? <h5>No Test Found!</h5> : <></>}
          </div>
          <h5>Showing results for &quot;{searchQuery}&quot; package</h5>
          <div className="row mb-4">
            {packages.map((test) => (
              <div
                className="col-lg-6 col-md-12 col-xl-4 mb-4 mb-lg-0"
                key={test._id}
              >
                <TestCard test={test} />
              </div>
            ))}
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="col-lg-6 col-md-12 col-xl-4 mb-4 mb-lg-0"
                  key={index}
                >
                  <article className="gui-card gui-card--block test-card-container p-0 w-100 mb-4">
                    <div
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        padding: "20px",
                      }}
                    >
                      <div className="mb-4">
                        <Skeleton
                          baseColor="#eeeeee"
                          height={30}
                          width="67%"
                          circle={false}
                          enableAnimation={true}
                        />
                      </div>
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="30%"
                        circle={false}
                        enableAnimation={true}
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="100%"
                        circle={false}
                        enableAnimation={true}
                        className="mb-4"
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="100%"
                        circle={false}
                        enableAnimation={true}
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="70%"
                        circle={false}
                        enableAnimation={true}
                        className="mb-2"
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="100%"
                        circle={false}
                        enableAnimation={true}
                      />
                      <Skeleton
                        baseColor="#eeeeee"
                        height={20}
                        width="20%"
                        circle={false}
                        enableAnimation={true}
                      />
                    </div>
                  </article>
                </div>
              ))}
            {packages.length == 0 ? <h5>No Package Found!</h5> : <></>}
          </div>
        </div>
      </section>
    </>
  );
};
export default withHeader(SearchPage);
// export default SearchPage;
