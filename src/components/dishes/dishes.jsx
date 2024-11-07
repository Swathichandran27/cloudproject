import React from 'react';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import './Dishes.css';
import { menu_list } from '../../assets/assets'; // Adjust the import path as necessary

const Dishes = () => {
  const navigate = useNavigate();

  const handleDishClick = (dish) => {
    navigate(`/restaurants/${dish.menu_name}`, { state: { restaurants: dish.restaurants, dishName: dish.menu_name } });
};


  return (
    <div className="container">
        <hr />
      <Typography variant="h3" align="center" gutterBottom>
        What's on your mind
      </Typography>
      <Grid container spacing={3} justifyContent="center" alignItems="center">
  {menu_list.map((dish, index) => (
    <Grid item key={index} xs={12} sm={6} md={4}>
      <Card onClick={() => handleDishClick(dish)} className="card" style={{ cursor: 'pointer' }}>
        <CardMedia
          component="img"
          height="250"
          image={dish.menu_image}
          alt={dish.menu_name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {dish.menu_name}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  ))}
</Grid>

    </div>
  );
};

export default Dishes;
