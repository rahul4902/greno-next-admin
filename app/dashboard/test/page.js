"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../../components/Pagination"; // Assuming you have this component
import { Fragment } from "react";
import Link from "next/link";
import { Container, Col, Row } from "react-bootstrap";
import EditIcon from "svg/EditIcon";
import DeleteIcon from "svg/DeleteIcon";
import apiService from "services/apiService";
import { API_URL } from "utils/constant";
import { toast } from "react-toastify";

const PaginatedTable = () => {
  const [currentPage, setCurrentPage] = useState(1); // Default page 1
  const [itemsPerPage, setItemsPerPage] = useState(10); // Default items per page
  const [totalItems, setTotalItems] = useState(0);
  const [tests, setTests] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("Fetching data..."); // Debug log
        const response = await axios.get("http://localhost:5000/test/list", {
          params: {
            page: currentPage,
            limit: itemsPerPage,
          },
        });
        console.log("Data fetched:", response.data.data); // Debug log
        setTests(response.data.data);
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

  const deleteTest = async (_id) => {
    try {
      const response = await axios.delete(API_URL + 'test/'+_id);
      if(response?.data?.status == 200){
        setTests(prevTests => prevTests.filter(test => test._id !== _id));
        toast.success(response.data.message);
      }else{
        toast.error(response.data.message);
      }
    } catch (error) {
      console.error('API Error:', error.message);
    }
  }

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
                  <h3 className="mb-0  text-white">Test</h3>
                </div>
                <div>
                  <Link href="/dashboard/test/create" className="btn btn-white">
                    Create New Test
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
                    <th>Amount</th>
                    <th>Category</th>
                    <th>Status</th>
                    <th>Type</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tests.length > 0 ? (
                    <></>
                  ) : (
                    <tr>
                      <td colSpan={6}>No Record Found...</td>
                    </tr>
                  )}
                  {tests?.map((test, index) => (
                    <tr key={index}>
                      <td>
                        <div className="d-flex align-items-center">
                          <div className="ms-3 lh-1">
                            <h5 className="mb-1">
                              <a href="#" className="text-inherit">
                                {test.name}(<b className="text-primary-custom">{test.code}</b>)
                              </a>
                            </h5>
                          </div>
                        </div>
                      </td>
                      <td><b><del className="fs-4">₹{test.offer_price}</del></b><small>{test.amount}</small></td>
                      <td>{test?.category?.name}</td>
                      <td><span className={`badge-${test?.status?'success':'danger'}-soft badge bg-none`}>{test?.status?'Active':'InActive'}</span></td>
                      <td><span className={`badge-${test?.package_or_test == 'test'?'success':'danger'}-soft badge bg-none text-capitalize`}>{test?.package_or_test}</span></td>
                      <td><Link className="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip" href={`/dashboard/test/create?_id=${test?._id}`}><DeleteIcon /></Link>
                          <button className="btn btn-ghost btn-icon btn-sm rounded-circle texttooltip" type="button" onClick={ ()=>{ deleteTest(test._id) } }><EditIcon /></button></td>
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
