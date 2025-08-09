import React from "react";
import { useCart } from "../context/components/CartContext";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Payment = () => {
  const { cartItems, completePayment } = useCart();
  const navigate = useNavigate();

  const handlePayment = () => {
    completePayment(); // Clear cart and save payment history
    alert("Payment Successful!");
    navigate("orders"); // Use relative path for nested route
  };

  return (
    <div className="payment-container">
      <h2>Payment</h2>
      {cartItems.length === 0 ? (
        <p>No items to checkout</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h4>{item.name}</h4>
              <p>${item.price}</p>
            </div>
          ))}
          <button onClick={handlePayment}>Pay Now</button>
        </>
      )}
    </div>
  );
};

export default Payment;