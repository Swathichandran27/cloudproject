
import React, { useEffect, useState } from "react";
import axios from "axios";
import './Ord.css';  // Ensure the path to the CSS is correct

const BookingDetails = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orders`);
        setBookings(response.data);
      } catch (error) {
        console.error("Error fetching booking details:", error);
      }
    };

    fetchBookings();
  }, []);

  return (
    <div className="booking-details-container">
      <h2>Order Details</h2>
      {bookings.length === 0 ? (
        <p>No Orders found.</p>
      ) : (
        <ul>
          {bookings.map((booking, index) => (
            <li key={index}>
              {booking.cartItems && booking.cartItems.length > 0 && (
                <ul>
                  {booking.cartItems.map((item, idx) => (
                    <li key={idx}>
                      <p><strong>Dish:</strong> </p>
                      <p><img src={item.image} alt=''/></p>
                      <p>{item.name}</p>
                      <br></br>
                      <p><strong>Price:</strong> ₹{item.price}</p>
                    </li>
                  ))}
                </ul>
              )}
              <p><strong>Total Price:</strong> ₹{booking.totalAmount}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookingDetails;


