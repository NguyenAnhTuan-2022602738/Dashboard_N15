import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService";
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await loginUser({ email, password });

      // Check the response from API
      if (response.code === 200) {
        console.log("Login successful", response);
        // Show success alert
        alert("Đăng nhập thành công!");
        // Redirect to dashboard after successful login
        navigate("/dashboard");
      } else {
        setError(response.message || "Đăng nhập thất bại");
      }
    } catch (error) {
      setError(error.message || "Đăng nhập thất bại");
      console.error("Login failed", error);
    }
  };

  const handleForgotPassword = () => {
    // Redirect to forgot password page (you can add your route if needed)
    navigate("/password/forgot");
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Mật khẩu"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">Đăng nhập</button>
        </form>
        <p>
          Chưa có tài khoản?{" "}
          <span
            className="register-link"
            onClick={() => navigate("/register")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Đăng ký
          </span>
        </p>
        <p>
          <span
            className="forgot-password-link"
            onClick={handleForgotPassword}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Quên mật khẩu?
          </span>
        </p>
      </div>
    </div>
  );
};

export default Login;
