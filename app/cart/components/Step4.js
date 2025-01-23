import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedPaymentMethod } from "../../../redux/cartSlice";

const Step2 = ({ onNext, onBack, onPatientSelection }) => {
  const dispatch = useDispatch();  
  const { selectedPaymentMethod} = useSelector((state)=>state.cart);
  return (
    <div className="container">
      <div className="payment-wrapper">
        <h2 className="mb-4">Select Payment Option</h2>

        <div className="payment-options">
          {/* Razorpay Payment Option */}
          <label
            className={`payment-option ${
              selectedPaymentMethod === "Razorpay" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="Razorpay"
              checked={selectedPaymentMethod === "Razorpay"}
              onChange={ ()=>{ dispatch(setSelectedPaymentMethod("Razorpay")); }}
              className="form-check-input"
            />
            <div className="payment-content">
              <span className="payment-label">Pay With Razorpay</span>              
            </div>
          </label>

          {/* COD/Card Payment Option */}
          <label
            className={`payment-option ${
              selectedPaymentMethod === "COD" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="COD"
              checked={selectedPaymentMethod === "COD"}
              onChange={()=>{ dispatch(setSelectedPaymentMethod("COD")); }}
              className="form-check-input"
            />
            <div className="payment-content">
              <span className="payment-label">
                Cash On Delivery
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step2;
