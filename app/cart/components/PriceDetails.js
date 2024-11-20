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
            <span className="title-primary fw-semibold fs-5">₹{totalAmount}</span>
          </div>
          <div>Member Discount (10%): - ₹{discount}</div>
        </div>
        <div className="px-3 py-2 bg-light">Amount to be paid: ₹{amountToPay}</div>
      </div>
    </div>
  );
};

export default PriceDetails;
