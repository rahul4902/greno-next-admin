import React from "react";

const EmptyCart = () => {
  return (
    <div className="empty-cart-container rounded">
      <div className="empty-cart-content">
        <img src="/images/cart/empty.png" alt="Empty Cart" className="cart-icon" />
        <h2 className="mb-3">Your Cart is empty</h2>
        <a href="/search" className="btn btn-lg btn-primary">Explore Tests</a>
      </div>
    </div>
  );
};

export default EmptyCart;
