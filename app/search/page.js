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
    {
        "status": true,
        "related_tests": [],
        "package_tests": [],
        "_id": "66cc2f4b9d7ad69ac872e6bd",
        "package_or_test": "test",
        "code": "asfd",
        "name": "asfd2",
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
        "deletedAt": "2024-08-28T11:44:43.470Z",
        "isDeleted": true
    },
    {
        "status": true,
        "related_tests": [],
        "package_tests": [],
        "_id": "66cc2fd9e36aecd06fac1986",
        "package_or_test": "test",
        "code": "asfd",
        "name": "asfd222",
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
        "test_criteria": [
            "66cc2fd9e36aecd06fac1988",
            "66cc2fd9e36aecd06fac1989"
        ],
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
        "__v": 1,
        "deletedAt": "2024-08-28T11:44:45.851Z",
        "isDeleted": true
    },
    {
        "status": true,
        "related_tests": [],
        "package_tests": [],
        "_id": "66cc30237290d7f128cf9ce8",
        "package_or_test": "test",
        "code": "asfd",
        "name": "asfd2222",
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
        "test_criteria": [
            "66cc30237290d7f128cf9cea",
            "66cc30237290d7f128cf9ceb"
        ],
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
        "__v": 1,
        "deletedAt": "2024-08-28T11:44:46.683Z",
        "isDeleted": true
    },
    {
        "package_tests": [],
        "_id": "66cd70851482fcf53508b231",
        "package_or_test": "test",
        "code": "asdf",
        "name": "asdf",
        "slug": "adsf",
        "amount": 231,
        "lab_cost": 9,
        "offer_price": 117,
        "min_age": 1,
        "details": "adf",
        "description": "asdf",
        "max_age": -2,
        "parameter": [
            "asfd",
            "asdf"
        ],
        "tat_time": "15 hrs",
        "tat_time_duration": "123",
        "recommended_age": "123",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 0,
        "fasting_time": "Not Required",
        "package_price": 0,
        "smart_report_available": false,
        "sample_types": [
            "669d18d90424f90fecc2f159",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": false,
        "sample_1h_interval_2times": false,
        "sample_2h_interval_1time": false,
        "sample_20m_interval_3times": false,
        "test_criteria": [],
        "home_collection": true,
        "meta_keyword": "",
        "related_tests": [],
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
        "deletedAt": "2024-08-28T11:45:35.345Z",
        "isDeleted": true
    },
    {
        "package_tests": [],
        "_id": "66cd70d1ff790bddba6b2ca4",
        "package_or_test": "test",
        "code": "lkj",
        "name": "ljlk",
        "slug": "jl;k",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": ";lj",
        "description": ";klj",
        "max_age": 323,
        "parameter": [
            "asfd",
            "asdf"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 0,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": false,
        "sample_types": [
            "669d18d90424f90fecc2f158"
        ],
        "sample_1h_interval_3times": false,
        "sample_1h_interval_2times": false,
        "sample_2h_interval_1time": false,
        "sample_20m_interval_3times": false,
        "test_criteria": [],
        "home_collection": true,
        "meta_keyword": "lkj",
        "related_tests": [],
        "also_known_as": ";j",
        "qna": [
            "66cd70d1ff790bddba6b2ca8",
            "66cd70d1ff790bddba6b2ca9"
        ],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [],
        "type": null,
        "content": "",
        "package_alias": [],
        "__v": 1,
        "deletedAt": "2024-08-28T11:45:36.364Z",
        "isDeleted": true
    },
    {
        "package_tests": [],
        "_id": "66cf1ec91fc9d79773032d92",
        "package_or_test": "test",
        "code": "lkj",
        "name": "kft122",
        "slug": "kft122",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "kft",
            "kft2"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [
            "66cf1ec91fc9d79773032d94",
            "66cf1ec91fc9d79773032d95"
        ],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [
            "test",
            "kft"
        ],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": false,
        "deletedAt": null,
        "__v": 1
    },
    {
        "package_tests": [],
        "_id": "66cf214784d650f74b737728",
        "package_or_test": "test",
        "code": "lkj",
        "name": "kft1222",
        "slug": "kft1222",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "kft",
            "kft2"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [
            "66cf214784d650f74b73772a",
            "66cf214784d650f74b73772b"
        ],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [
            "test",
            "kft"
        ],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": false,
        "deletedAt": null,
        "__v": 1
    },
    {
        "package_tests": [],
        "_id": "66cf22669a3da96b8fbcc544",
        "package_or_test": "test",
        "code": "lkj",
        "name": "kft12222",
        "slug": "kft12222",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "kft",
            "kft2"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [
            "66cf22669a3da96b8fbcc546",
            "66cf22669a3da96b8fbcc547"
        ],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [
            "66cf22669a3da96b8fbcc54b",
            "66cf22669a3da96b8fbcc54c"
        ],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [
            "test",
            "kft"
        ],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": false,
        "deletedAt": null,
        "__v": 2
    },
    {
        "package_tests": [],
        "_id": "66cf24409e822f8c1325a081",
        "package_or_test": "test",
        "code": "lkj",
        "name": "kft122221",
        "slug": "kft122221",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "asfd",
            "das"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f159",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": false,
        "deletedAt": null,
        "__v": 0
    },
    {
        "package_tests": [],
        "_id": "66cf247a8c7aadbd568433c4",
        "package_or_test": "test",
        "code": "lkj",
        "name": "kft1222212",
        "slug": "kft1222212",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "asfd",
            "das"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f159",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [
            "66cf247a8c7aadbd568433c6",
            "66cf247a8c7aadbd568433c7"
        ],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [
            "66cf247a8c7aadbd568433cb",
            "66cf247a8c7aadbd568433cc"
        ],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": false,
        "deletedAt": null,
        "__v": 2
    },
    {
        "_id": "66cf272297079d97d9fde805",
        "package_or_test": "package",
        "code": "lkj",
        "name": "kft122221111",
        "slug": "kft122221111",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "kft",
            "kft2"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f157",
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f159"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [
            "66d5adecc12b4fad3ff7c4e2",
            "66d5adecc12b4fad3ff7c4e3"
        ],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": true,
        "deletedAt": "2024-09-02T12:24:23.780Z",
        "createdAt": "2024-08-28T13:33:22.569Z",
        "updatedAt": "2024-09-02T12:24:23.780Z",
        "__v": 3,
        "package_tests": [
            "66cc1eec85519feab4c57273",
            "66cc2f1dbd5e438eb1e48fd9",
            "669d1a74dc47f105d553d163"
        ]
    },
    {
        "_id": "66cf2e53dd1b6c84125978ec",
        "package_or_test": "package",
        "code": "lkj",
        "name": "k1",
        "slug": "k1",
        "amount": 23,
        "lab_cost": 23,
        "offer_price": 3,
        "min_age": 323,
        "details": "detailsss",
        "description": "description 2",
        "max_age": 323,
        "parameter": [
            "kft",
            "kft2"
        ],
        "tat_time": "323",
        "tat_time_duration": ";kl",
        "recommended_age": ";lj",
        "status": true,
        "category": "66c443c4545b7bd98be950dc",
        "recommended_gender": "both",
        "discount": 20,
        "fasting_time": ";lkj",
        "package_price": 0,
        "smart_report_available": true,
        "sample_types": [
            "669d18d90424f90fecc2f158",
            "669d18d90424f90fecc2f157"
        ],
        "sample_1h_interval_3times": true,
        "sample_1h_interval_2times": true,
        "sample_2h_interval_1time": true,
        "sample_20m_interval_3times": true,
        "test_criteria": [
            "66d5add5c12b4fad3ff7c4b8",
            "66d5add5c12b4fad3ff7c4b9"
        ],
        "home_collection": true,
        "meta_keyword": "meta keyworkd111",
        "related_tests": [
            "669d1a74dc47f105d553d163",
            "66cc2f1dbd5e438eb1e48fd9"
        ],
        "also_known_as": "kft,asdf",
        "qna": [
            "66d5add6c12b4fad3ff7c4bc"
        ],
        "sample_report": null,
        "sample_report_pdf": null,
        "is_hiv_form": false,
        "tags": [
            "tag1",
            "tag2"
        ],
        "type": null,
        "content": "",
        "package_alias": [],
        "isDeleted": false,
        "deletedAt": null,
        "createdAt": "2024-08-28T14:04:03.680Z",
        "updatedAt": "2024-09-02T12:21:42.139Z",
        "__v": 6,
        "package_tests": [
            "669d1a74dc47f105d553d163",
            "66cc1eec85519feab4c57273",
            "66cc2f1dbd5e438eb1e48fd9",
            "66cc2f4b9d7ad69ac872e6bd",
            "66cc30237290d7f128cf9ce8"
        ]
    }
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
      <section className="sptb pb-0">
        <div className="container">
          <h4>Showing results for &quot;{searchQuery}&quot; test</h4>

          <div className="row mb-4">
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
