import { CircleCheck, CircleX, Tag } from "lucide-react";
import { useState } from "react";
import { Alert, Button, Form, Modal, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { clearCoupon, updateCouponState, verifyCoupon } from "../../../redux/cartSlice";
import axios from "axios";
import apiClient from "../../../services/apiClient";
import { toast } from "react-toastify";

const PriceDetails = () => {
  const [inputCoupon, setInputCoupon] = useState("");
  const [isValid, setIsValid] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const { getCartTotalPrice, getCartOfferPrice, coupon, discountAmount, cartPriceToPay } = useSelector(
    (state) => state.cart
  );
  const { cartStep } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setIsValid(null);
    try {
      const response = await apiClient.post("/api/coupon/verify", {
        couponCode: inputCoupon,
        cartTotal: getCartTotalPrice
      });
      console.log("response", response);
      if (response.data.status == 400) {
        setIsValid(false);
        setMessage(response.data.message);
      } else if (response.data.status == 200) {
        setIsValid(true);
        setMessage(response.data.message);
        dispatch(
          updateCouponState({
            coupon: response?.data?.data?.couponInfo || null,
            discountAmount: isNaN(response?.data?.data?.discountAmount)
              ? 0
              : parseInt(response?.data?.data?.discountAmount),
          })
        );
        return;
      } else {
        toast.error(response.data.message || "Something went wrong.");
      }
      
      isValid(false)
      dispatch(updateCouponState({ coupon: null, discountAmount: 0 }));
    } catch (error) {
      dispatch(updateCouponState({ coupon: null, discountAmount: 0 }));
    } finally {
      setLoading(false);
    }
  };

  // Simulated coupon verification function
  // const verifyCoupon = async (code) => {
  //   await new Promise(resolve => setTimeout(resolve, 1000)); // Simulating API delay
  //   if (code === 'VALID') {
  //     return { isValid: true, message: 'Coupon applied successfully!' };
  //   } else {
  //     return { isValid: false, message: 'Invalid coupon code. Please try again.' };
  //   }
  // };
  return (
    <>
      <div className={`price-details ${cartStep >= 2 ? "fixed" : ""}`}>
        <h3>Price Overview</h3>
        <div className="border rounded-4 overflow-hidden">
          <div className="p-3">
            <div className="d-flex justify-content-between mb-2">
              <span className="title-primary fs-6">Total Price</span>
              <span className="title-primary fw-semibold fs-6 ">
                ₹{getCartTotalPrice}{" "}
                <span className="small  text-decoration-line-through text-muted">
                  ₹{getCartOfferPrice}
                </span>
              </span>
            </div>
            <div className="d-flex justify-content-between mb-2">
              <span className="title-primary text-success fs-6">
                Total Discounts
              </span>
              <span className="title-primary fw-semibold fs-6 text-success">
                ₹{discountAmount}
              </span>
            </div>
          </div>
          <div className="px-3 py-2 bg-light d-flex justify-content-between">
            <span className="title-primary fs-5">Amount to be paid</span>
            <span className="title-primary fs-5"> ₹{cartPriceToPay}</span>
          </div>
        </div>
      </div>

      {cartStep === 4 && <div className="border rounded-4 overflow-hidden card p-3 my-3">
        {!coupon ? (
          <>
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="couponCode">
                <Form.Label>
                  <h5 className="primary-title">
                    <Tag /> Apply Coupon Code
                  </h5>
                </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter coupon code"
                  value={inputCoupon}
                  onChange={(e) => setInputCoupon(e.target.value)}
                  className="shadcn-input"
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                disabled={loading}
                className="shadcn-button w-100"
              >
                {loading ? (
                  <>
                    <Spinner animation="border" role="status" size="sm">
                      <span className="visually-hidden">Loading...</span>
                    </Spinner>
                  </>
                ) : (
                  <>Apply Coupon</>
                )}
              </Button>
            </Form>
            {isValid !== null && (
              <Alert
                variant={isValid ? "success" : "danger"}
                className="shadcn-alert mt-3"
              >
                {isValid ? (
                  <CircleCheck className="me-2" />
                ) : (
                  <CircleX className="me-2" />
                )}
                {message}
              </Alert>
            )}
          </>
        ) : (
          <div className="coupon-section">
            <h2 className="title d-flex justify-content-between">Applied Coupon <span className="fw-bold text-danger fs-6" role="button" onClick={()=>{dispatch(clearCoupon()); setInputCoupon("");setMessage("");setIsValid(null)}}>remove</span></h2>
            <div className="coupon-wrapper">
              <input
                type="text"
                className="coupon-input"
                value={coupon?.code}
                readOnly
              />
              <span className="coupon-status">COUPON APPLIED</span>
            </div>
          </div>
        )}
      </div>}
      
    </>
  );
};

export default PriceDetails;
