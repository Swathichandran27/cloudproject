/*import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import UserPool from "../../UserPool";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("Login success:", data);
        setIsSuccess(true);
        setMessage("✅ Login successful!");
        setTimeout(() => navigate("/"), 2000); // Change path as needed
      },
      onFailure: (err) => {
        console.error("Login failed:", err);
        setIsSuccess(false);
        setMessage("❌ " + err.message);
      },
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.card}>
        <h2 style={styles.title}>🔐 Login to Your Account</h2>
        <form onSubmit={onSubmit} style={styles.form}>
          <input
            type="email"
            placeholder="Email"
            style={styles.input}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            style={styles.input}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>
        {message && (
          <p
            style={{
              ...styles.message,
              color: isSuccess ? "green" : "red",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  page: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #ece9e6, #ffffff)",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    background: "rgba(255, 255, 255, 0.85)",
    backdropFilter: "blur(8px)",
    borderRadius: "20px",
    padding: "40px",
    boxShadow: "0 8px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "20px",
    color: "#2c3e50",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  input: {
    padding: "14px",
    marginBottom: "20px",
    borderRadius: "12px",
    border: "1px solid #ccc",
    fontSize: "15px",
    outline: "none",
  },
  button: {
    padding: "14px",
    borderRadius: "12px",
    border: "none",
    backgroundColor: "#007bff",
    color: "#fff",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
  },
  message: {
    marginTop: "20px",
    fontSize: "14px",
    fontWeight: "500",
  },
};

export default Login;*/


/*
import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import UserPool from "../../UserPool";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: () => {
        setIsSuccess(true);
        setMessage("🍽️ Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      },
      onFailure: (err) => {
        setIsSuccess(false);
        setMessage(err.message || "Login failed. Please try again.");
      },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.heading}>Welcome Back to Foodiez!</h2>
        <p style={styles.subheading}>Login to order your favorite meals 🍕🍔</p>
        <form onSubmit={onSubmit} style={styles.form}>
          <label style={styles.label}>Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={styles.input}
          />
          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={styles.input}
          />
          <button type="submit" style={styles.button}>🍴 Login & Order</button>
        </form>
        {message && (
          <p
            style={{
              ...styles.message,
              color: isSuccess ? "#2e7d32" : "#c62828",
              backgroundColor: isSuccess ? "#e8f5e9" : "#ffebee",
              border: `1px solid ${isSuccess ? "#2e7d32" : "#c62828"}`,
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    padding: "20px",
  },
  card: {
    width: "100%",
    maxWidth: "400px",
    backgroundColor: "#fff8f0",
    borderRadius: "16px",
    padding: "40px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#d84315",
    marginBottom: "8px",
    textAlign: "center",
  },
  subheading: {
    fontSize: "14px",
    color: "#6d4c41",
    marginBottom: "30px",
    textAlign: "center",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    color: "#5d4037",
    marginBottom: "6px",
  },
  input: {
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#ff7043",
    color: "#fff",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: "20px",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "500",
  },
};

export default Login;
*/

import React, { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import { useNavigate } from "react-router-dom";
import UserPool from "../../UserPool";
import { minHeight } from "@mui/system";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();

    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    user.authenticateUser(authDetails, {
      onSuccess: () => {
        setIsSuccess(true);
        setMessage("🍽️ Login successful! Redirecting...");
        setTimeout(() => navigate("/"), 2000);
      },
      onFailure: (err) => {
        setIsSuccess(false);
        setMessage(err.message || "Login failed. Please try again.");
      },
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        {/* Left side - Login */}
        <div style={styles.left}>
          <h2 style={styles.heading}>Welcome Back to FoodAlix!</h2>
          <p style={styles.subheading}>Login to order your favorite meals 🍕🍔</p>
          <form onSubmit={onSubmit} style={styles.form}>
            <label style={styles.label}>Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={styles.input}
            />
            <label style={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={styles.input}
            />
            <button type="submit" style={styles.button}>🍴 Login & Order</button>
          </form>
          {message && (
            <p
              style={{
                ...styles.message,
                color: isSuccess ? "#2e7d32" : "#c62828",
                backgroundColor: isSuccess ? "#e8f5e9" : "#ffebee",
                border: `1px solid ${isSuccess ? "#2e7d32" : "#c62828"}`,
              }}
            >
              {message}
            </p>
          )}
        </div>

        {/* Right side - Image */}
        <div style={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=800&q=80"
            alt="Delicious food"
            style={styles.image}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    width: "100vw",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "linear-gradient(135deg, #fff3e0, #ffe0b2)",
    padding: "20px",
  },
  card: {
    display: "flex",
    flexDirection: "row",
    width: "100%",
    maxWidth: "1200px",
    minHeight:"600px",
    backgroundColor: "#fff8f0",
    borderRadius: "16px",
    boxShadow: "0 6px 20px rgba(0, 0, 0, 0.1)",
    overflow: "hidden",
  },
  left: {
    flex: 1,
    padding: "40px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  right: {
    flex: 1,
    backgroundColor: "#ffe0b2",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  heading: {
    fontSize: "24px",
    fontWeight: "700",
    color: "#d84315",
    marginBottom: "8px",
    textAlign: "left",
  },
  subheading: {
    fontSize: "14px",
    color: "#6d4c41",
    marginBottom: "30px",
    textAlign: "left",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontSize: "14px",
    color: "#5d4037",
    marginBottom: "6px",
  },
  input: {
    padding: "12px",
    marginBottom: "20px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    fontSize: "14px",
    outline: "none",
  },
  button: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    backgroundColor: "#ff7043",
    color: "#fff",
    fontWeight: "600",
    fontSize: "15px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
  message: {
    marginTop: "20px",
    padding: "12px",
    borderRadius: "8px",
    fontSize: "14px",
    textAlign: "center",
    fontWeight: "500",
  },
};

export default Login;
