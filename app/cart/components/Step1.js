import { CirclePlus, CircleX, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart, removeFromCart } from "../../../redux/cartSlice";

const Step1 = ({ onNext, onBack, onPatientSelection }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleRemoveCart = (item) => {
    dispatch(removeFromCart(item._id));
  };
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h6>Selected tests / packages</h6>
      <div className="row my-2">
        <div className="col-6">
          <button className="btn btn-md btn-outline-primary border rounded-4 w-100 d-flex align-items-center justify-content-center gap-1"> <Plus size={18}/> Add Test</button>
        </div>
        <div className="col-6">
        <button onClick={handleClearCart} className="btn btn-md btn-outline-primary border rounded-4 w-100  d-flex align-items-center justify-content-center gap-1"> <Trash2 size={18}/> Clear Cart</button>
        </div>
      </div>
      {cartItems.map((_t, _x) => {
        return (
          <div
            key={_x}
            className="cart-item d-flex align-items-center border rounded-4 p-2 mb-2"
          >
            <CircleX color="#12344d" onClick={() => handleRemoveCart(_t)} />
            <span className="title-primary">{_t.name}</span>
            <div>
              <span>₹{_t.amount}</span>
              <span>₹{_t.offer_price}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Step1;
