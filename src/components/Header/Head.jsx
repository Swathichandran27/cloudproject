/*import React from 'react'
import './Head.css'
import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
const Head = () => {
  const navigate = useNavigate; // Initialize useNavigate

  const handleViewMenuClick = () => {
    navigate('/dishes'); // Navigate to the Dishes page when button is clicked
  };

  return (
    <div className='header'>
      <div className="header-contents">
       <h2>Your Favourite Food Delivered Hot & Fresh</h2>
       <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise.Our delicious meal at a time.</p>
       <Button size='small' color='inherit'onClick={handleViewMenuClick}>View Menu</Button>
       
      </div>
    </div>
  )
}

export default Head*/
import React from 'react';
import './Head.css';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/h5.jpg';  




const Head = () => {
  const navigate = useNavigate(); // Correctly invoke useNavigate()

  const handleViewMenuClick = () => {
    navigate('/dishes'); // Navigate to the Dishes page when button is clicked
  };

  return (
    <div className='header' style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="header-contents">
        <h2>Your Favourite Food Delivered Hot & Fresh</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. Our delicious meal at a time.</p>
        <Button size='small' color='inherit' onClick={handleViewMenuClick}>View Menu</Button> {/* Add onClick handler */}
      </div>
    </div>
  );
};

export default Head;
