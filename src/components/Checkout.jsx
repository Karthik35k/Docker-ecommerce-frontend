import React, { useState } from "react";
import { processPayment } from "../context/Service/paymentService";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!cardNumber || !cvv) {
      alert("Please enter card number and CVV.");
      return;
    }
    const success = await processPayment({ cardNumber, cvv });
    if (success) {
      alert("Payment Successful!");
      navigate("/");
    } else {
      alert("Payment Failed. Try again.");
    }
  };

  return (
    <div className="checkout-container">
      <h2>Checkout</h2>
      <input
        type="number"
        placeholder="Card Number"
        value={cardNumber}
        onChange={(e) => setCardNumber(e.target.value)}
      />
      <input
        type="number"
        placeholder="CVV"
        value={cvv}
        onChange={(e) => setCvv(e.target.value)}
      />
      <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
};