import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../services/authService"; // Hàm gọi API đăng nhập
import "../styles/login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false); // Trạng thái tải
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true); // Hiển thị trạng thái tải
    setError(""); // Xóa lỗi cũ

    try {
      // Gọi API loginUser với email và password
      const response = await loginUser({ email, password });

      if (response.code === 200) {
        // Kiểm tra nếu response có token và lưu vào localStorage
        if (response.token) {
          // Lưu token vào localStorage
          localStorage.setItem("token", response.token);

          // Lưu thông tin người dùng
          localStorage.setItem(
            "user",
            JSON.stringify({ fullname: response.fullname, email: response.email })
          );

          alert("Đăng nhập thành công!");

          // Điều hướng đến trang dashboard
          navigate("/admin/dashboard");
        } else {
          setError("Token không hợp lệ.");
        }
      } else {
        // Nếu đăng nhập không thành công, hiển thị thông báo lỗi
        setError(response.message || "Đăng nhập thất bại!");
      }
    } catch (error) {
      // Xử lý lỗi khi gọi API
      setError(error.response?.data?.message || "Có lỗi xảy ra trong quá trình đăng nhập.");
      console.error("Login failed:", error);
    } finally {
      // Tắt trạng thái tải
      setLoading(false);
    }
  };

  const handleForgotPassword = () => {
    navigate("/password/forgot"); // Điều hướng tới trang quên mật khẩu
  };

  return (
    <div className="container">
      <div className="login-container">
        <h2>Đăng nhập</h2>
        
        {/* Hiển thị thông báo lỗi nếu có */}
        {error && <p className="error-message">{error}</p>}
        
        {/* Form đăng nhập */}
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
          
          {/* Nút đăng nhập với trạng thái tải */}
          <button type="submit" disabled={loading}>
            {loading ? "Đang xử lý..." : "Đăng nhập"}
          </button>
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
