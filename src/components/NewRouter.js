/*import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Loginpage/Login';
import Restaurants from './resdish/resdish';
import RestaurantDetails from './resdetails/Resdet';
import Dishes from './dishes/dishes';
import Exploremenu from './exploremenu';
import Head from './Header/Head';
import Footer from './footer/footer';
import Cart from './Cart'; // Import the Cart page
import { CartProvider } from './CartContext'; // Import CartProvider
import PaymentPage from './payment';
import OrderSummary from './OrderSummary';
import Ord from './Ord';

const NewRouter = () => {

 
 const [showLogin, setShowLogin] = useState(false);
 const [loggedInUser, setLoggedInUser] = useState(null);

 const handleLogout = () => {
   setLoggedInUser(null); // Clear logged in user
   // Optionally show login modal after logout
 };
  
  return (
    <CartProvider>
      <BrowserRouter>

         {showLogin && <Login setShowLogin={setShowLogin} setLoggedInUser={setLoggedInUser} />}
         <Navbar loggedInUser={loggedInUser} setShowLogin={setShowLogin} handleLogout={handleLogout} />
       
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Head />
                <Exploremenu />
                <Dishes />
                <Footer />
              </>
            }
          />
          <Route path='/res/:id' element={<RestaurantDetails />} />
          <Route path='/restaurants/:dishName' element={<Restaurants />} />
          <Route path='/cart' element={<Cart />} />
          <Route path="/payment" element={<PaymentPage />} />

<Route path="/order-summary" element={<OrderSummary />} />
<Route path='/exploremenu' element={<Exploremenu />} />
<Route path='/dishes' element={<Dishes />} />
<Route path="/ord" element={<Ord/>} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default NewRouter;*/
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Login from './Loginpage/Login';
import Restaurants from './resdish/resdish';
import RestaurantDetails from './resdetails/Resdet';
import Dishes from './dishes/dishes';
import Exploremenu from './exploremenu';
import Head from './Header/Head';
import Footer from './footer/footer';
import Cart from './Cart'; // Import the Cart page
import { CartProvider } from './CartContext'; // Import CartProvider
import PaymentPage from './payment';
import OrderSummary from './OrderSummary';
import Ord from './Ord';
import AdminDashboard from './admin/Admin';
import Scheduler from './Scheduler';
import RestaurantManager from './admin/Adminres';

const NewRouter = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState(null); // Store user information

  const handleLogout = () => {
    setLoggedInUser(null); // Clear logged-in user when logging out
  };
  console.log('Current loggedInUser:', loggedInUser);
  const handleLogin = (userData) => {
    setLoggedInUser(userData); // This should be called when user successfully logs in
  };

  return (
    <CartProvider> {/* Wrap everything in CartProvider */}
      <BrowserRouter>
        {showLogin && (
          <Login
            setShowLogin={setShowLogin}
            setLoggedInUser={handleLogin}
          />
        )}
        <Navbar
          loggedInUser={loggedInUser}
          setShowLogin={setShowLogin}
          handleLogout={handleLogout}
        />

        <Routes>
          <Route
            path='/'
            element={
              <>
                <Head />
                <Exploremenu />
                <Dishes />
                <Footer />
              </>
            }
          />
          <Route path='/scheduler' element={<Scheduler />} />
          <Route path='/res/:id' element={<RestaurantDetails />} />
          <Route path='/restaurants/:dishName' element={<Restaurants />} />
          <Route path='/cart' element={<Cart />} /> {/* Cart page route */}
          <Route path="/payment" element={<PaymentPage />} />
          <Route path="/order-summary" element={<OrderSummary />} />
          <Route path='/exploremenu' element={<Exploremenu />} />
          <Route path='/dishes' element={<Dishes />} />
          <Route path="/ord" element={<Ord />} />
          
          <Route
            path='/admin'
            element={<AdminDashboard loggedInUser={loggedInUser}/>}
          />
            <Route path="/manage-restaurants" element={<RestaurantManager />} />
      
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default NewRouter;
