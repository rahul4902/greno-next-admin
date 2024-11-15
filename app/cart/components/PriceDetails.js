// components/PriceDetails.js
const PriceDetails = ({ totalAmount, discount, step }) => {
    const amountToPay = totalAmount - discount;
  
    return (
      <div className={`price-details ${step >= 2 ? 'fixed' : ''}`}>
        <h3>Price Details</h3>
        <div>Total Amount: ₹{totalAmount}</div>
        <div>Member Discount (10%): - ₹{discount}</div>
        <div>Amount to be paid: ₹{amountToPay}</div>
      </div>
    );
  };
  
  export default PriceDetails;
  