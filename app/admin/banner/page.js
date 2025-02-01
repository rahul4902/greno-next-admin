"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row, Image } from "react-bootstrap";
// import EditIcon from "svg/EditIcon";
// import DeleteIcon from "svg/DeleteIcon";
import apiService from "services/apiService";
import { API_URL, productDefaultImage } from "utils/constant";
import { toast } from "react-toastify";
import Pagination from "components/Pagination";
import { Edit, Trash2 } from "lucide-react";

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1); // Default page 1
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [totalItems, setTotalItems] = useState(0);
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "api/banner/list", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        console.log("Data fetched:", response.data.data); // Debug log
        setBanners(response.data.data);
        setTotalItems(response?.data?.pagination?.totalItems);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [currentPage, itemsPerPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const deleteBanner = async (_id) => {
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this banner?");

      if (!isConfirmed) {
        return; // Exit the function if the user cancels
      }
      const response = await axios.delete(API_URL + "api/banner/" + _id);
      if (response?.data?.status == 200) {
        setBanners((prevTests) => prevTests.filter((banner) => banner._id !== _id));
        toast.success(response.data.message);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <Fragment>
      <div className="bg-primary pt-10 pb-21"></div>
      <Container fluid className="mt-n22 px-6">
        <Row>
          <Col lg={12} md={12} xs={12}>
            {/* Page header */}
            <div>
              <div className="d-flex justify-content-between align-items-center">
                <div className="mb-2 mb-lg-0">
                  <h3 className="mb-0  text-white">Banner</h3>
                </div>
                <div>
                  <Link href="/admin/banner/form" className="btn btn-white">
                    Create Banner
                  </Link>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="my-6">
          <Col xl={12} lg={12} md={12} xs={12}>
            <div>
              <table className="table">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {banners.length > 0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td colSpan={3}>No Record Found...</td>
                    </tr>
                  )}
                  {banners?.map((banner, index) => (
                    <tr key={index}>
                      <td>
                      <div className="d-flex align-items-center">
                            <div>
                                <Image src={banner.image_url || productDefaultImage} alt={banner.name } 
                                onError={(e) => {
                                e.target.src = productDefaultImage;
                              }}
                               className="avatar-md avatar rounded-circle" />
                            </div>
                            <div className="ms-3 lh-1">
                                <h5 className=" mb-1">{banner.name}</h5>
                            </div>
                        </div>
                      </td>
                      <td>
                        <span
                          className={`badge-${
                            banner?.status ? "success" : "danger"
                          }-soft badge bg-none`}
                        >
                          {banner?.status ? "Active" : "InActive"}
                        </span>
                      </td>                     
                      <td>
                        <Link
                          className="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                          href={`/admin/banner/form?_id=${banner?._id}`}
                        >
                          <Edit />
                        </Link>
                        <button
                          className="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip"
                          type="button"
                          onClick={() => {
                            deleteBanner(banner._id);
                          }}
                        >
                          <Trash2 />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                currentPage={currentPage}
                totalItems={totalItems}
                itemsPerPage={itemsPerPage}
                onPageChange={handlePageChange}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default PaginatedTable;
