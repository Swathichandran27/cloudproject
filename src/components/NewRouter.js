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
import AdminDashboard from './admin/Admin';
import Scheduler from './Scheduler';
import RestaurantManager from './admin/Adminres';
import Confirmaccount from './Loginpage/Confirmaccount';

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
    <CartProvider>
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
          <Route path="/confirm" element={<Confirmaccount />} />
          <Route path='/scheduler' element={<Scheduler />} />
          <Route path='/res/:id' element={<RestaurantDetails />} />
          <Route path='/restaurants/:dishName' element={<Restaurants />} />
          <Route path='/cart' element={<Cart />} /> 
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

export default NewRouter;*/
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Signup from './Loginpage/Signup';
import Confirmaccount from './Loginpage/Confirmaccount';
import Head from './Header/Head';
import Footer from './footer/footer';
import Exploremenu from './exploremenu';
import Dishes from './dishes/dishes';
import Restaurants from './resdish/resdish';
import RestaurantDetails from './resdetails/Resdet';
import Cart from './Cart';
import { CartProvider } from './CartContext';
import PaymentPage from './payment';
import OrderSummary from './OrderSummary';
import Ord from './Ord';
import AdminDashboard from './admin/Admin';
import Scheduler from './Scheduler';
import RestaurantManager from './admin/Adminres';
import Login from './Loginpage/Login';

const Layout = ({ children }) => {
  const location = useLocation();
  const hideNavbar = location.pathname === "/signup" || location.pathname === "/confirm";
  
  return (
    <>
      {!hideNavbar && <Navbar />}
      {children}
    </>
  );
};

const NewRouter = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const handleLogin = (userData) => {
    setLoggedInUser(userData);
  };

  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path="/signup"
            element={<Signup />}
          />
          <Route
            path="/login"
            element={<Login/>}
          />
          <Route
            path="/confirm"
            element={<Confirmaccount />}
          />
          <Route
            path="/"
            element={
              <Layout>
                <Head />
                <Exploremenu />
                <Dishes />
                <Footer />
              </Layout>
            }
          />
          <Route
            path="/exploremenu"
            element={
              <Layout>
                <Exploremenu />
              </Layout>
            }
          />
          <Route
            path="/dishes"
            element={
              <Layout>
                <Dishes />
              </Layout>
            }
          />
          <Route
            path="/res/:id"
            element={
              <Layout>
                <RestaurantDetails />
              </Layout>
            }
          />
          <Route
            path="/restaurants/:dishName"
            element={
              <Layout>
                <Restaurants />
              </Layout>
            }
          />
          <Route
            path="/cart"
            element={
              <Layout>
                <Cart />
              </Layout>
            }
          />
          <Route
            path="/payment"
            element={
              <Layout>
                <PaymentPage />
              </Layout>
            }
          />
          <Route
            path="/order-summary"
            element={
              <Layout>
                <OrderSummary />
              </Layout>
            }
          />
          <Route
            path="/ord"
            element={
              <Layout>
                <Ord />
              </Layout>
            }
          />
          <Route
            path="/scheduler"
            element={
              <Layout>
                <Scheduler />
              </Layout>
            }
          />
          <Route
            path="/admin"
            element={
              <Layout>
                <AdminDashboard loggedInUser={loggedInUser} />
              </Layout>
            }
          />
          <Route
            path="/manage-restaurants"
            element={
              <Layout>
                <RestaurantManager />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
};

export default NewRouter;