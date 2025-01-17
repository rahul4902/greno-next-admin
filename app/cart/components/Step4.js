import { useState } from "react";

const Step2 = ({ onNext, onBack, onPatientSelection }) => {
  const [paymentMethod, setPaymentMethod] = useState("online");

  return (
    <div className="container">
      <div className="payment-wrapper">
        <h2 className="mb-4">Select Payment Option</h2>

        <div className="payment-options">
          {/* Online Payment Option */}
          <label
            className={`payment-option ${
              paymentMethod === "online" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="online"
              checked={paymentMethod === "online"}
              onChange={(e) => setPaymentMethod("online")}
              className="form-check-input"
            />
            <div className="payment-content">
              <span className="payment-label">Pay Online</span>              
            </div>
          </label>

          {/* Cash/Card Payment Option */}
          <label
            className={`payment-option ${
              paymentMethod === "cash" ? "selected" : ""
            }`}
          >
            <input
              type="radio"
              name="paymentMethod"
              value="cash"
              checked={paymentMethod === "cash"}
              onChange={(e) => setPaymentMethod("cash")}
              className="form-check-input"
            />
            <div className="payment-content">
              <span className="payment-label">
                Pay by Cash/Card during sample collection
              </span>
            </div>
          </label>
        </div>
      </div>
    </div>
  );
};

export default Step2;
