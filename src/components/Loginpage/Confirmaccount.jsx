/*import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useLocation, useNavigate } from "react-router-dom";
import UserPool from "../../UserPool";

const Confirmaccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledEmail = location.state?.email || "";
  const [email] = useState(prefilledEmail);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Username: email,
      Pool: UserPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.error("Confirmation error:", err);
        setMessage("Confirmation failed: " + err.message);
      } else {
        console.log("Confirmation success:", result);
        setMessage("Account confirmed! You can now log in.");
        navigate("/home");
      }
    });
  };

  return (
    <div>
      <h2>Confirm Your Account</h2>
      <p>Email: <strong>{email}</strong></p>
      <form onSubmit={onSubmit}>
        <label>Enter Confirmation Code</label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Confirm Account</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Confirmaccount;*/

/*import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useLocation, useNavigate } from "react-router-dom";
import UserPool from "../../UserPool";

const Confirmaccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledEmail = location.state?.email || "";
  const [email] = useState(prefilledEmail);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Username: email,
      Pool: UserPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.error("Confirmation error:", err);
        setMessage("Confirmation failed: " + err.message);
      } else {
        console.log("Confirmation success:", result);
        setMessage("Account confirmed! You can now log in.");
        navigate("/"); // Redirect to homepage or login
      }
    });
  };

  return (
    <div>
      <h2>Confirm Your Account</h2>
      <p>Email: <strong>{email}</strong></p>
      <form onSubmit={onSubmit}>
        <label>Enter Confirmation Code</label>
        <input
          value={code}
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button type="submit">Confirm Account</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default Confirmaccount;*/

import React, { useState } from "react";
import { CognitoUser } from "amazon-cognito-identity-js";
import { useLocation, useNavigate } from "react-router-dom";
import UserPool from "../../UserPool";

const Confirmaccount = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const prefilledEmail = location.state?.email || "";
  const [email] = useState(prefilledEmail);
  const [code, setCode] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const userData = {
      Username: email,
      Pool: UserPool,
    };

    const cognitoUser = new CognitoUser(userData);

    cognitoUser.confirmRegistration(code, true, (err, result) => {
      if (err) {
        console.error("Confirmation error:", err);
        setMessage("❌ " + err.message);
      } else {
        console.log("Confirmation success:", result);
        setMessage("✅ Account confirmed! You can now log in.");
        setTimeout(() => navigate("/"), 2000);
      }
    });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* Left: Confirmation Form */}
        <div style={styles.left}>
          <h2 style={styles.title}>📩 Confirm Your Account</h2>
          <p style={styles.subtitle}>
            A confirmation code was sent to <strong>{email}</strong>
          </p>
          <form onSubmit={onSubmit} style={styles.form}>
            <label style={styles.label}>Enter Confirmation Code</label>
            <input
              type="text"
              placeholder="Confirmation Code"
              style={styles.input}
              value={code}
              onChange={(e) => setCode(e.target.value)}
              required
            />
            <button type="submit" style={styles.button}>
              Confirm
            </button>
          </form>
          {message && (
            <p
              style={{
                ...styles.message,
                color: message.includes("✅") ? "green" : "red",
              }}
            >
              {message}
            </p>
          )}
        </div>

        {/* Right: Background Food Image */}
        <div style={styles.right}>
          <img
            src="https://images.unsplash.com/photo-1551024601-bec78aea704b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHx8MA%3D%3D"
            alt="Food Visual"
            style={styles.image}
          />
        </div>
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
    background: "linear-gradient(135deg, #f9f9f9, #ffffff)",
  },
  container: {
    display: "flex",
    width: "950px",
    height: "550px",
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
    backgroundColor: "#ffffff",
  },
  right: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  title: {
    fontSize: "26px",
    fontWeight: "700",
    marginBottom: "10px",
    color: "#2c3e50",
  },
  subtitle: {
    fontSize: "14px",
    color: "#555",
    marginBottom: "30px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    fontWeight: "600",
    marginBottom: "8px",
    fontSize: "14px",
    color: "#333",
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
    backgroundColor: "#ff7043",
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

export default Confirmaccount;
