import React from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ isAdmin, children }) => {
  console.log('PrivateRoute isAdmin:', isAdmin); // Add this line for debugging
  return isAdmin ? children : <Navigate to="/" />;
};


export default PrivateRoute;

