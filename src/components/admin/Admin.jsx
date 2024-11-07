
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, Legend, ResponsiveContainer } from 'recharts';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import './Admin.css';

const AdminDashboard = ({ loggedInUser }) => {
  const [bookings, setBookings] = useState([]);
  const [scheduler, setScheduler] = useState([]);
  const [chartData, setChartData] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/orders`);
        setBookings(response.data || []);
        const res = await axios.get(`http://localhost:5000/scheduler`);
        setScheduler(res.data || []);

        const deliveryDates = res.data.reduce((acc, cur) => {
          const date = new Date(cur.deliveryDate).toLocaleDateString();
          acc[date] = (acc[date] || 0) + 1;
          return acc;
        }, {});

        const formattedData = Object.keys(deliveryDates).map(date => ({
          deliveryDate: date,
          orders: deliveryDates[date]
        }));

        setChartData(formattedData);
      } catch (error) {
        console.error("Error fetching booking or scheduler details:", error);
      }
    };

    fetchBookings();
  }, []);

  if (!loggedInUser) {
    return <p>Loading user data...</p>;
  }

  if (loggedInUser.role !== 'admin') {
    return <p>You do not have permission to view this page.</p>;
  }

  return (
    <div className="admin-container">
      <h1 className="admin-title">Welcome, {loggedInUser.name}</h1>
     

      {/* Button to navigate to the RestaurantManager */}
      <button className="manage-restaurants-btn" onClick={() => navigate('/manage-restaurants')}>
        Manage Restaurants
      </button>

      <h2 className="admin-subtitle">Orders Per Delivery Date</h2>
      <div style={{ width: '100%', height: 400 }}>
        <ResponsiveContainer>
          <BarChart data={chartData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="deliveryDate" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="orders" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <h2 className="admin-subtitle">Orders</h2>
      <h2>Order Details</h2>
      {bookings.length === 0 ? (
        <p>No Orders found.</p>
      ) : (
        <ul className="admin-list">
          {bookings.map((booking, index) => (
            <li className="admin-list-item" key={index}>
              <p className="admin-text"><strong className="admin-strong">Order ID:</strong> {booking.id}</p>
              <p className="admin-text"><strong className="admin-strong">Name:</strong> {booking.address.Name}</p>
              <p className="admin-text"><strong className="admin-strong">Phone Number:</strong> {booking.address.phoneNumber}</p>
              <p className="admin-text"><strong className="admin-strong">Address:</strong> {`${booking.address.flatNo}, ${booking.address.street}, ${booking.address.city}, ${booking.address.postalCode}`}</p>
              {booking.cartItems && booking.cartItems.length > 0 && (
                <ul>
                  {booking.cartItems.map((item, idx) => (
                    <li key={idx}>
                      <p className="admin-text"><strong className="admin-strong">Dish:</strong> {item.name}</p>
                      <p><img className="admin-image" src={item.image} alt={item.name} /></p>
                      <p className="admin-text"><strong className="admin-strong">Price:</strong> ₹{item.price}</p>
                      <p className="admin-text"><strong className="admin-strong">Description:</strong> {item.description}</p>
                    </li>
                  ))}
                </ul>
              )}
              <p className="admin-text"><strong className="admin-strong">Total Price:</strong> ₹{booking.totalAmount}</p>
              <hr className="admin-divider" />
            </li>
          ))}
        </ul>
      )}

      <h2 className="admin-subtitle">Scheduler Details</h2>
      {scheduler.length === 0 ? (
        <p>No Scheduler found.</p>
      ) : (
        <ul className="admin-list">
          {scheduler.map((schedule, index) => (
            <li className="admin-list-item" key={index}>
              <p className="admin-text"><strong className="admin-strong">Schedule ID:</strong> {schedule.id}</p>
              <p className="admin-text"><strong className="admin-strong">Schedule Type:</strong> {schedule.scheduleType}</p>
              <p className="admin-text"><strong className="admin-strong">Delivery Date:</strong> {new Date(schedule.deliveryDate).toLocaleString()}</p>
              <p className="admin-text"><strong className="admin-strong">Delivery Time:</strong> {new Date(schedule.deliveryTime).toLocaleString()}</p>
              <p className="admin-text"><strong className="admin-strong">Payment Method:</strong> {schedule.paymentMethod}</p>
              <p className="admin-text"><strong className="admin-strong">Address:</strong> {`${schedule.address.flatNo}, ${schedule.address.street}, ${schedule.address.city}, ${schedule.address.postalCode}`}</p>

              {schedule.items && schedule.items.length > 0 && (
                <ul>
                  {schedule.items.map((item, idx) => (
                    <li key={idx}>
                      <p className="admin-text"><strong className="admin-strong">Item:</strong> {item.name}</p>
                      <p><img className="admin-image" src={item.image} alt={item.name} /></p>
                      <p className="admin-text"><strong className="admin-strong">Price:</strong> ₹{item.price}</p>
                      <p className="admin-text"><strong className="admin-strong">Description:</strong> {item.description}</p>
                    </li>
                  ))}
                </ul>
              )}
              <hr className="admin-divider" />
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AdminDashboard;


