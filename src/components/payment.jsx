
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './payment.css';

const PaymentPage = ({ addressDetails, onPaymentSuccess, totalAmount }) => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');
  const [cardDetails, setCardDetails] = useState({ number: '', name: '', expiry: '', cvv: '' });
  const [upiId, setUpiId] = useState('');
  const navigate = useNavigate();  // For navigation

  const handlePaymentSelection = (method) => {
    setSelectedPaymentMethod(method);
  };

  const handleUPIChange = (e) => {
    setUpiId(e.target.value);
  };

  const handleCardChange = (e) => {
    const { name, value } = e.target;
    setCardDetails({ ...cardDetails, [name]: value });
  };

  const handlePayment = () => {
    if (selectedPaymentMethod === 'upi' && !upiId) {
      alert('Please enter a UPI ID');
      return;
    }

    if (selectedPaymentMethod === 'card' && (!cardDetails.number || !cardDetails.name || !cardDetails.expiry || !cardDetails.cvv)) {
      alert('Please enter all card details');
      return;
    }

    if (!selectedPaymentMethod) {
      alert('Please select a payment method');
      return;
    }

    alert('Payment successful');
    onPaymentSuccess();  // Call the parent function to handle post-payment logic
  };

  return (
    <div className="payment-page-container">
      <div className="address-summary">
        <h4>Delivering to:</h4>
        <p>{addressDetails.flatNo}, {addressDetails.street}</p>
        <p>{addressDetails.city} - {addressDetails.postalCode}</p>
        <p>Landmark: {addressDetails.landmark || 'N/A'}</p>
        <p>Phone: {addressDetails.phoneNumber}</p>
      </div>
      <h3>Payment Options</h3>

      <div className="payment-methods">
        <button onClick={() => handlePaymentSelection('upi')}>Pay via UPI</button>
        <button onClick={() => handlePaymentSelection('card')}>Pay via Card</button>
        <button onClick={() => handlePaymentSelection('cod')}>Cash on Delivery</button>
      </div>

      {selectedPaymentMethod === 'upi' && (
        <div className="upi-payment-section">
          <input
            type="text"
            placeholder="Enter UPI ID"
            value={upiId}
            onChange={handleUPIChange}
          />
        </div>
      )}

      {selectedPaymentMethod === 'card' && (
        <div className="card-payment-section">
          <input
            type="text"
            name="number"
            placeholder="Card Number"
            value={cardDetails.number}
            onChange={handleCardChange}
          />
          <input
            type="text"
            name="name"
            placeholder="Name on Card"
            value={cardDetails.name}
            onChange={handleCardChange}
          />
          <input
            type="text"
            name="expiry"
            placeholder="Expiry Date"
            value={cardDetails.expiry}
            onChange={handleCardChange}
          />
          <input
            type="text"
            name="cvv"
            placeholder="CVV"
            value={cardDetails.cvv}
            onChange={handleCardChange}
          />
        </div>
      )}

      <div className="payment-total">
        <h3>Total Amount: ₹{totalAmount}</h3>
      </div>

      <button className="pay-now-btn" onClick={handlePayment}>
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
