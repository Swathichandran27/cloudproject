/*import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';
import { useCart } from './CartContext'; 
import { useNavigate } from 'react-router-dom';

const Navbar = ({ loggedInUser, setShowLogin, handleLogout }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={() => {
          setMenu("home");
          navigate('/'); // Navigate to home
        }} className={menu === "home" ? "active" : ""}>
          Home
        </li>
        <li onClick={() => {
          setMenu("menu");
          navigate('/exploremenu'); // Navigate to Exploremenu when Hotels is clicked
        }} className={menu === "menu" ? "active" : ""}>
          Hotels
        </li> 
        <li onClick={() => {
  setMenu("mobile-app");
  navigate('/ord', { state: { cartItems, totalAmount: cartItems.reduce((sum, item) => sum + item.price, 0) } }); // Pass cartItems and totalAmount
}} className={menu === "mobile-app" ? "active" : ""}>
  Orders
</li>

<li onClick={() => {
          setMenu("scheduler");
          navigate('/scheduler'); // Navigate to Scheduler page
        }} className={menu === "scheduler" ? "active" : ""}>
          Scheduler
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className='navbar-cart-icon' onClick={() => navigate('/cart')}>
          <img src={assets.basket_icon} alt="Cart" />
          {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
        </div>
        {loggedInUser ? (
          <>
            <img src='https://up.yimg.com/ib/th?id=OIP.w2McZSq-EYWxh02iSvC3xwHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120' alt="Profile" style={{ width: '40px', borderRadius: '50%' }} /> 
           {loggedInUser.role === "admin" && (
          <li onClick={() => {
            setMenu("admin");
            navigate('/admin'); // Navigate to Admin
          }} className={menu === "admin" ? "active" : ""}>
            Admin
          </li>
        )}
            <button onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <button onClick={() => setShowLogin(true)}></button> // Button to show the login modal
        )}
      </div>
    </div>
  ); 
};

export default Navbar;*/


import React, { useState } from 'react';
import './Navbar.css';
import { assets } from '../assets/assets';
import { useCart } from './CartContext'; 
import { useNavigate } from 'react-router-dom';

const Navbar = ({ loggedInUser, setShowLogin, handleLogout }) => {
  const [menu, setMenu] = useState("home");
  const { cartItems } = useCart();
  const navigate = useNavigate();

  return (
    <div className='Navbar'>
      <img src={assets.logo} alt="" className='logo'/>
      <ul className='navbar-menu'>
        <li onClick={() => {
          setMenu("home");
          navigate('/'); // Navigate to home
        }} className={menu === "home" ? "active" : ""}>
          Home
        </li>
        <li onClick={() => {
          setMenu("menu");
          navigate('/exploremenu'); // Navigate to Exploremenu when Hotels is clicked
        }} className={menu === "menu" ? "active" : ""}>
          Hotels
        </li> 
        <li onClick={() => {
  setMenu("mobile-app");
  navigate('/ord', { state: { cartItems, totalAmount: cartItems.reduce((sum, item) => sum + item.price, 0) } }); // Pass cartItems and totalAmount
}} className={menu === "mobile-app" ? "active" : ""}>
  Orders
</li>

<li onClick={() => {
          setMenu("scheduler");
          navigate('/scheduler'); // Navigate to Scheduler page
        }} className={menu === "scheduler" ? "active" : ""}>
          Scheduler
        </li>
      </ul>
      <div className='navbar-right'>
        <img src={assets.search_icon} alt=""/>
        <div className='navbar-cart-icon' onClick={() => navigate('/cart')}>
          <img src={assets.basket_icon} alt="Cart" />
          {cartItems.length > 0 && <span className='cart-count'>{cartItems.length}</span>}
        </div>
       <button onClick={() => navigate("/signup")}>Sign Up</button>
      </div>
    </div>
  ); 
};

export default Navbar;

