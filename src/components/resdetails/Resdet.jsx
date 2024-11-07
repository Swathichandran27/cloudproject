import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import { useCart } from '../CartContext';// Import useCart hook
import './resdet.css';

const RestaurantDetails = () => {
  const { id } = useParams(); // Get the restaurant ID from the URL
  const [restaurant, setRestaurant] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { addToCart } = useCart(); // Get addToCart function from CartContext
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRestaurantDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/res`);
        const foundRestaurant = response.data.find((item) => String(item.id) === String(id));
        
        if (foundRestaurant) {
          setRestaurant(foundRestaurant);
        } else {
          setError('Restaurant not found');
        }
      } catch (err) {
        setError(err.message || 'Error fetching data');
      } finally {
        setLoading(false);
      }
    };

    fetchRestaurantDetails();
  }, [id]);

  const handleAddToCart = (menuItem) => {
    addToCart(menuItem); // Add item to the cart
    alert(`${menuItem.name} added to cart!`);
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!restaurant) return <div>No details found for this restaurant</div>;

  return (
    <div className='color'>
      <div className="restaurant-details">
        <h1>{restaurant.name}</h1>
        <img
          src={restaurant.image || 'https://via.placeholder.com/300?text=No+Image+Available'}
          alt={restaurant.name}
        />
        <h2 style={{color: "white"}}>Menu Items:</h2>
        {restaurant.menuItems && restaurant.menuItems.length > 0 ? (
          <ul className="menu-item-list">
            {restaurant.menuItems.map((item) => (
              <li key={item.id}>
                <img
                  src={item.image || 'https://via.placeholder.com/100'}
                  alt={item.name}
                />
                <div className="menu-item-details">
                  <h3>{item.name}</h3>
                  <p>{item.description}</p>
                </div>
                <div className="menu-item-price">₹{item.price}</div>
                <button className="add-to-cart-button" onClick={() => handleAddToCart(item)}>
                  Add to Cart
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No menu items available.</p>
        )}
        <button className="back-button" onClick={() => navigate('/')}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

export default RestaurantDetails;
