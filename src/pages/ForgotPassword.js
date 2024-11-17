import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { forgotPassword, forgotPasswordOtp, forgotPasswordReset } from "../services/authService"; // Import the service functions
import "../styles/forgot-password.css"; // Make sure you have the styles linked

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [step, setStep] = useState(1); // Track current step in the flow
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleEmailSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to send OTP to the user's email
      const response = await forgotPassword(email);

      if (response.code === 200) {
        setStep(2); // Move to OTP input step
        setSuccessMessage("Đã gửi mã OTP qua email. Kiểm tra hộp thư của bạn.");
      } else {
        setError(response.message || "Gửi OTP thất bại");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  const handleOtpSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call API to verify OTP
      const response = await forgotPasswordOtp(email, otp);

      if (response.code === 200) {
        setStep(3); // Move to reset password step
        setSuccessMessage("Mã OTP hợp lệ. Vui lòng nhập mật khẩu mới.");
      } else {
        setError(response.message || "Mã OTP không hợp lệ");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      // Call API to reset password
      const response = await forgotPasswordReset(email, otp, newPassword);

      if (response.code === 200) {
        setSuccessMessage("Mật khẩu đã được thay đổi thành công.");
        // Navigate to login page after successful password reset
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setError(response.message || "Đổi mật khẩu thất bại");
      }
    } catch (error) {
      setError(error.response?.data?.message || "Có lỗi xảy ra");
    }
  };

  return (
    <div className="container">
      <div className="forgot-password-container">
        <h2>Quên mật khẩu</h2>

        {error && <p className="error-message">{error}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        {step === 1 && (
          <form onSubmit={handleEmailSubmit}>
            <input
              type="email"
              placeholder="Nhập email của bạn"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Gửi OTP</button>
          </form>
        )}

        {step === 2 && (
          <form onSubmit={handleOtpSubmit}>
            <input
              type="text"
              placeholder="Nhập mã OTP"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              required
            />
            <button type="submit">Xác thực OTP</button>
          </form>
        )}

        {step === 3 && (
          <form onSubmit={handlePasswordReset}>
            <input
              type="password"
              placeholder="Nhập mật khẩu mới"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />
            <button type="submit">Đổi mật khẩu</button>
          </form>
        )}

        <p>
          Quay lại trang đăng nhập?{" "}
          <span
            className="login-link"
            onClick={() => navigate("/login")}
            style={{ color: "blue", cursor: "pointer" }}
          >
            Đăng nhập
          </span>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;
