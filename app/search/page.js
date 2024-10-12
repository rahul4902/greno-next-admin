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
import {API_URL} from "../../utils/constant"
const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const searchQuery = decodeURIComponent(query || "");

  const [tests, setTests] = useState([
    {
        "status": true,
        "test_criteria": [],
        "related_tests": [],
        "package_tests": [],
        "_id": "669d1a74dc47f105d553d163",
        "package_or_test": "test",
        "code": "BC360",
        "name": "Kidney Function Test (KFT)",
        "slug": "kidney-function-test",
        "amount": 300,
        "leb_cost": 100,
        "offer_price": 399,
        "min_age": 5,
        "details": "Suggested for patients exhibit...",
        "description": "(Urea, BUN, Creatinine, BUN/Creatinine Ratio, Uric Acid, Sodium Ratio",
        "max_age": 120,
        "parameter": [],
        "tat_time": "10 Hours",
        "tat_time_duration": "1 day, 0:00:00",
        "recommended_age": "5+ Years",
        "is_active": true,
        "category": "669d186e0bc54250391ca7ac",
        "recommended_gender": "both",
        "discount": 68,
        "fasting_time": "Not Required",
        "package_price": 1560,
        "smart_report_available": false,
        "sample_types": [],
        "sample_1h_interval_3times": false,
        "sample_1h_interval_2times": false,
        "sample_2h_interval_1time": false,
        "sample_20m_interval_3times": false,
        "text_criteria": [
            "669d1907f418834f63f20476",
            "669d1907f418834f63f20477",
            "669d1907f418834f63f20478"
        ],
        "home_collection": true,
        "meta_keyword": "Kidney function test",
        "related_packages": [],
        "also_known_as": "Renal Profile, Kindey Profile, RFT, KFT, Renal Function Test, Kidney Panel",
        "qna": [
            "669d18cad0644b441248174d",
            "669d18cad0644b441248174e",
            "669d18cad0644b441248174f",
            "669d18cad0644b4412481750"
        ],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [
            "669d18f73cbc10f1f7561cc0",
            "669d18f73cbc10f1f7561cc1",
            "669d18f73cbc10f1f7561cc2"
        ],
        "type": null,
        "content": "",
        "package_alias": [
            "Kidney Blood Test"
        ],
        "__v": 0,
        "deletedAt": "2024-08-28T11:44:12.112Z",
        "isDeleted": true
    },
    {
        "status": true,
        "test_criteria": [],
        "related_tests": [],
        "package_tests": [],
        "_id": "66cc1eec85519feab4c57273",
        "package_or_test": "test",
        "code": "KFT12",
        "name": "kft",
        "slug": "kft",
        "amount": 123,
        "leb_cost": 0,
        "offer_price": 123,
        "min_age": 123,
        "details": "asdf",
        "description": "zxvc",
        "max_age": 123,
        "parameter": [
            "papaya2"
        ],
        "tat_time": "sd",
        "tat_time_duration": "123",
        "recommended_age": "123",
        "is_active": true,
        "category": "66c44415545b7bd98be950de",
        "recommended_gender": "both",
        "discount": 122,
        "fasting_time": "Not Required",
        "package_price": 0,
        "smart_report_available": false,
        "sample_types": [
            {
              name:"blood"
            },
            {
              name:"saliva "
            }
        ],
        "sample_1h_interval_3times": false,
        "sample_1h_interval_2times": false,
        "sample_2h_interval_1time": false,
        "sample_20m_interval_3times": false,
        "text_criteria": [],
        "home_collection": true,
        "meta_keyword": "asfd",
        "related_packages": [],
        "also_known_as": "",
        "qna": [],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [],
        "type": null,
        "content": "",
        "package_alias": [],
        "__v": 0,
        "deletedAt": "2024-08-28T11:44:16.087Z",
        "isDeleted": true
    },
    {
        "status": true,
        "related_tests": [],
        "package_tests": [],
        "_id": "66cc2f1dbd5e438eb1e48fd9",
        "package_or_test": "test",
        "code": "asfd",
        "name": "asfd",
        "slug": " Technology",
        "amount": 118,
        "lab_cost": 120,
        "offer_price": 112,
        "min_age": 0,
        "details": "asdf",
        "description": "adsf",
        "max_age": 0,
        "parameter": [],
        "tat_time": "123",
        "tat_time_duration": "123",
        "recommended_age": "123",
        "is_active": true,
        "category": "66c44406545b7bd98be950dd",
        "recommended_gender": "both",
        "discount": 0,
        "fasting_time": "Not Required",
        "package_price": 0,
        "smart_report_available": false,
        "sample_types": [
            "669d18d90424f90fecc2f159"
        ],
        "sample_1h_interval_3times": false,
        "sample_1h_interval_2times": false,
        "sample_2h_interval_1time": false,
        "sample_20m_interval_3times": false,
        "test_criteria": [],
        "home_collection": true,
        "meta_keyword": "asfd",
        "related_packages": [],
        "also_known_as": "",
        "qna": [],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [],
        "type": null,
        "content": "",
        "package_alias": [],
        "__v": 0,
        "deletedAt": "2024-08-28T11:44:42.715Z",
        "isDeleted": true
    },
    
  

]);

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
      <section className="sptb pb-0 mt-5">
        <div className="container">
          <h2 className="my-4">Showing results for &quot;{searchQuery}&quot; test</h2>

          <div className="row mb-4 gy-5">
            {tests.map((test) => (
              <div
                className="col-lg-4 col-md-12 col-xl-16 mb-16 mb-lg-16"
                key={test._id}
              >
                <TestItemCard test={test} />
              </div>
            ))}
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="col-lg-4col-md-12 col-xl-4 mb-4 mb-lg-0"
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
                className="col-lg-4 col-md-12 col-xl-4 mb-4 mb-lg-0"
                key={test._id}
              >
                <TestCard test={test} />
              </div>
            ))}
            {loading &&
              Array.from({ length: 3 }).map((_, index) => (
                <div
                  className="col-lg-4 col-md-12 col-xl-4 mb-4 mb-lg-0"
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
