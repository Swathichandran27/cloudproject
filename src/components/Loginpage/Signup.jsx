/*import React, { useState } from 'react';
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
      <form className='loginpop' onSubmit={handleSubmit}>
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

export default Login;*/
/*import React, { useState } from "react";
import './Login.css';
import UserPool from "../../UserPool";
const Login=()=>{
   const [email,setEmail]=useState("");
   const [password,setPassword]=useState("");
  const onSubmit=(event)=>{
     event.preventDefault();
     UserPool.signUp(email,password,[],null,(err,data)=>{
      if(err){
        console.error(err);
      }
      console.log(data);
     })
  };

   return (
    <div>
      <form onSubmit={onSubmit}>
        <label htmlFor="email">email</label>
        <input value={email}
        onChange={(event)=>setEmail(event.target.value)}>
          </input>
        <label htmlFor="password">Password</label>
        <input value={password}
        onChange={(event)=>setPassword(event.target.value)}>
          </input>
          <button type="submit">Signup</button>
      </form>
    </div>
   )
  }
export default Login;*/
/*
import React, { useState } from "react";
import UserPool from "../../UserPool";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error("Signup error:", err);
        setMessage(err.message || "Signup failed");
      } else {
        console.log("Signup success:", data);
        setMessage("Signup successful. Please check your email to confirm.");
        navigate("/confirm", { state: { email } }); // Pass email to confirmation page
      }
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label>Password:</label>
        <input
          value={password}
          type="password"
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;*/

/*This Login is working good ..this is before sep pages

import React, { useState } from "react";
import UserPool from "../../UserPool";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error("Signup error:", err);
        if (err.code === "UsernameExistsException") {
          setMessage("This email is already registered.");
        } else {
          setMessage(err.message || "Signup failed");
        }
      } else {
        console.log("Signup success:", data);
        setMessage("Signup successful. Please check your email to confirm.");
        navigate("/confirm", { state: { email } }); // navigate to confirm page
      }
    });
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Login;*/

// src/Loginpage/Signup.jsx
/*import React, { useState } from "react";
import UserPool from "../../UserPool";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error("Signup error:", err);
        if (err.code === "UsernameExistsException") {
          setMessage("This email is already registered.");
        } else {
          setMessage(err.message || "Signup failed");
        }
      } else {
        console.log("Signup success:", data);
        setMessage("Signup successful. Please check your email to confirm.");
        navigate("/confirm", { state: { email } });
      }
    });
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Sign Up</h2>
      <form onSubmit={onSubmit}>
        <label>Email:</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br />
        <label>Password:</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <br />
        <button type="submit">Sign Up</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Signup;*/


// src/Loginpage/Signup.jsx
// src/Loginpage/Signup.jsx
/*
import React, { useState } from "react";
import UserPool from "../../UserPool";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error("Signup error:", err);
        if (err.code === "UsernameExistsException") {
          setMessage("This email is already registered.");
        } else {
          setMessage(err.message || "Signup failed");
        }
      } else {
        console.log("Signup success:", data);
        setMessage("Signup successful. Please check your email to confirm.");
        navigate("/confirm", { state: { email } });
      }
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.left}>
        <h2 style={styles.heading}>Welcome!</h2>
        <p style={styles.subheading}>Create your account to get started</p>
        <form onSubmit={onSubmit} style={styles.form}>
          <input
            style={styles.input}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <input
            style={styles.input}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            required
          />
          <button type="submit" style={styles.button}>
            Sign Up
          </button>
        </form>
        {message && <p style={styles.message}>{message}</p>}
        <p style={styles.footerText}>
          Already have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>

      <div style={styles.right}>
        <img
          src="https://forknspice.com/wp-content/uploads/2022/08/joseph-gonzalez-176749-unsplash-500x375.jpg" // You should copy the food image to your public folder and rename it to signup-image.png
          alt="Signup Visual"
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
    page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },

  container: {
    display: "flex",
    width: "900px",
    height: "500px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
  left: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "14px 18px",
    marginBottom: "20px",
    borderRadius: "30px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },
  message: {
    color: "red",
    marginTop: "15px",
    textAlign: "center",
  },
  loginText: {
    marginTop: "25px",
    fontSize: "14px",
    textAlign: "center",
  },
  loginLink: {
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
  right: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Signup;*/

import React, { useState } from "react";
import UserPool from "../../UserPool";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const onSubmit = (e) => {
    e.preventDefault();

    UserPool.signUp(email, password, [], null, (err, data) => {
      if (err) {
        console.error("Signup error:", err);
        if (err.code === "UsernameExistsException") {
          setMessage("This email is already registered.");
        } else {
          setMessage(err.message || "Signup failed");
        }
      } else {
        console.log("Signup success:", data);
        setMessage("Signup successful. Please check your email to confirm.");
        navigate("/confirm", { state: { email } });
      }
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.left}>
          <h2 style={styles.title}>Welcome!</h2>
          <p style={styles.subtitle}>Create your account to get started</p>
          <form onSubmit={onSubmit} style={styles.form}>
            <input
              style={styles.input}
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              style={styles.input}
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button type="submit" style={styles.button}>
              Sign Up
            </button>
          </form>
          {message && <p style={styles.message}>{message}</p>}
          <p style={styles.loginText}>
            Already have an account?{" "}
            <span
              style={styles.loginLink}
              onClick={() => navigate("/login")}
            >
              Login
            </span>
          </p>
        </div>
        <div style={styles.right}>
          <img
            src="https://forknspice.com/wp-content/uploads/2022/08/joseph-gonzalez-176749-unsplash-500x375.jpg"
            alt="Visual"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    width: "100vw",
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f2f2f2",
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
  },
  container: {
    display: "flex",
    width: "1100px",
    height: "600px",
    backgroundColor: "#fff",
    borderRadius: "20px",
    overflow: "hidden",
    boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)",
  },
  left: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "14px",
    color: "#777",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "14px 18px",
    marginBottom: "20px",
    borderRadius: "30px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    padding: "14px",
    borderRadius: "30px",
    border: "none",
    backgroundColor: "#000",
    color: "#fff",
    fontWeight: "bold",
    fontSize: "15px",
    cursor: "pointer",
  },
  message: {
    color: "red",
    marginTop: "15px",
    textAlign: "center",
  },
  loginText: {
    marginTop: "25px",
    fontSize: "14px",
    textAlign: "center",
  },
  loginLink: {
    color: "#000",
    fontWeight: "bold",
    cursor: "pointer",
    textDecoration: "underline",
  },
  right: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
};

export default Signup;
