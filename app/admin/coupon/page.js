"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

import { Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row, Image } from "react-bootstrap";
import { API_URL, productDefaultImage } from "utils/constant";
import { toast } from "react-toastify";
import Pagination from "components/Pagination";
import { Calendar, CheckCircle, DollarSign, Edit, Percent, Trash2, XCircle } from "lucide-react";

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1); // Default page 1
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [totalItems, setTotalItems] = useState(0);
  const [coupons, setCoupons] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(API_URL + "api/coupon/list", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        console.log("Data fetched:", response.data.data); // Debug log
        setCoupons(response.data.data);
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

  const deleteCoupon = async (_id) => {
    try {
      const isConfirmed = window.confirm(
        "Are you sure you want to delete this coupon?"
      );

      if (!isConfirmed) {
        return; // Exit the function if the user cancels
      }
      const response = await axios.delete(API_URL + "api/coupon/" + _id);
      if (response?.data?.status == 200) {
        setCoupons((prevTests) =>
          prevTests.filter((coupon) => coupon._id !== _id)
        );
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
                  <h3 className="mb-0  text-white">Coupon</h3>
                </div>
                <div>
                  <Link href="/admin/coupon/form" className="btn btn-white">
                    Create Coupon
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
                    <th>Code</th>
                    <th>Type</th>
                    <th>Value</th>
                    <th>Min Amount</th>
                    <th>Max Amount</th>
                    <th>Up To</th>
                    <th>Expiry Date</th>
                    <th>Status</th>
                    <th>Usage Count</th>
                    <th>Max Users</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {coupons.length > 0 ? (
                    coupons.map((coupon, index) => (
                      <tr key={index}>
                        {/* Coupon Code */}
                        <td>
                          <span className="badge badge-primary-soft">
                            {coupon.code}
                          </span>
                        </td>

                        {/* Coupon Type */}
                        <td>
                          <span
                            className={`badge badge-${
                              coupon.type === "flat" ? "primary-soft" : "warning-soft"
                            }`}
                          >
                            {coupon.type === "flat" ? (
                              <>
                                Flat <DollarSign size={12} className="ms-1" />
                              </>
                            ) : (
                              <>
                                Percentage{" "}
                                <Percent size={12} className="ms-1" />
                              </>
                            )}
                          </span>
                        </td>

                        {/* Value */}
                        <td>
                          <strong>
                            {coupon.value}
                            {coupon.type === "percentage" ? "%" : ""}
                          </strong>
                        </td>

                        {/* Min Amount */}
                        <td>{coupon.minAmount || "-"}</td>

                        {/* Max Amount */}
                        <td>{coupon.maxAmount || "-"}</td>

                        {/* Up To */}
                        <td>{coupon.upTo || "-"}</td>

                        {/* Expiry Date */}
                        <td>
                          {coupon.expiryDate ? (
                            <span>
                              {new Date(coupon.expiryDate).toLocaleDateString()}{" "}
                              <Calendar size={16} className="ms-1" />
                            </span>
                          ) : (
                            "No Expiry"
                          )}
                        </td>

                        {/* Status */}
                        <td>
                          <span
                            className={`badge badge-${
                              coupon.status ? "success" : "danger"
                            }-soft`}
                          >
                            {coupon.status ? (
                              <>
                                Active{" "}
                                <CheckCircle size={16} className="ms-1" />
                              </>
                            ) : (
                              <>
                                Inactive <XCircle size={16} className="ms-1" />
                              </>
                            )}
                          </span>
                        </td>

                        {/* Usage Count */}
                        <td>{coupon.usageCount}</td>

                        {/* Max Users */}
                        <td>{coupon.maxUsers || "Unlimited"}</td>

                        {/* Actions */}
                        <td>
                          <Link
                            className="btn btn-ghost btn-icon btn-sm rounded-circle"
                            href={`/admin/coupon/form?_id=${coupon._id}`}
                            title="Edit Coupon"
                          >
                            <Edit size={16} />
                          </Link>
                          <button
                            className="btn btn-ghost btn-icon btn-sm rounded-circle"
                            type="button"
                            onClick={() => deleteCoupon(coupon._id)}
                            title="Delete Coupon"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={11} className="text-center">
                        No Record Found...
                      </td>
                    </tr>
                  )}
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
