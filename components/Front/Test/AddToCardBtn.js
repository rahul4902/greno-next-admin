import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../../redux/cartSlice";
import Link from "next/link"; // Assuming you want to link to the cart page
import { CheckIcon, CircleCheckBig } from "lucide-react";
// import CheckIcon from "../../../svg/CheckIcon"

const AddToCartBtn = ({ test }) => {
  const dispatch = useDispatch();

  // Get the cart items from the Redux store
  const cartItems = useSelector((state) => state.cart.items);

  // Check if the item is already in the cart
  const isInCart = cartItems.some((item) => item._id === test?._id);

  const handleAddToCart = () => {
    // dispatch(
    //   addToCart({
    //     _id: test?._id,
    //     name: test?.name,
    //     package_or_test: test?.package_or_test,
    //     slug: test?.slug,
    //     amount: test?.amount,
    //   })
    // );
  };

  return (
    <>
      {isInCart ? (
        <Link href="/cart">
          <button className="btn btn-outline-primary"><CircleCheckBig /> View Cart</button>
        </Link>
      ) : (
        <button className="btn btn-outline-primary" onClick={handleAddToCart}>
          Book
        </button>
      )}
    </>
  );
};

export default AddToCartBtn;
