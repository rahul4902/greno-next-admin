import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../../utils/constant";
import apiClient from "../../../services/apiClient";
import { Form } from "react-bootstrap";

const AddAddressModal = ({ editAddressData, editMode, show, onClose, getAddressList }) => {
  const [formData, setFormData] = useState({
    address1: editAddressData?.address1,
    address2: editAddressData?.address1,
    houseNo: "", // Calculated age
    locality: "",
    city: "",
    state: "",
    landmark: "",
    pincode: "",
    isBillingAddress: false,
    isShippingAddress: false,
    isPrimary: false,
    addressType: "home",
  });

  const [errors, setErrors] = useState({});
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    // Update form data for all fields
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
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
      var response;
      if(!editMode){
         response = await apiClient.post(`${API_URL}api/address/store`,
          formData
        );
      }else{
         response = await apiClient.put(`${API_URL}api/address/update/${editAddressData?._id}`,
          formData
        );
      }
      

      if (response.data.status === 200) {
        toast.success(response?.data?.message);
        getAddressList();
        onClose(false);
        setFormData({
          address1: editAddressData?.address1,
          address2: editAddressData?.address1,
          houseNo: "", // Calculated age
          locality: "",
          city: "",
          state: "",
          landmark: "",
          pincode: "",
          isBillingAddress: false,
          isShippingAddress: false,
          isPrimary: false,
          addressType: "home",
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

  useEffect(() => {
    setFormData(editAddressData);
  }, [editAddressData])
  

  return (
    <div
      className={`modal fade ${show ? "show d-block" : ""}`}
      tabIndex="-1"
      style={{ backgroundColor: show ? "rgba(0,0,0,0.5)" : "transparent" }}
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">{editMode?'Edit':'Add'} Address</h5>
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
                <div className="col-12 mb-3">
                  <Form.Check
                    type="checkbox"
                    name="isPrimary"
                    label="Make this address primary"
                    checked={formData.isPrimary}
                    onChange={handleChange}
                  />
                  {errors.isPrimary && (
                    <label className="text-danger fw-bold">
                      {errors.isPrimary}
                    </label>
                  )}
                </div>
              </div>
              <button type="submit" className="btn btn-primary w-100">
              {editMode?'Update':'Submit'} Address
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddAddressModal;
