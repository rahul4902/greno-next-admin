// components/PriceDetails.js
const PriceDetails = ({ totalAmount, discount, step }) => {
  const amountToPay = totalAmount - discount;

  return (
    <div className={`price-details ${step >= 2 ? "fixed" : ""}`}>
      <h3>Price Overview</h3>
      <div className="border rounded-4 overflow-hidden">
        <div className="p-3">
          <div className="d-flex justify-content-between">
            <span className="title-primary fs-6">Total Amount</span>
            <span className="title-primary fw-semibold fs-6">₹{totalAmount}</span>
          </div>
          <div className="d-flex justify-content-between">
            <span className="title-primary fs-6">Member Discount (10%)</span>
            <span className="title-primary fw-semibold fs-6">₹{discount}</span>
          </div>
        </div>
        <div className="px-3 py-2 bg-light d-flex justify-content-between">
          <span className="title-primary fs-5">Amount to be paid</span>
          <span className="title-primary fs-5"> ₹{amountToPay}</span>
        </div>
      </div>
    </div>
  );
};

export default PriceDetails;
