import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { API_URL } from "../../../utils/constant";
import { Form } from "react-bootstrap";

const AddPatientModal = ({ show, onClose }) => {
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

    // Calculate age and validate when the Date of Birth changes
    if (name === "dob" && value) {
      const today = new Date();
      const birthDate = new Date(value);

      if (!isNaN(birthDate)) {
        let calculatedAge = today.getFullYear() - birthDate.getFullYear();
        const monthDifference = today.getMonth() - birthDate.getMonth();

        // Adjust for cases where the current month/day is before the birthday
        if (
          monthDifference < 0 ||
          (monthDifference === 0 && today.getDate() < birthDate.getDate())
        ) {
          calculatedAge--;
        }

        // Validate the calculated age
        if (calculatedAge >= 5 && calculatedAge <= 99) {
          // Update the age in the state and clear errors
          setFormData((prev) => ({
            ...prev,
            age: calculatedAge,
          }));
          setErrors((prev) => ({
            ...prev,
            age: "", // Clear age error
          }));
        } else {
          // Set error if age is not in range
          setErrors((prev) => ({
            ...prev,
            age: "Age must be between 5 and 99.",
          }));
          setFormData((prev) => ({
            ...prev,
            age: "", // Clear invalid age
          }));
        }
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    // if (errors.age) {
    //   toast.error("Age must be between 5 and 99.");
    //   return;
    // }

    try {
      const response = await axios.post(`${API_URL}member/store`, formData); // Replace '/api/endpoint' with your actual API URL
      console.log("response", response);
      if (response.data.status === 200) {
        toast.success(response?.data?.message);
        console.log("Form Data Submitted:", formData);
        //// onClose(); // Close the modal after submission
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
            <h5 className="modal-title">Add Member</h5>
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
                <label className="form-label">Full Name*</label>
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Enter Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  
                  
                />
                 <div class="valid-tooltip">Valid.</div>
                 <div class="invalid-tooltip">Please fill out this field.</div>
                {errors.name && (
                  <label className="text-danger fw-bold">
                    {errors.name}
                  </label>
                )}
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">Date Of Birth*</label>
                  <Form.Control
                    type="date"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    
                  />
                  {errors.dob && (
                    <label className="text-danger fw-bold">
                      {errors.dob}
                    </label>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Age*</label>
                  <Form.Control
                    type="number"
                    className={`form-control`}
                    name="age"
                    value={formData.age}
                    placeholder="Calculated Automatically"
                    
                    disabled
                  />
                  {errors.age && (
                    <label className="text-danger fw-bold">
                      {errors.age}
                    </label>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">Gender*</label>
                  <Form.Select
                    aria-label="relation"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    
                  >
                    <option value="male" selected>Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </Form.Select>
                  {errors.gender && (
                    <label className="text-danger fw-bold">
                      {errors.gender}
                    </label>
                  )}
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Relation*</label>
                  <Form.Select
                    aria-label="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    
                    name="relation"
                  >
                    <option value="" disabled>
                      Select Relation
                    </option>
                    <option value="Self">Self</option>
                    <option value="Spouse">Spouse</option>
                    <option value="Father">Father</option>
                    <option value="Mother">Mother</option>
                    <option value="Son">Son</option>
                    <option value="Daughter">Daughter</option>
                    <option value="Siblings">Siblings</option>
                    <option value="GrandParents">GrandParents</option>
                    <option value="In-Laws">In-Laws</option>
                    <option value="Other">Other</option>
                  </Form.Select>

                  {errors.relation && (
                    <label className="text-danger fw-bold">
                      {errors.relation}
                    </label>
                  )}
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  
                />
                {errors.phone && (
                  <label className="text-danger fw-bold">
                    {errors.phone}
                  </label>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Email ID</label>
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  
                />
                {errors.email && (
                  <label className="text-danger fw-bold">
                    {errors.email}
                  </label>
                )}
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Add Member
              </button>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;
