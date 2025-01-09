import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../../utils/constant";
import apiClient from "../../../services/apiClient";
import { Form } from "react-bootstrap";
import { useSelector } from "react-redux";

const AddAddressModal = ({ show, onClose, getPatientsList }) => {
  const [formData, setFormData] = useState({
    name: "",
    dob: "",
    age: "", // Calculated age
    gender: "male",
    relation: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({});
  const { userToken } = useSelector((state) => state.auth);
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data for all fields
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await apiClient.post(
        `${API_URL}api/member/store`,
        formData
      );

      if (response.data.status === 200) {
        toast.success(response?.data?.message);
        getPatientsList();
        onClose(false);
        setFormData({
          name: "",
          dob: "",
          age: "", // Calculated age
          gender: "male",
          relation: "",
          phone: "",
          email: "",
        });
      } else if (response.data.status === 422) {
        toast.error(response?.data?.message);
        setErrors(response.data.errors);
        console.log("response.data.errors", response.data.errors);
      } else {
        toast.error("Failed to save data. Please try again.");
      }
    } catch (error) {
      console.error("Error saving data:", error);
      toast.error(
        error.response?.data?.message || "An unexpected error occurred."
      );
    }
  };

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: show ? "rgba(0,0,0,0.5)" : "transparent" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add Address</h5>
            <button
              type="button"
              className="btn-close"
              onClick={onClose}
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <Form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Address 1*</label>
                <Form.Control
                  type="text"
                  name="address1"
                  placeholder="Enter Address 1"
                  value={formData.address1}
                  onChange={handleChange}
                />
                {errors.address1 && (
                  <label className="text-danger fw-bold">
                    {errors.address1}
                  </label>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Address 2</label>
                <Form.Control
                  type="text"
                  name="address2"
                  placeholder="Enter Address 2"
                  value={formData.address2}
                  onChange={handleChange}
                />
                {errors.address2 && (
                  <label className="text-danger fw-bold">
                    {errors.address2}
                  </label>
                )}
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">House Number*</label>
                  <Form.Control
                    type="text"
                    name="houseNo"
                    placeholder="Enter House Number"
                    value={formData.houseNo}
                    onChange={handleChange}
                  />
                  {errors.houseNo && (
                    <label className="text-danger fw-bold">
                      {errors.houseNo}
                    </label>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Locality</label>
                  <Form.Control
                    type="text"
                    name="locality"
                    placeholder="Enter Locality"
                    value={formData.locality}
                    onChange={handleChange}
                  />
                  {errors.locality && (
                    <label className="text-danger fw-bold">
                      {errors.locality}
                    </label>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">City*</label>
                  <Form.Control
                    type="text"
                    name="city"
                    placeholder="Enter City"
                    value={formData.city}
                    onChange={handleChange}
                  />
                  {errors.city && (
                    <label className="text-danger fw-bold">{errors.city}</label>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">State*</label>
                  <Form.Control
                    type="text"
                    name="state"
                    placeholder="Enter State"
                    value={formData.state}
                    onChange={handleChange}
                  />
                  {errors.state && (
                    <label className="text-danger fw-bold">
                      {errors.state}
                    </label>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">Landmark</label>
                  <Form.Control
                    type="text"
                    name="landmark"
                    placeholder="Enter Landmark"
                    value={formData.landmark}
                    onChange={handleChange}
                  />
                  {errors.landmark && (
                    <label className="text-danger fw-bold">
                      {errors.landmark}
                    </label>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Pincode*</label>
                  <Form.Control
                    type="text"
                    name="pincode"
                    placeholder="Enter Pincode"
                    value={formData.pincode}
                    onChange={handleChange}
                  />
                  {errors.pincode && (
                    <label className="text-danger fw-bold">
                      {errors.pincode}
                    </label>
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Submit Address
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal;
