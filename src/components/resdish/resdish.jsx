/*import React from 'react';
import { useLocation } from 'react-router-dom';
import './RestStyles.css';
const Restaurants = () => {
  const location = useLocation();
  const { restaurants, dishName } = location.state || {};
  if (!restaurants || restaurants.length === 0) {
    return <div className="rest-no-restaurants-message">No restaurants available for {dishName}</div>;
  }
 return (
    <div className="rest-list-container">
      <h2 className="rest-header">Restaurants serving {dishName}</h2>
      <ul className="rest-list">
        {restaurants.map((restaurant, index) => (
          <li key={index} className="rest-card">
            <div className="rest-card-content">
              <img src={restaurant.image} alt={restaurant.name} className="rest-image" />
              <div className="rest-details">
                <h3 className="rest-name">{restaurant.name}</h3>
                <p className="rest-address"><strong>Restaurant:</strong> {restaurant.address}</p>
                <p className="rest-rating"><strong>Rating:</strong> {restaurant.Rating}</p>
                <p className="rest-timing"><strong>Timing:</strong> {restaurant.Timing}</p>
                <p className="rest-address"><strong>Address:</strong> {restaurant.Address}</p>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;*/
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useCart } from '../CartContext'; // Import the useCart hook
import './RestStyles.css';

const Restaurants = () => {
  const location = useLocation();
  const { restaurants, dishName } = location.state || {};
  const { addToCart } = useCart(); // Use addToCart function from CartContext

  if (!restaurants || restaurants.length === 0) {
    return <div className="rest-no-restaurants-message">No restaurants available for {dishName}</div>;
  }

  const handleAddToCart = (menuItem) => {
    addToCart(menuItem); // Add menu item to the cart
    alert(`${menuItem.name} added to cart!`);
  };

  return (
    <div className="rest-list-container">
      <h2 className="rest-header">Restaurants serving {dishName}</h2>
      <ul className="rest-list">
        {restaurants.map((restaurant, index) => (
          <li key={index} className="rest-card">
            <div className="rest-card-content">
              <img src={restaurant.image} alt={restaurant.name} className="rest-image" />
              <div className="rest-details">
                <h3 className="rest-name">{restaurant.name}</h3>
                <p className="rest-address"><strong>Restaurant:</strong> {restaurant.address}</p>
                <p className="rest-address"><strong>Price:</strong> ₹{restaurant.price}</p>
                <p className="rest-rating"><strong>Rating:</strong> {restaurant.Rating}</p>
                <p className="rest-timing"><strong>Timing:</strong> {restaurant.Timing}</p>
                <p className="rest-address"><strong>Address:</strong> {restaurant.Address}</p>
              </div>
              <div>
              <button className="add-to-cart-button" onClick={() => handleAddToCart(restaurant)}> Add to Cart
              </button>
              </div>
             
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Restaurants;
