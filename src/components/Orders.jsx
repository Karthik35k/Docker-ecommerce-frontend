import React from "react";
import { useCart } from "../context/components/CartContext";
import "../style.css";

const Orders = () => {
  const { paymentHistory } = useCart();

  return (
    <div className="history-container">
      <h2>Orders</h2>
      {paymentHistory.length === 0 ? (
        <p>No past orders</p>
      ) : (
        <ul>
          {paymentHistory.map((transaction) => (
            <li key={transaction.id}>
              <p><strong>Transaction Date:</strong> {transaction.date}</p>
              <ul>
                {transaction.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - ${item.price}
                  </li>
                ))}
              </ul>
              <hr />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};    

export default Orders;  