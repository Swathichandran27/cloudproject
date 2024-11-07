import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './explore.css';

const Exploremenu = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRestaurants = () => {
      axios.get('http://localhost:3000/res')
        .then(response => {
          setRestaurants(response.data); 
        })
        .catch(err => {
          setError(err.message || 'Error fetching data');
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchRestaurants();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="explore-container">
      {/* Add horizontal line above the title */}
      <hr />
      <h1 style={{textAlign:"center"}}>Explore Restaurants</h1>
      <div className="restaurant-list">
        {restaurants.map((restaurant) => (
          <Link to={`/res/${restaurant.id}`} key={restaurant.id} className="restaurant-card">
            <img src={restaurant.image} alt={restaurant.name} className="restaurant-image" />
            <h2 className="restaurant-name">{restaurant.name}</h2>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Exploremenu;
