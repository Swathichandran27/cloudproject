import React, { useState } from 'react';
import './Login.css';

const Login = ({ setShowLogin, setLoggedInUser }) => {
  const [curState, setCurState] = useState('Login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [name, setName] = useState('');

  // List of admin email IDs
  const adminEmails = ['admin1@example.com', 'admin2@example.com'];

  // Email validation regex
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  // Password validation (minimum 6 characters, at least one letter and one number)
  const validatePassword = (password) => {
    const regex = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}/;
    return regex.test(password);
  };

  // The handleSubmit function is called when the form is submitted
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission

    setError(''); // Reset error state

    // Common validation for login and sign-up
    if (!validateEmail(email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!validatePassword(password)) {
      setError('Password must be at least 6 characters long and contain at least one letter and one number.');
      return;
    }

    // Login logic
    if (curState === 'Login') {
      console.log(`Attempting login for: ${email}`);
      const isAdmin = adminEmails.includes(email); // Check if the email belongs to an admin
      console.log(`Is Admin: ${isAdmin}`);

      setLoggedInUser({
        name: isAdmin ? 'Admin' : 'User', // Set name to Admin or User
        email,
        role: isAdmin ? 'admin' : 'user', // Set role based on whether it's an admin email
        profilePic: 'https://up.yimg.com/ib/th?id=OIP.w2McZSq-EYWxh02iSvC3xwHaHa&pid=Api&rs=1&c=1&qlt=95&w=120&h=120'
      });

      setShowLogin(false); // Close the login modal
    } else {
      // Sign-up logic
      if (!name.trim()) {
        setError('Please enter your name.');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match.');
        return;
      }

      const isAdmin = adminEmails.includes(email); // Check if the email belongs to an admin
      console.log(`Is Admin during sign-up: ${isAdmin}`);

      setLoggedInUser({
        name,
        email,
        role: isAdmin ? 'admin' : 'user', // Set role based on whether it's an admin email
        profilePic: 'path/to/profile-pic.jpg'
      });

      setShowLogin(false); // Close the sign-up modal
    }
  };

  return (
    <div className='login'>
      <form className='loginpop' onSubmit={handleSubmit}> {/* Form submission triggers handleSubmit */}
        <div className='loginpopup-title'>
          <h2>{curState === 'Login' ? 'Login' : 'Sign Up'}</h2>
          <button type='button' onClick={() => setShowLogin(false)}>X</button>
        </div>
        <div className='logininput'>
          {curState === 'Sign Up' && (
            <input
              type='text'
              placeholder='Your name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          )}
          <input
            type='email'
            placeholder='Your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {curState === 'Sign Up' && (
            <input
              type='password'
              placeholder='Confirm Password'
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          )}
        </div>
        <button type='submit'>{curState === 'Login' ? 'Login' : 'Create account'}</button>
        <div className='LoginCondition'>
          <input type='checkbox' required />
          <p>By continuing, I agree to the terms of use and privacy policy.</p>
        </div>
        {error && <p className='error'>{error}</p>}
        <p>
          {curState === 'Login' ? (
            <>
              Create a new account?{' '}
              <span onClick={() => setCurState('Sign Up')}>Click here</span>
            </>
          ) : (
            <>
              Already have an account?{' '}
              <span onClick={() => setCurState('Login')}>Login here</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default Login;
