
import React, { useState } from 'react';
import { useCart } from './CartContext';
import AddressForm from '../AddressForm';
import PaymentPage from './payment';  
import OrderSummary from './OrderSummary';
import './CartStyles.css';
import { useNavigate } from 'react-router-dom'; 

const Cart = () => {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [showAddressForm, setShowAddressForm] = useState(false);
  const [address, setAddress] = useState(null);
  const [showPaymentPage, setShowPaymentPage] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false); 
  const navigate = useNavigate(); 

  const totalPrice = cartItems.reduce((acc, item) => acc + Number(item.price), 0);
  const deliveryFee = cartItems.length > 0 ? 43 : 0;
  const gstCharges = cartItems.length > 0 ? 62.29 : 0;
  const platformFee = cartItems.length > 0 ? 10 : 0;
  const totalAmount = totalPrice + deliveryFee + gstCharges + platformFee;

  const saveAddress = (addressDetails) => {
    setAddress(addressDetails);
  };

  const handleProceedToPay = () => {
    if (!address) {
      alert('Please add an address before proceeding to pay.');
    } else {
      setShowPaymentPage(true);
    }
  };

  const handlePaymentSuccess = async () => {
    setPaymentSuccess(true);
    clearCart();
    setShowPaymentPage(false);

    // Save order details to JSON server
    const orderDetails = { address, cartItems, totalAmount };
    await fetch('http://localhost:5000/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(orderDetails),
    });

    // Navigate to Order Summary
    navigate('/order-summary', { state: { cartItems, totalAmount } });
  };

  if (showPaymentPage) {
    return <PaymentPage addressDetails={address} onPaymentSuccess={handlePaymentSuccess} totalAmount={totalAmount} />;
  }

  return (
    <div className="cart-page-container">
      {cartItems.length === 0 && !paymentSuccess ? (
        <p className="empty-cart-message">Your cart is empty.</p>
      ) : (
        <>
          <div className="cart-left-section">
            <div className="cart-address-section">
              <h3>Add a delivery address</h3>
              <div className="cart-add-address">
                {address ? (
                  <div>
                    <p><strong>Name:</strong>{address.name}</p>
                    <p><strong>Phone:</strong> {address.phoneNumber}</p>
                    <p><strong>Address:</strong> {address.flatNo}, {address.street}, {address.city} - {address.postalCode}</p>
                    <p><strong>Landmark:</strong> {address.landmark || 'N/A'}</p>
                    <p><strong>Type:</strong> {address.addressType}</p>
                  </div>
                ) : (
                  <p>No address added yet.</p>
                )}
                <button className="add-new-address-btn" onClick={() => setShowAddressForm(true)}>
                  {address ? 'Change Address' : 'ADD NEW'}
                </button>
              </div>

              {showAddressForm && (
                <AddressForm
                  closeModal={() => setShowAddressForm(false)}
                  saveAddress={saveAddress}
                />
              )}
            </div>

            <div className="cart-items-section">
              <h3>Your Items</h3>
              <ul className="cart-items-list">
                {cartItems.map((item) => (
                  <li key={item.id} className="cart-item">
                    <img src={item.image} alt={item.name} className="cart-item-image" />
                    <div className="cart-item-details">
                      <h4>{item.name}</h4>
                      <p>{item.description}</p>
                      <p>Price: ₹{Number(item.price)}</p>
                      <button className="remove-item-btn" onClick={() => removeFromCart(item.id)}>
                        Remove
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="cart-right-section">
            <h3>Order Summary</h3>
            <p>Total Price: ₹{totalPrice}</p>
            <p>Delivery Fee: ₹{deliveryFee}</p>
            <p>GST Charges: ₹{gstCharges}</p>
            <p>Platform Fee: ₹{platformFee}</p>
            <h4>Total Amount: ₹{totalAmount}</h4>
            <button className="proceed-to-pay-btn" onClick={handleProceedToPay}>
              Proceed to Pay
            </button>
          </div>
        </>
      )}
      {paymentSuccess && <OrderSummary />}
    </div>
  );
};

export default Cart;
