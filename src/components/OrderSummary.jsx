import React from 'react';
import { useLocation } from 'react-router-dom';  
import './OrderSummary.css'// To access the passed state

const OrderSummary = () => {
  const location = useLocation();
  const { cartItems, totalAmount } = location.state || { cartItems: [], totalAmount: 0 };

  return (
    <div className="order-summary-container">
      <h2>Order Summary</h2>
      <br></br>
      <ul className="order-items-list">
        {cartItems.map((item) => (
          <li key={item.id}>
            <h4>{item.name}  -  <span>₹{Number(item.price)}</span></h4>
            <br></br>
          </li>
        ))}
      </ul>
      <div className="order-total">
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>
      <p>Your order has been placed successfully!</p>
    </div>
  );
};

export default OrderSummary;

