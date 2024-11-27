import React, { useState } from "react";
import { toast } from "react-toastify";

const AddPatientModal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    dob: "",
    age: "", // Calculated age
    gender: "Male",
    relation: "",
    phone: "",
    email: "",
  });

  const [errors, setErrors] = useState({
    age: "", // Error for age validation
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Update form data for all fields
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

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

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if there are any validation errors
    if (errors.age) {
      toast.error("Age must be between 5 and 99.");
      return;
    }

    console.log("Form Data Submitted:", formData);
    onClose(); // Close the modal after submission
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
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Full Name*</label>
                <input
                  type="text"
                  className="form-control"
                  name="fullName"
                  placeholder="Enter Full Name"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">Date Of Birth*</label>
                  <input
                    type="date"
                    className="form-control"
                    name="dob"
                    value={formData.dob}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Age*</label>
                  <input
                    type="number"
                    className={`form-control ${
                      errors.age ? "is-invalid" : ""
                    }`}
                    name="age"
                    value={formData.age}
                    placeholder="Calculated Automatically"
                    disabled
                  />
                  {errors.age && (
                    <div className="invalid-feedback">{errors.age}</div>
                  )}
                </div>
              </div>
              <div className="row">
                <div className="col-6 mb-3">
                  <label className="form-label">Gender*</label>
                  <select
                    className="form-select"
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    required
                  >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="col-6 mb-3">
                  <label className="form-label">Relation*</label>
                  <select
                    className="form-select"
                    name="relation"
                    value={formData.relation}
                    onChange={handleChange}
                    required
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
                  </select>
                </div>
              </div>
              <div className="mb-3">
                <label className="form-label">Phone Number</label>
                <input
                  type="text"
                  className="form-control"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email ID</label>
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email Address"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <button type="submit" className="btn btn-primary w-100">
                Add Member
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPatientModal;
